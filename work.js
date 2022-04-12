// Funciones a desarrollar 

let change = 1.16;

//Euros a dòlars
function convertEurToUsd(eur) {
    let result = eur * change
    return result
}
let convertionResult = convertEurToUsd(10)
if (convertionResult == 11.60) { console.log('Ex 1: Good job') } else { console.log('Something went wrong') }

//Euros a dòlars
const listInEur = [1, 25, 100, 35, 95, 85];
function convertListEurToUsd(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        result.push([array[i] * change]);
    }
    return result;
}
let listConvertionResult = convertListEurToUsd(listInEur);
let listInUsd = [1.16, 29, 116, 40.6, 110.2, 98.6];
//console.log(listConvertionResult);
if (listConvertionResult !== []) { console.log('Ex 2: Good job') } else { console.log('Something went wrong') };

///////////////// EJERCICIOS JS-DOM ////////////////////
// 1. Desarrollar una función que escriba en la consola del navegador cada item de una 
//    lista de la compra.

const listCompra = ['iogurt', 'maduixes', 'nous', 'xocolata', 'alvocat', 'remoltxa'];

function printList(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

let printReslult = printList(listCompra);
if (printReslult !== '') { console.log('Ex 3: Good job') } else { console.log('Something went wrong') }

// 2. Desarrollar una función que escriba un Título h1 en el documento HTML.

///////////////////////////////////////////IMPORTANT///////////////////////////////////////////
//Classe per crear estils dinàmicament
class style {
    constructor(fontFamily, color, textAlign, width, height, backgroundColor, border, borderRadius, cursor, margin, fontSize) {
        this.fontFamily = `${fontFamily}`;
        this.color = `${color}`;
        this.textAlign = `${textAlign}`;
        this.width = `${width}`;
        this.height = `${height}`;
        this.backgroundColor = `${backgroundColor}`;
        this.border = `${border}`;
        this.borderRadius = `${borderRadius}`
        this.cursor = `${cursor}`;
        this.margin = `${margin}`;
        this.fontSize = `${fontSize}`;
    }
}

//Funció que a partir de l'element que li diem que volem,
//on posar-lo, els estils que volem que tingui i el text ens ho fa apareixer a l'html.
function changeStyle(element, styles) {

    let elStyle = new style(...styles);

    for (let i = 0; i < Object.keys(elStyle).length; i++) {
        let key = Object.keys(elStyle)[i];
        // console.log(key);
        element.style[key] = elStyle[key];
    }
}


function printNewElement(elementType, name, whereToAppend, styles, text) {
    let container = document.getElementById(whereToAppend);
    let element = document.createElement(elementType);
    element.innerText = text;
    element.id = name;

    let elStyles = styles
    container.appendChild(element);

    changeStyle(element, elStyles);

}
///////////////////////////////////////////FINS AQUÍ///////////////////////////////////////////

let firstWork = document.getElementById('firstWork');
firstWork.style.cursor = 'pointer';
firstWork.onclick = () => {
    const container = document.getElementById('firstWork');
    if(container.children.length <1){
        printNewElement('h1', 'exercice1', 'firstWork', ['monospace', 'coral', 'center', "", "", "", "", "", ""], "Hi, I'm elfo");
    }else if(container.children.length <= 1){
        printNewElement('h1', 'exercice1', 'firstWork', ['monospace', 'blue', 'center', "", "", "", "", "", ""], "Too many clicks");
        //container.innerHTML="";
    }else {
        container.innerHTML="";
    }  
}

//  3. Teniendo un cuadrado de color rojo en el documento de HTML:
//  Desarrollar una función que, al hacer click en el mismo, 
//  éste se transforme en una círculo de color verde

printNewElement('div', 'exercice2', 'secondWork', ['', '', '', '50%', '50%', 'red', '2px solid red', 'none', 'pointer'], '');
let square = document.getElementById('exercice2');
let clicked = false;

function changeDisplay(height, color, radius) {
    if (clicked === false) {
        clicked = true;
        console.log(clicked)
        changeStyle(square, ['', '', '', '50%', `${height}%`, `${color}`, `2px solid ${color}`, `${radius}%`, 'pointer']);

    } else {
        clicked = false;
        changeStyle(square, ['', '', '', '50%', '50%', 'red', '2px solid red', '0', 'pointer']);
    }
}

square.onclick = () => {
    changeDisplay('75', 'green', '50');
}

//  4. Teniendo un input de texto y un botón:
//  Desarrollar una función que al hacer click en él, 
//  escriba el contenido (value) del input como un título en el documento.

const titleInput = document.getElementById('titleInput');
titleInput.defaultValue = 'Write something here!'
const titleButton = document.getElementById('titleButton');
const title = document.getElementsByClassName('main_title')[0];

titleButton.onclick = () => {
    let inputValue = titleInput.value;
    console.log(inputValue)
    if ((inputValue !== undefined) && (inputValue !== '') &&
        (inputValue !== titleInput.defaultValue) &&
        (inputValue !== 'SORRY, TRY AGAIN')) {
        changeStyle(titleInput, ['', 'orange'])
        title.innerText = inputValue;
        titleInput.value = '';
    } else {
        changeStyle(titleInput, ['', 'blue']);
        titleInput.value = 'SORRY, TRY AGAIN';

        setTimeout(() => {
            titleInput.value = '';
        }, 1000);
        changeStyle(titleInput, ['', 'orange'])
    }
}

//  5. Desarrollar una función que escriba en el documento 
//  HTML cada item de una lista de la compra.

let shoppingList = ['iogurt', 'maduixes', 'nous', 'xocolata', 'alvocat', 'remoltxa'];
printNewElement('p','shoppingList', 'fourthWork', ['monospace', 'indianred', 'center', '', '', '', '', '', '', '', 'x-small'], `shopingList = [${shoppingList}]`);
printNewElement('div','separator', 'fourthWork', ['', '', 'center', '50%', '1%', 'indianred', '', '', '', '5%'],'');


for (let i = 0; i < shoppingList.length; i++) {
    let item = shoppingList[i];
    printNewElement('p', `${item}`, 'fourthWork', ['monospace', 'green', '', '', '', '', '', '', '', 'small','x-small'], `${item}`);
}