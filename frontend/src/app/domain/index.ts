export interface User{
    id?:string; // 新的用户id 一般由服务器自动生成，所以可以为空，用?标示
    email:string;
    password:string;
    repeat:string;
    address:Address;
}

export interface Address{
    province:string;
    city:string;
    area:string;
    addr:string;
}