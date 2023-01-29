export interface User {
    name : string | null,
    email: string,
    phone: string | null,
    address: string | null,
    password?: string,
    token? : string | null,
}