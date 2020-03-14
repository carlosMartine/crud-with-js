// obtenemos el formulario completo
var form = document.getElementById('formulario');
// obtenemos la caja donde se mostrara los usuarios
var box = document.getElementById('listUsers');

// le agregamos un evento al formulario
form.addEventListener('submit',function(e){
    // obtenemos los valores de los inputs
    var name = document.getElementById('name').value;
    var work = document.getElementById('work').value;
    var salary = document.getElementById('salary').value;

    // mostramos lo que estamos enviando
    console.log(name, work, salary);
    // le pasamos los parametros a la funcion para mostrar los datos
    createUser(name, work, salary);
    // evitamos que la pagina recargue
    e.preventDefault();
    // reseteamos los campos
    form.reset();
});

// arreglo vacio para los usuarios
users = [];

// funcion para agregar los datos del usuario
function createUser(name, work, salary){
    // metemos los datos del usuario en un json
    var user = {
        name: name,
        work: work,
        salary: salary
    }

    // con el push insertamos los datos del usuario en el arreglo
    this.users.push(user);

    // mostramos si se ha introducido en el arreglo
    console.log(users);

    // mostramos al usuario en pantalla
    showUser();
}

// funcion para mostrar a los usuarios 
function showUser(){;
    box.innerHTML = '';

    var i;
    // recorremos el arreglo para mostrar los datos
    for(i in users){
        box.innerHTML += `
        <span>Name: ${users[i].name} <br> Work: ${users[i].work} 
        <br> Salary: $${users[i].salary} pesos </span> <br>
        <button onclick="editUser(${i})">Edit</button>
        <button onclick="deleteUser(${i})">Delete</button>
        <hr>
        `;
    }
}

// funcion para borrar un usuario
function deleteUser(i){
    // mensaje de confirmacion
    if(confirm('are you sure you want to delete it?')){
        this.users.splice(i,1);
    }
    // mostramos los usuarios de nuevo
    showUser();
}

var edit = document.getElementById('editUser');
// funcion para editar un usuario
function editUser(indice){
    edit.style.display = 'block';

    edit.innerHTML = '';

    var i;
    // recorremos el arreglo para mostrar los datos
    for(i in users){
        edit.innerHTML = `
        <input id="nameNew" value="${users[i].name}" />
        <input id="workNew" value="${users[i].work}" />
        <input id="salaryNew" value="${users[i].salary}" />
        <button onclick="updateUser(${i})">Update User</button>
        <button onclick="cancel()">Cancel</button>
        `;
    }
}

// funcion para actualizar los datos del usuario
function updateUser(i){
    // obtenemos los nuevos datos del usuario
    var nameNew = document.getElementById('nameNew').value;
    var workNew = document.getElementById('workNew').value;
    var salaryNew = document.getElementById('salaryNew').value;

    // remplazamos los datos con los nuevos datos
    users[i].name = nameNew;
    users[i].work = workNew;
    users[i].salary = salaryNew;

    showUser();
    cancel();
}

// funcion para cancelar 
function cancel(){
    edit.style.display = 'none';
}