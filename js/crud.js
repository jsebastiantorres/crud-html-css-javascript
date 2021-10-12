import Producto from "./producto.js";


class ListaDeProductos {
    create = () => {
        let objProductos = this.getProductDetail()
        let datoAnterior = this.read() || []
        let datos_finales = [...datoAnterior, objProductos]
        localStorage.setItem('listaProductos', JSON.stringify(datos_finales))
        this.refreshData()
    }

    read = () => JSON.parse(localStorage.getItem('listaProductos'))

    getProductDetail = () => {
        let nameProducto = document['product']['productName'].value;
        let cantidad = document['product']['productQuantity'].value;
        let price = document['product']['productPrice'].value;
        let fecha = document['product']['productDate'].value;
        return new Producto(nameProducto, cantidad, price, fecha)
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
                    data-mdb-toggle="modal"
                    data-mdb-target="#exampleModal"
                    >
                    <i class="fas fa-pen fa-lg" aria-hidden="true"></i>
                    </button>

                    <!-- Modal -->
                    <div
                    class="modal fade "
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                    >
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Actualizar datos</h5>
                            <button
                            type="button"
                            class="btn-close"
                            data-mdb-dismiss="modal"
                            aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body bg-ligth">
                    
                    
                    <!-- Producto -->
                    <div class="col">
                        <div class="form-outline mb-3 text-dark">
                            <input type="text" id="productName"  class="form-control " name="productName" />
                            <label class="form-label " for="nameProduct">Producto</label>
                        </div>
                    </div>
                    <!-- cantidad -->
                    <div class="col">
                        <div class="form-outline mb-3 text-dark">
                            <input type="number" id="productQuantity " class="form-control " name="productQuantity" />
                            <label class="form-label " for="productQuantity">Cantidad</label>
                        </div>
                    </div>
                    <!-- Precio -->
                    <div class="col">
                        <div class="form-outline mb-3 text-dark">
                            <input type="number" id="productPrice " class="form-control " name="productPrice" />
                            <label class="form-label " for="produsctPrice">Precio</label>
                        </div>
                    </div>
                    <!-- Fecha -->
                    <div class="col">
                        <div class="form-outline mb-3 text-dark"">
                            <input type="date" id="productDate" class="form-control text-end" name="productDate" />
                            <label class="form-label " for="productDate">Fecha</label>
                        </div>
                    </div>
    
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">
                            Close
                            </button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <button type="button" id="btnDelete${i}" name="btn-delete" class="btn btn-danger btn-sm"><i class="fas fa-times fa-lg"" aria-hidden="true"></i></button>
                </td>
            </tr>`)

        document.getElementById('tableBody').innerHTML = listaProductos.join(' ')
    }


    update = (i) => { 
        let data = this.read();
   
        let fruta = 'piña'
        for (let i = 0; i < data.length; i++) {
            data[i].nameProduct = fruta
           }
           console.log(data)
    }

    delete = (productIndex) => {
        productIndex = Number(productIndex.replace('btnDelete', ''))
        let listaProductos = this.read();
        listaProductos.splice(productIndex, 1)
        localStorage.setItem('listaProductos', JSON.stringify(listaProductos))
        this.refreshData()
    }
}

let obj = new ListaDeProductos();

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

