// Variables globales

const formularioUI = document.querySelector('#formulario');
const listaActividadesUI = document.getElementById('listaActividades');
let arrayActividades = [];


// Funciones

const CrearItem = (actividad) => {

  let item = {
    actividad: actividad,
    estado: false
  }

  arrayActividades.push(item);

  return item;

}



const GuardarDB = () => {

  localStorage.setItem('rutina', JSON.stringify(arrayActividades));

  PintarDB();

}

const PintarDB = () => {

  listaActividadesUI.innerHTML = '';

  arrayActividades = JSON.parse(localStorage.getItem('rutina'));
  
  if(arrayActividades === null){
    arrayActividades = [];
  }else{

    arrayActividades.forEach(element => {

      if(element.estado){
        listaActividadesUI.innerHTML += `<div class="alert alert-success" role="alert"><i class="material-icons float-left mr-2">accessibility</i><b>${element.actividad}</b> - ${element.estado}<span class="float-right"><i class="material-icons">done</i><i class="material-icons">delete</i></span></div>`
      }else{
        listaActividadesUI.innerHTML += `<div class="alert alert-danger" role="alert"><i class="material-icons float-left mr-2">accessibility</i><b>${element.actividad}</b> - ${element.estado}<span class="float-right"><i class="material-icons">done</i><i class="material-icons">delete</i></span></div>`
      }
    });

  }
}

const EliminarDB = (actividad) => {
  let indexArray;
  arrayActividades.forEach((elemento, index) => {
    
    if(elemento.actividad === actividad){
      indexArray = index;
    }
    
  });

  arrayActividades.splice(indexArray,1);
  GuardarDB();

}

const EditarDB = (actividad) => {

  let indexArray = arrayActividades.findIndex((elemento)=>elemento.actividad === actividad);

  arrayActividades[indexArray].estado = true;

  GuardarDB();

  return item;
}
let sdeuda = CrearItem('sdeuda');
let duedor = CrearItem('duedor');
console.log(sdeuda);
// EventListener

formularioUI.addEventListener('submit', (e) => {

    e.preventDefault();
    let actividadUI = document.querySelector('#actividad').value;
  
    CrearItem(actividadUI);
    GuardarDB();
  
    formularioUI.reset();
  
  });
  
  document.addEventListener('DOMContentLoaded', PintarDB);
  
  listaActividadesUI.addEventListener('click', (e) => {
  
    e.preventDefault();
  
    if(e.target.innerHTML === 'done' || e.target.innerHTML === 'delete'){
      let texto = e.path[2].childNodes[1].innerHTML;
      if(e.target.innerHTML === 'delete'){
        // Accción de eliminar
        EliminarDB(texto);
      }
      if(e.target.innerHTML === 'done'){
        // Accción de editar
        EditarDB(texto);
      }
    }
  
  });
//datos del operador financiera



const operador = {
    nombre: "roman",
    apellido:"riquelme",
    puesto: "auditoria",
      empleado: {
      activo: true,
      desafectado: false,
    },
};

const direccion = {
  calle: "salguero , 57",
  localidad :"tigre , buenos aires",
  pais :"argentina",
};

const persona = {
  ...operador,
  ...direccion,
};

console.log(persona);



// cuadro de calculos

var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["numeroDecliente"] = document.getElementById("numeroDecliente").value;
    formData["producto"] = document.getElementById("producto").value;
    formData["Cantidad"] = document.getElementById("Cantidad").value;
    formData["Valor"] = document.getElementById("Valor").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.numeroDecliente;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.producto;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.Cantidad;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.Valor;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("numeroDecliente").value = selectedRow.cells[0].innerHTML;
    document.getElementById("producto").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Cantidad").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Valor").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.numeroDecliente;
    selectedRow.cells[1].innerHTML = formData.producto;
    selectedRow.cells[2].innerHTML = formData.Cantidad;
    selectedRow.cells[3].innerHTML = formData.Valor;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("numeroDecliente").value = '';
    document.getElementById("producto").value = '';
    document.getElementById("Cantidad").value = '';
    document.getElementById("Valor").value = '';
    selectedRow = null;
}