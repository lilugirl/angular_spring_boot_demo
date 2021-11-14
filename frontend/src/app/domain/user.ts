export interface User{
    // 唯一标识
    id: string;
    // 用户名
    login: string;
    // 姓名
    name: string;
    // 密码
    password?: string;
    // 手机号
    mobile: string;
    // 头像
    avatar: string;
    // 电子邮件
    email: string | null;

}

export interface Auth{
    login: string;
    password: string;
}

export interface Quote{
    cn: string;
    en: string;
    imgUrl: string;
}