Math.floor();

let czas = new Date();
const kiedy = new Date(2023,5,23);
let Dni = new Array("Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota");
let Miesiace = new Array("Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień");

// document.getElementById("data").innerHTML = "Dziś jest: " + Dni[czas.getDay()] + " " + ladnaData(czas.getDate()) + "." + Miesiace[czas.getMonth()] + "." + czas.getFullYear();
 
// ladnaData((czas.getMonth()+1))
pokazCzas();

function pokazCzas(){
    let czas = new Date();
    let Data = "Dziś jest: " +  Dni[czas.getDay()] + " " + ladnaData(czas.getDate()) + "." + Miesiace[czas.getMonth()] + "." + czas.getFullYear();
    document.getElementById("data").innerHTML = Data;
    document.getElementById("Czas").innerHTML = ladnaData(czas.getHours()) + ":" + ladnaData(czas.getMinutes()) + ":" + ladnaData(czas.getSeconds());
    setTimeout("pokazCzas()",1000)
}

function ladnaData(x){
    if(x < 10) return "0" + x;
    else return x;
}
