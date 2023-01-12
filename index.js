const inputItem = document.getElementById("inputItem");
const btnSubmit = document.getElementById("btnSubmit");
const divAlert = document.getElementById("divAlert");
const divList = document.getElementById("container-list");

const successMsg = "<div id='alert' class='divAlert success'><span>" + "Item adicionado com sucesso!" + "</span></div>";
const errorMsg = "<div id='alert' class='divAlert error'><span>Por favor, preencha o campo para adicionar um item!</span></div>";


btnSubmit.addEventListener('click', addItem)

function addItem(e) {
    e.preventDefault()
    validateForm();
}


function validateForm() {
    const item = inputItem.value;
    showMessage(item)
    if (item) {
        const itemList = document.createElement("div");
        clearInput();
        itemList.innerHTML = `
        <p>${item}</p><div><button class='clearBtn'><i class="fas fa-trash"></i></button></div>`
        divList.appendChild(itemList);
    }
};

const showMessage = (hasItem) => {
    if (hasItem) {
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
};

function clearInput() {
    inputItem.value = "";
}

function deleteItem() {

}
