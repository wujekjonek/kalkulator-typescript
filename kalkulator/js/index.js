// let buttonrownaSie = document.createElement('button');
// buttonrownaSie.textContent = "=";
// buttonrownaSie.value = "="
// buttonrownaSie.className = "button";
// buttonrownaSie.onclick = function (elem) {
//     wyswietlId(this);
// }
var okienko = document.createElement("input");
okienko.id = "mojeOkno";
okienko.size = 28;
var container = document.createElement("div");
for (var i = 1; i < 4; ++i) {
    var button = new Button("35px", "70px", "" + i, "button");
    button.setId("" + i);
    var btn = button.stworzPrzycisk(okienko);
    container.appendChild(btn);
}
document.body.appendChild(container);
var container2 = document.createElement("div");
for (var i = 4; i < 7; ++i) {
    var button = new Button("35px", "70px", "" + i, "button");
    button.setId("" + i);
    var btn = button.stworzPrzycisk(okienko);
    container2.appendChild(btn);
}
var container3 = document.createElement("div");
for (var i = 7; i < 10; ++i) {
    var button = new Button("35px", "70px", "" + i, "button");
    button.setId("" + i);
    var btn = button.stworzPrzycisk(okienko);
    container3.appendChild(btn);
}
var container4 = document.createElement("div");
for (var i = 0; i < 3; ++i) {
    var mojaTabela = ["+", "0", "-"];
    var button = new Button("35px", "70px", mojaTabela[i], "button");
    button.setId(mojaTabela[i]);
    var btn = button.stworzPrzycisk(okienko);
    container4.appendChild(btn);
}
var container5 = document.createElement("div");
for (var i = 0; i < 3; ++i) {
    var mojaTabela = ["*", ".", "/"];
    var button = new Button("35px", "70px", mojaTabela[i], "button");
    button.setId(mojaTabela[i]);
    var btn = button.stworzPrzycisk(okienko);
    container5.appendChild(btn);
}
var container6 = document.createElement("div");
for (var i = 0; i < 2; ++i) {
    var mojaTabela = ["sinus", "cosinus"];
    var button = new Button("35px", "108px", mojaTabela[i], "button");
    button.setId(mojaTabela[i]);
    var btn = button.stworzPrzycisk(okienko);
    container6.appendChild(btn);
}
var container7 = document.createElement("div");
for (var i = 0; i < 2; ++i) {
    var mojaTabela = ["tangens", "cotangens"];
    var button = new Button("35px", "108px", mojaTabela[i], "button");
    button.setId(mojaTabela[i]);
    var btn = button.stworzPrzycisk(okienko);
    container7.appendChild(btn);
}
var container8 = document.createElement("div");
for (var i = 0; i < 1; ++i) {
    var mojaTabela = ["="];
    var button = new Button("35px", "220px", mojaTabela[i], "button");
    button.setId(mojaTabela[i]);
    var btn = button.stworzPrzycisk(okienko);
    container8.appendChild(btn);
}
var container9 = document.createElement("div");
for (var i = 0; i < 1; ++i) {
    var mojaTabela = ["kasuj wyswietlacz"];
    var button = new Button("35px", "220px", mojaTabela[i], "button");
    button.setId(mojaTabela[i]);
    var btn = button.stworzPrzycisk(okienko);
    container9.appendChild(btn);
}
document.body.appendChild(okienko);
document.body.appendChild(container);
document.body.appendChild(container2);
document.body.appendChild(container3);
document.body.appendChild(container4);
document.body.appendChild(container5);
document.body.appendChild(container6);
document.body.appendChild(container7);
document.body.appendChild(container8);
document.body.appendChild(container9);
// document.body.appendChild(buttonrownaSie);
// *******************************************************************************
var kalkulator = (function () {
    // klawisze: Undefined,
    // wyswietlacz: Undefined,
    // KONSTRUKTOR
    function kalkulator(wynik) {
        this.wynik = wynik;
    }
    // METODY
    kalkulator.prototype.dodaj = function (x, y) {
        return x + y;
    };
    kalkulator.prototype.odejmij = function (x, y) {
        return x - y;
    };
    kalkulator.prototype.pomnoz = function (x, y) {
        return x * y;
    };
    kalkulator.prototype.podziel = function (x, y) {
        return x / y;
    };
    return kalkulator;
}());
// *******************************************************************************
var kalkulator1 = new kalkulator(2);
var dzialanie = "";
var pierwszaZmienna = 0;
var drugaZmienna = 0;
function wartoscButtona(zmienna) {
    //   console.log("wartoscButtona :-)  " + zmienna + "  koniec")
    if (zmienna == "sinus") {
        console.log(Math.sin((okienko.value) * (Math.PI / 180)));
        okienko.value = (Math.sin((okienko.value) * (Math.PI / 180)));
    }
    else if (zmienna == "cosinus") {
        console.log(Math.cos((okienko.value) * (Math.PI / 180)));
        okienko.value = (Math.cos((okienko.value) * (Math.PI / 180)));
    }
    else if (zmienna == "tangens") {
        console.log(Math.tan((okienko.value) * (Math.PI / 180)));
        okienko.value = (Math.tan((okienko.value) * (Math.PI / 180)));
    }
    else if (zmienna == "cotangens") {
        console.log(1 / (Math.tan((okienko.value) * (Math.PI / 180))));
        okienko.value = (1 / (Math.tan((okienko.value) * (Math.PI / 180))));
    }
    else if (zmienna == "+") {
        pierwszaZmienna = parseFloat(okienko.value);
        dzialanie = "dodaj";
        okienko.value = "";
        console.log("pierwsza zmiennna: " + pierwszaZmienna);
        okienko.value = "";
    }
    else if (zmienna == "-") {
        pierwszaZmienna = parseFloat(okienko.value);
        dzialanie = "odejmij";
        okienko.value = "";
        console.log("pierwsza zmiennna: " + pierwszaZmienna);
    }
    else if (zmienna == "*") {
        pierwszaZmienna = parseFloat(okienko.value);
        dzialanie = "pomnoz";
        okienko.value = "";
        console.log("pierwsza zmiennna: " + pierwszaZmienna);
    }
    else if (zmienna == "/") {
        pierwszaZmienna = parseFloat(okienko.value);
        dzialanie = "podziel";
        okienko.value = "";
        console.log("pierwsza zmiennna: " + pierwszaZmienna);
    }
    else if (zmienna == "kasuj wyswietlacz") {
        //    console.log("ksuj");
        okienko.value = "";
    }
    else if (zmienna == "=") {
        drugaZmienna = parseFloat(okienko.value);
        // drugaZmienna = parseInt(okienko.value);
        // drugaZmienna = okienko.value;
        okienko.value = "";
        console.log("druga zmiennna: " + drugaZmienna);
        switch (dzialanie) {
            case "dodaj":
                // wynik = parseInt(pierwszaLiczba) + parseInt(drugaLiczba)  ;
                kalkulator1.dodaj(pierwszaZmienna, drugaZmienna);
                console.log("wynik dodawania = " + kalkulator1.dodaj(pierwszaZmienna, drugaZmienna));
                okienko.value = kalkulator1.dodaj(pierwszaZmienna, drugaZmienna);
                break;
            case "odejmij":
                kalkulator1.odejmij(pierwszaZmienna, drugaZmienna);
                console.log("wynik odejmowania = " + kalkulator1.odejmij(pierwszaZmienna, drugaZmienna));
                okienko.value = kalkulator1.odejmij(pierwszaZmienna, drugaZmienna);
                break;
            case "pomnoz":
                //  wynik = parseInt(pierwszaLiczba) * parseInt(drugaLiczba);
                kalkulator1.pomnoz(pierwszaZmienna, drugaZmienna);
                console.log("wynik mnozenia = " + kalkulator1.pomnoz(pierwszaZmienna, drugaZmienna));
                okienko.value = kalkulator1.pomnoz(pierwszaZmienna, drugaZmienna);
                break;
            case "podziel":
                //     wynik = parseInt(pierwszaLiczba) / parseInt(drugaLiczba);
                kalkulator1.podziel(pierwszaZmienna, drugaZmienna);
                console.log("wynik dzielenia = " + kalkulator1.podziel(pierwszaZmienna, drugaZmienna));
                okienko.value = kalkulator1.podziel(pierwszaZmienna, drugaZmienna);
                break;
        }
    }
    else {
        //   console.log("else @@@ ")
        //        input.value += button.id + "";
        okienko.value = okienko.value + zmienna;
    }
}
// function wyswietlIdXX(elem) {
//
//     if (elem.value == "+") {
//         console.log("wcisnoles plusa!!! ++++++++++++++++++++++");
//         pierwszaZmienna = parseInt(okienko.value);
//         console.log("pierwsza zmiennna: " + pierwszaZmienna)
//         dzialanie = "+";
//         console.log("dzialanie: " + dzialanie)
//         okienko.value = "";
//     }
//
//     else if (elem.value == "-") {
//         console.log("wcisnoles minusa!!!  -------------------");
//     }
//
//     else if (elem.value == "=") {
//         console.log("wcisnoles rownasie!!!  ====================");
//         drugaZmienna = parseInt(okienko.value);
//         console.log("wynik: " + kalkulator1.dodaj(pierwszaZmienna, drugaZmienna))
//         okienko.value = kalkulator1.dodaj(pierwszaZmienna, drugaZmienna);
//     }
//
//
//     else {
//         // to tworzy liczbę z cyfr
//         console.log("cos innego niz plus ");
//         okienko.value = okienko.value + elem.value;
//     }
//
// }
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
