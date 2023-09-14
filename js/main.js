let btnAdd = document.getElementById('btn-add');
let listView = document.querySelector('.contact-list');
let form = document.getElementById('form');

let btnCancelForm = document.getElementById('btn-cancel')

//données (datas)

let contacts = [];

btnAdd.addEventListener('click', (e) => {
    btnAdd.classList.toggle('d-none');
    form.classList.toggle('d-none');
});

btnCancelForm.addEventListener('click', (e)=>{
    
    btnAdd.classList.toggle('d-none');
    form.classList.toggle('d-none');

    
})


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let data = new FormData(e.target);

    let timestamp = Data.parse(data.get('birthday'));
    let dateBirth = new Date(timestamp);

    let contact ={
        'name': data.get('name'),
        'prenom': data.get('prenom'),
        'pays': data.get('pays'),
        'genre': data.get('gender'),
        'email': data.get('email'),
        'telephone': data.get('telephone'),
        'birthday': data.get('birthday'),
        'age': (new Date().getFullYear()) - (dateBirth.getFullYear())
    }

    contacts.push(contact);
    renderListView()


   
})
 //affichage de la liste
function renderListView(){
    listView.innerHTML= ''

 /*   for (const contacts of contacts){
        let temp = '<div class="contact-item d-flex ">
            <div class="profile">
                <img src="image/avatar.png"  alt="photo profile" width="80px" class="img-fluid rounded-circle">
            </div>

                        
            <div class="info flex-grow-1 ms-3">
                <h2 class="h4 contact-name">${contact.name + contact.prenom}</h2>
                <p class="m-0">${contact.pays}</p>
                <p class="m-0">${contact.telephone}</p>
                <p class="m-0">${contact.email}</p>
                <p class="m-0">${contact.gender}<span>${contact.age} ans</span></p>
            </div>

            <div class="actions">
                <button class="btn btn-secondary">
                    <i class="bi bi-pencil-square">Edit</i>
                </button>
                <button class="btn btn-danger">
                    <i class="bi bi-trash">Delete</i>
                </button>
            </div>
        </div>
        '




    }*/

}