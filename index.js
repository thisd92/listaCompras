const inputItem = document.getElementById("inputItem");
const btnSubmit = document.getElementById("btnSubmit");
const divAlert = document.getElementById("divAlert");
const divList = document.getElementById("container-list");
const btnClear = document.getElementById("btnClear");
const btnClearAll = document.getElementById("clearAll");
const cardList = document.getElementById("cardList")

const errorMsg = "<div id='alert' class='divAlert error'><span>Por favor, preencha o campo para adicionar um item!</span></div>";

btnSubmit.addEventListener('click', addItem);
btnClearAll.addEventListener('click', clearAll);

function addItem(e) {
    e.preventDefault()
    validateForm();
    
}


function validateForm() {
    const item = inputItem.value;
    showMessage(item)
    if (item) {
        const itemList = document.createElement("div");
        itemList.classList.add("item");
        clearInput();
        itemList.innerHTML = `
        <p>${item}</p><div><button id='btnClear' onclick='deleteItem()' class='clearBtn'><i class="fas fa-trash"></i></button></div>`
        divList.appendChild(itemList);
        btnClearAll.style.visibility = "visible";
        addLocalStorage(item);
    }
}

const showMessage = (hasItem) => {
    if (hasItem) {
        const successMsg = `<div id='alert' class='divAlert success'><span>${hasItem} adicionado com sucesso!</span></div>`;
        divAlert.innerHTML = successMsg;
        setTimeout(() => {
            divAlert.removeChild(divAlert.firstChild);
        }, 3000);
    } else {
        divAlert.innerHTML = errorMsg;
        setTimeout(() => {
            divAlert.removeChild(divAlert.firstChild);
        }, 3000);
        
    }
}

function clearInput() {
    inputItem.value = "";
}

function deleteItem() {
    console.log("funciona");
}

function clearAll(){
    const items = document.querySelectorAll(".item");
    
    if(items.length > 0){
        items.forEach((item) => {
            divList.removeChild(item);
        });
    }

    btnClearAll.style.visibility = "hidden";
    // localStorage.removeItem('list');
}

function addLocalStorage(item){
    console.log("added");
}