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

    get getNameProduct() {
        return this.nameProduct;
    }

    /**
     * @param {(arg0: string) => void} nameProduct
     */
    set setNameProduct(nameProduct) {
        this.nameProduct = nameProduct;
    }

    get getQuantityProduct() {
        return this.quantityProduct;
    }

    /**
     * @param {any} quantityProduct
     */
    set setQuantityProduct(quantityProduct) {
        this.quantityProduct = quantityProduct;
    }
    
}

