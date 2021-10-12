export default class Producto
{
    nameProduct;
    quantityProduct;
    priceProduct;
    fecha;

    constructor(nameProduct, quantityProduct, priceProduct, fecha) {
        this.nameProduct = nameProduct;
        this.quantityProduct = quantityProduct;
        this.priceProduct = priceProduct;
        this.fecha = fecha;
    }

}
