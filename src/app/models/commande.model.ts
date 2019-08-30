import {souscom} from "./souscom.model"

export class commande{
    serveur;
    numtable;
    valide;
    date:Date;
    souscom:Array<souscom>;
    prix;
    constructor(serveur,numtable){
        this.serveur=serveur;
        this.numtable=numtable;
        this.souscom= new Array<souscom>();


    }
}
