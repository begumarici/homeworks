let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
   
];

let username = prompt("Lütfen adınızı giriniz: ")
let Name = document.querySelector("#myName")
Name.innerHTML=`${username}`; 

function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = days [today.getDay()];

    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('myClock').innerHTML= h + ":" + m + ":" + s + "   " + d;
    setTimeout(showTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i};
    return i;
}

showTime()