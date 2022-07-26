const zodiacSign = sessionStorage.getItem("zodiacSign");
const zodiacDate = sessionStorage.getItem("zodiacDate");

if (!zodiacSign) {
  location.href = "./index.html";
}
document.title = `Your Zodiac - ${zodiacSign}`;

const imageElement = document.querySelector("img");
imageElement.src = `./icons/${zodiacSign}.svg`;
imageElement.alt = zodiacSign;
document.getElementById("zodiac-sign").innerHTML = zodiacSign;
document.getElementById("zodiac-date").innerHTML = zodiacDate;


let back = ["","b","ba","bac","B","BA","BAC"];

let homepage = ["","h","ho","hom","H","HO","HOM"];
let str = "";
document.addEventListener("keydown", (e) => {
    
    if(back.includes(str) && e.key =="K" || e.key == "k") {
      str += e.key;
      setTimeout(()=> {
        str = "";
        window.location.replace("./index.html")
      },1000);
    }
    else if(homepage.includes(str) && e.key =="E" || e.key == "e") {
      str += e.key;
      setTimeout(()=> {
        str = "";
        window.location.replace("./../index.html")
      },1000);
    }

});