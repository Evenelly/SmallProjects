//eevee name
/*fetch("https://pokeapi.co/api/v2/pokemon/eevee")
.then(function(res){ return res.json()})
.then(function(res){ console.log(res.forms[0].name) }) */

//cats
// const cardsDiv = document.getElementById("cards")
// fetch("https://cataas.com/cat/says/When%20life%20gives%20you%20lemon%2C%20make%20lemonade?font=Impact&fontSize=30&fontColor=%23000&fontBackground=none&position=center")
// .then(function(res){ return res.blob()})
// .then(function(blob){
//     const img = document.createElement("img")
//     const url = URL.createObjectURL(blob); 
//     img.src = url
//     cardsDiv.appendChild(img)
// })

//cards
/*const cardsDiv = document.getElementById("cards")
const amountOfCards = 10;
fetch("https://www.deckofcardsapi.com/api/deck/new/draw/?count=" + amountOfCards)
.then(function(res){ return res.json() })
.then(function(res){ 
    for (let i = 0; i < amountOfCards; i++) {
        const img = document.createElement("img")
        cardsDiv.appendChild(img)
        img.src = res.cards[i].image;
        console.log(res.remaining)
    }
})*/