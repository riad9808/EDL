export class produit{
    categorie;
    produit;
    qtstock;
    taille;
    prix;
    constructor(categorie,produit,taille,prix,qtstock){
        this.categorie=categorie;
        this.produit=produit;
        this.taille=taille;
        this.prix=prix;
        this.qtstock=qtstock;

    }
}