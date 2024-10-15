/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function (h) {
  h.innerText = 'Titolone gigante'
}
const h1 = document.getElementsByTagName('h1')[0]
changeTitle(h1)

/* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */

const addClassToTitle = function (h) {
  h.classList.add('myHeading')
}
addClassToTitle(h1)

/* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */

const changePcontent = function (p) {
  for (let i = 0; i < p.length; i++) {
    p[i].innerText = 'paragrafo'
  }
}
const pInsideDivs = document.querySelectorAll('div p')
changePcontent(pInsideDivs)

/* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer)
         con il valore https://www.google.com
       */

const changeUrls = function (a) {
  a.setAttribute('href', 'https://www.google.com')
}
const noFooterA = document.getElementsByTagName('a')[0]
changeUrls(noFooterA)

/* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */

const addToTheSecond = function (ul) {
  const newLi = document.createElement('li')
  newLi.innerText = 'sono un li nuovo'
  secondList.appendChild(newLi)
}
const secondList = document.getElementById('secondList')
addToTheSecond(secondList)

/* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */

const addParagraph = function (div) {
  const newP = document.createElement('p')
  newP.innerText = 'sono un p nuovo'
  firstDiv.appendChild(newP)
}
const firstDiv = document.getElementsByTagName('div')[0]
addParagraph(firstDiv)

/* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */

const hideFirstUl = function (ul) {
  ul.style.display = 'none'
}
const firstList = document.getElementById('firstList')
hideFirstUl(firstList)

/* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */

const paintItGreen = function (list) {
  for (let i = 0; i < list.length; i++) {
    list[i].style['background-color'] = 'green'
  }
}
const everyList = document.getElementsByTagName('ul')
paintItGreen(everyList)

/* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */

const makeItClickable = function () {
  h1.innerText = h1.innerText.slice(0, -1)
}

h1.addEventListener('click', makeItClickable)

/* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come 
        contenuto di un alert()
       */

const revealFooterLink = function () {
  alert(FooterA.href)
}

const FooterA = document.getElementsByTagName('a')[1]
const footer = document.getElementsByTagName('footer')[0]
footer.addEventListener('click', revealFooterLink)

/* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */

const objects = [
  {
    img: 'https://placedog.net/100',
    name: 'something',
    quantity: 2,
    price: 45,
  },
  {
    img: 'https://placedog.net/101',
    name: 'other',
    quantity: 4,
    price: 50,
  },
  {
    img: 'https://placedog.net/102',
    name: 'nothing',
    quantity: 9,
    price: 100,
  },
  {
    img: 'https://placedog.net/104',
    name: 'idk',
    quantity: 1,
    price: 300,
  },
  {
    img: 'https://placedog.net/105',
    name: 'boh',
    quantity: 10,
    price: 1,
  },
]

const generateTable = function (div) {
  const newTable = document.createElement('table')
  const newTBody = document.createElement('tbody')
  for (let i = 0; i < 5; i++) {
    const newTr = document.createElement('tr')
    newTBody.appendChild(newTr)
    for (let j = 0; j < 4; j++) {
      const newTd = document.createElement('td')
      newTd.style.border = '1px, solid'
      if (j === 0) {
        newTd.innerHTML = `<img src="${objects[i].img}"/>`
      } else if (j === 1) {
        newTd.innerText = objects[i].name
      } else if (j === 2) {
        newTd.innerText = objects[i].quantity
      } else {
        newTd.innerText = objects[i].price
      }
      newTr.appendChild(newTd)
    }
  }
  newTable.appendChild(newTBody)
  div.appendChild(newTable)
  newTable.style.border = '1px, solid'
  newTable.style['border-collapse'] = 'collapse'
}

const tableArea = document.getElementById('tableArea')
generateTable(tableArea)

/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e 
        fornisca i dati necessari come parametri
     */

const object = {
  img: 'https://placedog.net/106',
  name: 'asdf',
  quantity: 8,
  price: 80,
}
const addRow = function (table, object) {
  const newTr = document.createElement('tr')
  for (let j = 0; j < 4; j++) {
    const newTd = document.createElement('td')
    newTd.style.border = '1px, solid'
    if (j === 0) {
      newTd.innerHTML = `<img src="${object.img}"/>`
    } else if (j === 1) {
      newTd.innerText = object.name
    } else if (j === 2) {
      newTd.innerText = object.quantity
    } else {
      newTd.innerText = object.price
    }
    newTr.appendChild(newTd)
  }
  table.appendChild(newTr)
}

const tableBody = document.getElementsByTagName('tbody')[0]
addRow(tableBody, object)

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */

const hideAllImages = function (img) {
  for (let i = 0; i < img.length; i++) img[i].style.display = 'none'
}
const imgs = document.getElementsByTagName('img')
//hideAllImages(imgs)

/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor"
        con un colore random ad ogni click ricevuto
     */

const generateRandomColor = function () {
  const color = Math.floor(Math.random() * 256)
  return color
}

const Coloredh2 = document.getElementById('changeMyColor')
const changeColorWithRandom = function (h2) {
  h2.style.color =
    'rgb(' +
    generateRandomColor() +
    ',' +
    generateRandomColor() +
    ',' +
    generateRandomColor() +
    ')'
}
changeColorWithRandom(Coloredh2)
