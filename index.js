function Rectangulo(Largo,Ancho){
    this.Largo = Largo;
    this.Ancho = Ancho;
    this.Area = function(){

        var ar =this.Largo * this.Ancho;
        return ar;
    }

    this.Perimetro = function(){
        var pr = 2*(this.Largo + this.Ancho);
        return pr;
    }
}