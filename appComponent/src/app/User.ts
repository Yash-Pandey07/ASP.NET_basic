export class User
{
    id!: number;
    email!: string;
    psw!: string;
    confirmPwd!: string;
    gender!: string;
    terms!: boolean;

    constructor (values: Object={}){
        //Constructor initilization
        Object.assign(this,values)
    }
}