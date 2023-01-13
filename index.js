// IDENTIFIED ELEMENTS

const inputItem = document.getElementById("inputItem");
const btnSubmit = document.getElementById("btnSubmit");
const divAlert = document.getElementById("divAlert");
const divList = document.getElementById("container-list");
const btnClear = document.getElementById("btnClear");
const btnClearAll = document.getElementById("clearAll");
const cardList = document.getElementById("cardList")

// CREATED ERROR MSG
const errorMsg = "<div id='alert' class='divAlert error'><span>Por favor, preencha o campo para adicionar um item!</span></div>";

// EVENTLISTNERS
btnSubmit.addEventListener('click', addItem);
btnClearAll.addEventListener('click', clearAll);

function addItem(e) {
    e.preventDefault()
    validateForm();
}

// VALIDATE IF THE INPUT VALUE ISN'T ""/FALSE
function validateForm() {
    const item = inputItem.value;
    const id = new Date().getTime().toString();
    showMessage(item)
    if (item) {
        createItem(id, item);
        btnClearAll.style.visibility = "visible";
        addLocalStorage(id, item);
        clearInput();
    }
}

// FUNCTION TO CREATE A ITEM WHEN ADDED
function createItem(id, item) {
    const itemList = document.createElement("div");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    itemList.setAttributeNode(attr);
    itemList.classList.add("item");
    itemList.innerHTML = `
    <p>${item}</p><div><button class='clearBtn'><i class="fas fa-trash"></i></button></div>`
    const btnDelete = itemList.querySelector(".clearBtn");
    btnDelete.addEventListener('click', deleteItem);
    divList.appendChild(itemList);
}

// FUNCTION TO SHOW THE MESSAGE 3S
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

function deleteItem(e) {
    const el = e.currentTarget.parentElement.parentElement;
    const id = el.dataset.id;

    divList.removeChild(el);

    removeFromLocalStorage(id)
}

function clearAll() {
    const items = document.querySelectorAll(".item");

    if (items.length > 0) {
        items.forEach((item) => {
            divList.removeChild(item);
        });
    }

    btnClearAll.style.visibility = "hidden";
    localStorage.removeItem('list');
}

// FUNCTIONS TO ADD, GET, REMOVE AND SETUP ITEMS ON LOCALSTORAGE
function addLocalStorage(id, item) {
    const listItems = { id, item };
    let items = getLocalStorage();
    items.push(listItems);
    localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
}


function removeFromLocalStorage(id) {
    let items = getLocalStorage();

    items = items.filter(function (item) {
        if (item.id !== id) {
            return item;
        }
    });

    localStorage.setItem("list", JSON.stringify(items));
}

function setupItems() {
    let items = getLocalStorage();

    if (items.length > 0) {
        items.forEach((item) => {
            createItem(item.id, item.item);
        });
        btnClearAll.style.visibility = "visible";
    }
}

// TO SETUP ITEMS, IF EXISTS, ON LOCALSTORAGE WHEN THE WINDOWS LOAD
window.onload(setupItems());