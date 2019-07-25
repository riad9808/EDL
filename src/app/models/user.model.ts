export enum UserType{
    serveur,
    client,
    caissier,
    gerent
}

export class user{
    id:any;
    type :any;
    constructor(ide : any,typee : any){
        this.id=ide;
        this.type=typee
    }
}