const inputItem = document.getElementById("inputItem");
const btnSubmit = document.getElementById("btnSubmit");
const div = document.getElementById("divAlert");
const list = document.getElementById("list");

let item = "";

btnSubmit.addEventListener('click', addItem)
btnSubmit.addEventListener('click', addItem)

function addItem(e) {
    e.preventDefault()
    validateForm();
}


function validateForm() {
    if (inputItem.value) {
        setSuccessMessage();
        item = inputItem.value;
        clearInput();
        list.innerHTML += 
                        "<div><p>" + item + "</p><button class='clearBtn'>Clear</button></div>"
        console.log(item);
    } else {
        setErrorMessage();
    }

};

function setSuccessMessage() {
    div.className = "success"
    div.innerHTML = "<span>" + "Item adicionado com sucesso!" + "</span>";
    div.style.display = "block";
    setTimeout(() => {
        div.style.display = "none";
    }, 3000);
}

function setErrorMessage() {
    div.style.display = "block";
    div.className = "error"
    div.innerHTML = "<span>" + "Por favor, preencha o campo para adicionar um item!" + "</span>";
    setTimeout(() => {
        div.style.display = "none";
    }, 3000);
}

function clearInput() {
    inputItem.value = "";
}

function deleteItem(){
    
}
