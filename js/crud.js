import Producto from "./producto.js";

class ListaDeProductos 
{

    create = () => {     
        let objProductos = this.getProductDetail()
        let datoAnterior = this.read() || []
        let datos_finales = [...datoAnterior, objProductos]
        localStorage.setItem('listadeproductos', JSON.stringify(datos_finales))
        this.refreshData()
    }

    read = () => JSON.parse(localStorage.getItem('listadeproductos'))

    getProductDetail = () => {
        let nameProducto = document['product']['productName'].value;
        let cantidad = document['product']['productQuantity'].value;
        let price = document['product']['productPrice'].value;
        let fecha =  document['product']['productDate'].value;
        return new Producto(nameProducto, cantidad, price, fecha)
    }
    
    refreshData = () => {
        let listaProductos = this.read();
        listaProductos = listaProductos.map((obj, i) => `
            <tr>
                <td>${i+1}</td>
                <td>${obj.nameProduct}</td>
                <td>${obj.quantityProduct}</td>
                <td>${obj.priceProduct}</td>
                <td>${obj.fecha}</td>
                <td class="colActions">
                
                <button type="button" id="btnEdit${i}" name="btn-edit" class="btn btn-primary btn-sm"><i class="fa fa-edit text-ligth" aria-hidden="true"></i></button>
                <button type="button" id="btnDelete${i}" name="btn-delete" class="btn btn-danger btn-sm"><i class="fa fa-trash text-ligth" aria-hidden="true"></i></button>
                </td>
            </tr>`)

        document.getElementById('tableBody').innerHTML = listaProductos.join(' ')
    }

    
    update = () => { }
    
    delete = () => { }

    
}

let obj = new ListaDeProductos();

document.getElementById('btnCreate').addEventListener('click', (event) => {
    event.preventDefault();
    obj.create();
    obj.add();
})

/* document.getElementById('btnUpdate').addEventListener('click', (event) => {
    event.preventDefault();
    obj.refreshData();
})
 */


