/* import Producto from "./producto.js"; */

class Producto
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


class ListaDeProductos {

    DBNAME = 'listaProductos'
    formName = 'product'
    formNameModal = 'productModal'

    create = () => {
        let objProductos = this.getProductDetail()
        let datoAnterior = this.read() || []
        let datos_finales = [...datoAnterior, objProductos]
        localStorage.setItem(this.DBNAME, JSON.stringify(datos_finales))
        this.refreshData()
    }

    read = () => JSON.parse(localStorage.getItem(this.DBNAME))

    getProductDetail = () => {
        let nameProducto = document[this.formName]['productName'].value;
        let cantidad = document[this.formName]['productQuantity'].value;
        let price = document[this.formName]['productPrice'].value;
        let fecha = document[this.formName]['productDate'].value;
        return new Producto(nameProducto, cantidad, price, fecha)
    }

    setProductDetail = (obj) => {
        const myModal = new mdb.Modal(document.getElementById('myModal'))
        myModal.show()
        obj = JSON.parse(obj)
        console.log(obj)
        document[this.formNameModal]['productName'].value = obj.nameProduct;
        document[this.formNameModal]['productQuantity'].value = obj.quantityProduct;
        document[this.formNameModal]['productPrice'].value = obj.priceProduct;
        document[this.formNameModal]['productDate'].value = obj.fecha;
    }

    refreshData = () => {
        let listaProductos = this.read();
        listaProductos = listaProductos.map((obj, i) => `
            <tr>
                <td>${i + 1}</td>
                <td>${obj.nameProduct}</td>
                <td>${obj.quantityProduct}</td>
                <td>${obj.priceProduct}</td>
                <td>${obj.fecha}</td>
                <td class="colActions">
               
                <!-- Button trigger modal -->
                <button
                type="button"
                id="btnEdit${i}"
                name="btn-edit"
                class="btn btn-primary btn-sm"

                onclick="obj.setProductDetail('${JSON.stringify(obj).replace(/"/g, '&quot;')}')"
                >
                Editar
                </button>
                    <button type="button" id="btnDelete${i}" name="btn-delete" class="btn btn-danger btn-sm"><i class="fas fa-times fa-lg"" aria-hidden="true"></i></button>
                </td>
            </tr>`)
        document.getElementById('tableBody').innerHTML = listaProductos.join(' ')
    }


    update = () => { 

        /* this.setProductDetail() */

        /* let data = this.read();
   
        let fruta = 'piña'
        for (let i = 0; i < data.length; i++) {
            data[i].nameProduct = fruta
        }
        console.log(data) */
    }

    delete = (productIndex) => {
        productIndex = Number(productIndex.replace('btnDelete', ''))
        let listaProductos = this.read();
        listaProductos.splice(productIndex, 1)
        localStorage.setItem(this.DBNAME, JSON.stringify(listaProductos))
        this.refreshData()
    }
}

const obj = new ListaDeProductos();

obj.refreshData();

const process = (element) => {
    const listButtons = ['btn-delete', 'btn-edit']

    if (element.target.name == listButtons[0]) {
        obj.delete(element.target.id);
    }
    if (element.target.name == listButtons[1]) {
        obj.update();
    }
}

document.getElementById('btnCreate').addEventListener('click', (event) => {
    event.preventDefault();
    obj.create();
    obj.refreshData();
})


document.formTable.addEventListener('click', process)
/*  */

