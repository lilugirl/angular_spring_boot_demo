import { Attribute, Directive,forwardRef } from "@angular/core";
import { NG_VALIDATORS,AbstractControl, Validator } from "@angular/forms";

@Directive({
    // 指令也有selector这个元数据，这里要求DOM元素应用validateEqual ，还需要它是一个
    // ngModel元素，这样它才是一个FromControl，在使用validate方法时才是合法的
    selector:'[validateEqual][ngModel]',
    
    // 验证器有一个内部机制：Angular维护一个令牌叫做NG_VALIDATORS的multi provider（
    // 简单来说，Angular为一个单一令牌注入多个值的这种形式叫做multi provider）。
    // 所有的内建验证器都是加到这个NG_VALIDATIORS的令牌上的，因此在做验证时，Angular注入
    // 了NG_VALIDATORS的依赖，也就是所有的验证器，然后一个个地按顺序执行。因此我们这里也
    // 把自己加到这个NG_VALIDATORS中。
    providers:[
        {
            provide:NG_VALIDATORS,
            // 如果我们直接写成useExisting:RepeatValidatorDirective,则会出现一个问题，RepeatValidatorDirective还没有生成，你怎么能在元数据中使用呢？
            // 这就需要使用forwardRef来解决这个问题，它接受返回一个类的函数作为参数，但这个函数不会立即被调用，而是在该类声明后被调用，也就避免了undefined的状况
            useExisting:forwardRef(()=>RepeatValidatorDirective),
            multi:true
        }
    ]
})
export class RepeatValidatorDirective implements Validator{
    constructor(
        @Attribute('validateEqual') public validateEqual:string,
        @Attribute('reverse') public reverse:string
        ){}

    private get isReverse(){
        if(!this.reverse) return false;
        return this.reverse==='true'?true:false;
    }

    // Validator接口要求必须实现一个方法
    // validate(c:AbstractControll):ValidationErrors | null 。
    validate(c:AbstractControl):{[key:string]:any} | null  {
         // 控件自身值
         let self=c.value;
         

         // 要对比的值，也就是在validateEqual='ctrolname'的那个控件的值
         let target=c.root.get(this.validateEqual);
        

         // 不反向查询且值不相等
         if(target && self !==target.value && !this.isReverse){
             return {
                 validateEqual:true
             }
         }

         // 反向查询且值相等
         if(target && self ===target.value && this.isReverse){
             delete target.errors!['validateEqual'];
             if(!Object.keys(target.errors!).length) target.setErrors(null)
         }

         // 反向查询且值不相等
         if(target && self !==target.value && this.isReverse){
            target.setErrors({
                validateEqual:true
            })
         }

         return null

    }



}