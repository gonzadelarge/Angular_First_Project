import { Iinfo } from "src/app/models/foyonePage";

export interface Icontact {
    info: Iinfo;
    form: UserRegister
}

export interface UserRegister {
    name: string;
    surname: string;
    email: string;
    mesage: string;
}