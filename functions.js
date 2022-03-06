// Variabler for alle input-feltene
// Funksjon for å sette inn input.values i to arrays, en for å ha både kwt, pris og måned
// en for å ha summen av pris
// en for å ha summen av kwt forbruk


// input felt
var registrerStrom = document.getElementById("registrerStrom");
var kwt = document.getElementById("kwt");
var pris = document.getElementById("pris");
var maned = document.getElementById("maned");


// HTML Elementer for innerHTML
var forbruksliste = document.getElementById("forbruksliste");
var kostnadsliste = document.getElementById("kostnadsliste");
var gjennomsnitt = document.getElementById("gjennomsnitt");

// Arrays
var mainArr = [];
var sumPrisArr = [];
var sumKwtArr = [];

function main(event) {
    event.preventDefault();

    mainArr.push({Kwt: kwt.value, Pris: pris.value, Maned: maned.value});

    console.log(mainArr);

    // Kalle opp funksjoner
    visForbruk();
    visKostnad();
    visGjennomsnitt();

    // Nullstille inputs
    /*kwt = 0;
    pris = 0;
    maned = "";
    */
}

function visForbruk() {
    forbruksliste.innerHTML = "";
    for (var element of mainArr) {
        forbruksliste.innerHTML += "<ul>" + "KWT: " + element.Kwt + " " + "Pris: " + element.Pris + + " " + " Maned: " + element.Maned + "</li>";
    };

}

function visKostnad() {
    kostnadsliste.innerHTML = "";
    for (var element of mainArr) {
        kostnadsliste.innerHTML += "<ul>" + element.Kwt * element.Pris + " " + "Maned: " + element.Maned + "</li>";
    };
}

function visGjennomsnitt() {
    gjennomsnitt.innerHTML = "<h5>" + snitt(mainArr) + "</h5>";
}

function sum(arr) { 
    let sum = 0; // initialize sum 
    
    // Iterate through all elements 
    // and add them to sum 
    for (let i = 0; i < arr.length; i++) 
        sum += arr[i].Kwt * arr[i].Pris; 

    return sum; 
} 

function snitt(arr) {
    let k = 0;
    let s = arr.length;
    for (let i = 0; i < s; i++) 
        k += arr[i].Kwt * arr[i].Pris; 

    return k/s; 
}

document.addEventListener("submit", main);