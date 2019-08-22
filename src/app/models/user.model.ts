export enum UserType{
    serveur,
    client,
    caissier,
    gerent
}

export class user{
    username;
    fullname;
    telephone;
    password;
    

    type :any;
    
    
    constructor(username,fullname,telephone,password,type){
        
        this.username=username;
        this.fullname=fullname;

        this.telephone=telephone;
        this.password=password;
        this.type=type;
    }
}