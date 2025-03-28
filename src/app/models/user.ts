export interface UserRegister {
    email: string,
    password: string,
    passwordConfirm: string,
    pseudo: string,
    cityCode: string,
    city: string,
    phone: string,
}


export interface UserAuth {
    email: string,
    password: string,
}
