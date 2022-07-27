class Factura{
    constructor(numero, factura, divisa, subtotal){
        this.numero= numero;
        this.factura= factura;
        this.divisa= divisa;
        this.subtotal= subtotal;
    }
    impuesto(){
        let valor = (this.subtotal * 0.16);
        return valor;
    }
    total(){
        let vfac= this.subtotal + this.impuesto();
        return vfac;
    }
}

let myFactura1 = new Factura(1,201,"MX",62);
let myFactura2 = new Factura(2,083,"MX",23);
let myFactura3 = new Factura(3,084,"MX",24);
let myFactura4 = new Factura(4,085,"MX",26);
let myFactura5 = new Factura(5,086,"MX",27);

console.log(" Factura:"+ myFactura1.factura+" Impuesto(16%):" + myFactura1.impuesto()+" Total:"+ myFactura1.total());
console.log(" Factura:"+ myFactura2.factura+" Impuesto(16%):" + myFactura2.impuesto()+" Total:"+ myFactura2.total());
console.log(" Factura:"+ myFactura3.factura+" Impuesto(16%):" + myFactura3.impuesto()+" Total:"+ myFactura3.total());
console.log(" Factura:"+ myFactura4.factura+" Impuesto(16%):" + myFactura4.impuesto()+" Total:"+ myFactura4.total());
console.log(" Factura:"+ myFactura5.factura+" Impuesto(16%):" + myFactura5.impuesto()+" Total:"+ myFactura5.total());



