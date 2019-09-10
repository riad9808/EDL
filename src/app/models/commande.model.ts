import {souscom} from "./souscom.model"

export class commande{
    serveur;
    numtable;
    valide;
    adresse;
    updated_at:Date;
    souscom:Array<souscom>;
    prix;
    constructor(serveur,numtable,adresse){
        this.serveur=serveur;
        this.numtable=numtable;
        this.adresse=adresse;
        this.souscom= new Array<souscom>();


    }
}
