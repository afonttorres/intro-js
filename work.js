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

let listaCompra = [];
function catchValue() {
    let value = prompt("Introduzca el primer producto de la lista de la compra")
    listaCompra.push(value);

    if (listaCompra.length > 0) {
        listaCompra.forEach(item => {
            console.log(item);
        })
    }
}

//setInterval(catchValue, 3000);

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
    if (container.children.length < 1) {
        printNewElement('h1', 'exercice1', 'firstWork',
            ['monospace', 'coral', 'center', "", "", "", "", "", ""],
            "Hi, I'm elfo");
    } else if (container.children.length <= 1) {
        printNewElement('h1', 'exercice1', 'firstWork',
            ['monospace', 'blue', 'center', "", "", "", "", "", ""],
            "Too many clicks");
        //container.innerHTML="";
    } else {
        container.innerHTML = "";
    }
}

//  3. Teniendo un cuadrado de color rojo en el documento de HTML:
//  Desarrollar una función que, al hacer click en el mismo, 
//  éste se transforme en una círculo de color verde

printNewElement('div', 'exercice2', 'secondWork',
    ['', '', '', '50%', '50%', 'red', '2px solid red', 'none', 'pointer']
    , '');
let square = document.getElementById('exercice2');
let clicked = false;

function changeDisplay(height, color, radius) {
    if (clicked === false) {
        clicked = true;
        console.log(clicked)
        changeStyle(square,
            ['', '', '', '50%', `${height}%`, `${color}`, `2px solid ${color}`, `${radius}%`, 'pointer']
        );

    } else {
        clicked = false;
        changeStyle(square,
            ['', '', '', '50%', '50%', 'red', '2px solid red', '0', 'pointer']
        );
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

titleInput.onfocus = () => {
    titleInput.value = '';
}

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
printNewElement('p', 'shoppingList', 'fourthWork',
    ['monospace', 'indianred', 'center', '', '', '', '', '', '', '', 'x-small'],
    `shopingList = [${shoppingList}]`);
printNewElement('div', 'separator', 'fourthWork',
    ['', '', 'center', '50%', '1%', 'indianred', '', '', '', '5%']
    , '');


for (let i = 0; i < shoppingList.length; i++) {
    let item = shoppingList[i];
    printNewElement('p', `${item}`, 'fourthWork',
        ['monospace', 'green', '', '', '', '', '', '', '', 'small', 'x-small']
        , `${item}`);
}

// 6 . Desarrollar una función que dibuje una 'Card' 
// de una película en el documento usando un objeto javascript como datos.
const cardContainer = document.getElementById('fifthWork')

class card {
    constructor(width, height, backgroundColor, imgUrl, backgroundPosition,
        backgroundRepeat, backgroundSize, display, flexDirection,
        justifyContent, position, border, alignItems, borderRadius, boxShadow, transition) {
        this.width = `${width}`;
        this.height = `${height}`;
        this.backgroundColor = `${backgroundColor}`;
        this.backgroundImage = `url(${imgUrl}) `;
        this.backgroundPosition = `${backgroundPosition}`;
        this.backgroundRepeat = `${backgroundRepeat}`;
        this.backgroundSize = `${backgroundSize}`;
        this.display = `${display}`;
        this.flexDirection = `${flexDirection}`;
        this.justifyContent = `${justifyContent}`,
            this.position = `${position}`,
            this.border = `${border}`,
            this.alignItems = `${alignItems}`,
            this.borderRadius = `${borderRadius}`,
            this.boxShadow = `${boxShadow}`,
            this.transition = `${transition}`
    }
}

class img {
    constructor(width, margin, position, transition, top, left, maxWidth) {
        this.width = `${width}`,
            this.margin = `${margin}`,
            this.position = `${position}`,
            this.transition = `${transition}`,
            this.top = `${top}`,
            this.left = `${left}`
        this.maxWidth = `${maxWidth}`
        // this.src = `${}`,
    }
}

function setStyle(element, arrStyle) {
    for (let i = 0; i < Object.keys(arrStyle).length; i++) {
        let key = Object.keys(arrStyle)[i];
        element.style[key] = arrStyle[key];
    }
}


function printCard(cardStyles, imgStyles) {
    let mainCard = document.createElement('div');
    mainCard.id = 'mainCard';
    let cardImg = document.createElement('img');
    cardImg.id = 'cardImg';

    let cardStyle = new card(...cardStyles);
    let imgStyle = new img(...imgStyles);

    setStyle(mainCard, cardStyle);
    setStyle(cardImg, imgStyle);
    cardImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRjtDwhQOjkSoWUX47Ppn_0NnZ0xiaG7qLNabGcxk8kRerjj0v'

    let cardInfo = document.createElement('div');
    cardInfo.id = 'cardInfo';

    // Protagonizada por:Abbi Jacobson,Eric André,Nat Faxon
    // Creada por:Matt Groening

    let infos = [`(Des)encanto`, `2018`, ' Animación para adultos', '4 temporadas',
        `El deber llama a Bean, pero ella solo piensa en beber. La rebelde princesa enfurece al rey y siembra el caos con sus amigos, un demonio y un elfo.`]

    infos.forEach(element => {
        let info = document.createElement('p');
        info.innerText = element;
        info.style.paddingBottom = '3%';
        if(element == infos[0]){info.style.fontWeight = 'bolder'};
        cardInfo.appendChild(info);
        
    })
    cardInfo.classList.add('cardInfo');
    mainCard.append(cardInfo);
    mainCard.appendChild(cardImg);
    cardContainer.appendChild(mainCard);
}

//Parametres d'estil per la imatge i la card de default
let cardPams = ['95%', '95%', 'transparent', '',
    'top', 'no-repeat', 'contain', 'flex', 'row',
    'center', 'relative', '1px solid white',
    'center', ".25rem", "none", 'border 1s, box-shadow 1s'];

let imgPams = ['85%', '0 auto', 'relative', 'all 1s', '', '', '7.5vw']

printCard(cardPams, imgPams);

//mirar quins canvien de lun a laltre hi passar´ho com argument
function changeOnInteraction(imgWidth, cardBorder, cardShadow, infoColor) {
    imgPams = [`${imgWidth}`, '0 auto', 'relative', 'all 1s', '', '', '7.5vw'];
    cardPams = ['95%', '95%', 'transparent', '',
        'top', 'no-repeat', 'contain', 'flex', 'row',
        'center', 'relative', `${cardBorder}`,
        'center', ".25rem", `${cardShadow}`, 'border 1s, box-shadow 1s'];

    let cardImg = document.getElementById('cardImg');
    let mainCard = document.getElementById('mainCard');
    let cardInfo = document.getElementById('cardInfo');

    let imgStyle = new img(...imgPams);
    setStyle(cardImg, imgStyle);

    let cardStyle = new card(...cardPams);
    setStyle(mainCard, cardStyle);

    cardInfo.style.color = `${infoColor}`
}

cardContainer.addEventListener('mouseover', () => {
    changeOnInteraction('0', '1px solid indianred', '1px 1px orange', 'indianred');
})
cardContainer.addEventListener('mouseout', () => {
    changeOnInteraction('85%', '1px solid white', 'none', 'white')
})

