let quotations = [
    "When a man dwells on the pleasure of sense, the attraction for them arises in him, From attraction arises desire, the lust of possession, and this leads to passion, to anger.",
    "There is nothing lost or wasted in this life.",
    "Self-control is the Mantra of Success",
    "If you want to be Great, Think Great and Positive.",
    "Perform your obligatory duty, because action is indeed better than inaction.",
    "You are what you believe in, You become that which you believe you can become",
    "Live a well-balanced life, it will bring peace.",
    "Lust, Anger, and Greed are the three doors to hell.",
    "Love, tolerance, and selflessness should be practiced.",
    "This one’s for all those times you made an excuse for not accomplishing your goals.",
    "Detachment from material things is the way to inner peace.",
    "You are only entitled to the action, never to its fruits.",
    "One who sees inaction in action, and action in inaction, is intelligent among men.",
    "A gift is pure when it is given from the heart to the right person at the right time and at the right place, and when we expect nothing in return.",
    "Good work never wasted, always rewarded by the God.",
    "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.",
    "Always speak if you are right and don’t blame others.",
    "Pleasures conceived in the world of the senses have a beginning and an end and give birth to misery.",
    "If you don’t fight for what you want, Don’t cry for what you lost.",
    "World’s well-being starts with self-sacrifice.",
    "Through selfless service, you will always be fruitful and find the fulfillment of your desires.",
    "We are kept from our goal not by obstacles but by a clear path to a lesser goal.",
    "You have the right to work, but never to the fruit of work.",
    "The soul is neither born, and nor does it die",
    "Change is the law of the universe. You can be a millionaire or a pauper in an instant.",
    "The brightness of the sun, which lights up the world, the brightness of the moon and of fire – these are my glory.",
    "It is better to live your own destiny imperfectly than to live an imitation of somebody else’s life with perfection.",
    "You have the right to work, but never to the fruit of the work. You should never engage in action for the sake of reward, nor should you long for inaction.",
    "Lust, anger, and greed are the three gates to self-destructive hell.",
    "There is neither this world nor the world beyond. nor happiness for the one who doubts.",
    "From passion comes the confusion of mind, then the loss of remembrance, the forgetting of duty, From this loss comes the ruin of reason, and the ruin of reason leads man to destruction.",
    "You came empty-handed, and you will leave empty-handed.",
    "Be calm, Do love and practiced selflessness.",
    "Man is made by his belief. As he believes, so he is.",
    "Pleasures conceived in the world of the senses have a beginning and an end and give birth to misery.",
    "The spirit is beyond destruction. No one can bring an end to spirit which is everlasting.",
    "Whatever happened, happened for the good, Whatever is happening, is happening for the good. Whatever will happen, will also happen for the good.",
    "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.",
    "A person can rise through the efforts of his own mind; or draw himself down, in the same manner. Because each person is his own friend or enemy.",
    "Seek refuge in the attitude of detachment and you will amass the wealth of spiritual awareness. The one who is motivated only by the desire for the fruits of their action, and anxious about the results, is miserable indeed.",
    "As a person puts on new garments, giving up old ones, similarly, the soul accepts new material bodies, giving up the old and useless ones.",
    "Better than mechanical practice is knowledge. Better than knowledge is meditation.",
    "Now I am become Death, the destroyer of worlds.",
    "Calmness, gentleness, silence, self-restraint, and purity: these are the disciplines of the mind.",
    "Whatever action is performed by a great man, common men follow in his footsteps, and whatever standards he sets by exemplary acts, all the world pursues.",
    "There are two ways of passing from this world – one in light and one in darkness. When one passes in light, he does not come back but when one passes in darkness, he returns.",
    "He who has let go of hatred who treats all beings with kindness and compassion, who is always serene, unmoved by pain or pleasure, free of the “I” and “mine,” self-controlled, firm and patient, his whole mind focused on me – that is the man I love best.",
    "To those who have conquered themselves the will is a friend. But it is the enemy of those who have not found the Self within them.",
    "As you put on fresh new clothes and take off those you’ve worn, You’ll replace your body with a fresh one, newly born.",
    "Through selfless service, you will always be fruitful and find the fulfillment of your desires.",
    "Those who are motivated only by desire for the fruits of action are miserable, for they are constantly anxious about the results of what they do.",
    "A Truth can never be destroyed. One should not be afraid of doing good.",
    "Whatever happened was good, whatever is happening is good and what all will happen in the future will be good.",
    "Work is of utmost importance and one must work with dedication without always worrying about results.",
    "Desires come and go, but you should remain a dispassionate witness, simply watching and enjoying the show. Desires should not bother a person.",
    "Things may not be the same, the way they used to be. Things and circumstances change. We should neither expect people, nor surroundings, not even society to be the same. They all change with time."
];

let hex = ["0", "1", "2", "3", "4", "5","6","7","8","9","A","B","C","D","E","F"];
let image=document.getElementsByTagName("img")[0];
let quote=document.getElementById("demo");
function change()
{
    
    let a=Math.floor(Math.random()*16);
    let imgName="img/gita"+a+".jpg";
    image.setAttribute("src",imgName);
    let b=Math.floor(Math.random()*quotations.length);
    quote.innerHTML=quotations[b];
    
    let x="#";
    let y="#";
    let z="#";
    for(let i=0;i<6;i++)
    {
        x+=hex[Math.floor(Math.random()*hex.length)];
        y+=hex[Math.floor(Math.random()*hex.length)];
        z+=hex[Math.floor(Math.random()*hex.length)];
    }
    let arr = [90,270];
    let deg = arr[Math.floor(Math.random()*arr.length)];
    document.body.style.backgroundImage= `linear-gradient(${deg}deg,${x}, ${y}, ${z})`;
    
    divToImg();
}

var x = document.getElementById("myAudio1"); 

let playpause1 = document.getElementById("playpause1");

let musicstatus = 'not playing';

function playAudio1() { 

  if(playpause1.classList.contains("fa-play")) {
    x.play();
    playpause1.classList.remove("fa-play");
    playpause1.classList.add("fa-pause");

    y.pause();
    playpause2.classList.remove("fa-pause");
    playpause2.classList.add("fa-play");

    musicstatus = 'music1';
  }
  else{
    x.pause();
    playpause1.classList.remove("fa-pause");
    playpause1.classList.add("fa-play");
  }
  
} 

var y = document.getElementById("myAudio2"); 

let playpause2 = document.getElementById("playpause2");

function playAudio2() { 

  if(playpause2.classList.contains("fa-play")) {
    y.play();
    playpause2.classList.remove("fa-play");
    playpause2.classList.add("fa-pause");

    x.pause();
    playpause1.classList.remove("fa-pause");
    playpause1.classList.add("fa-play");

    musicstatus = 'music2';
  }
  else{
    y.pause();
    playpause2.classList.remove("fa-pause");
    playpause2.classList.add("fa-play");
  }
  
} 

// Copys the Quote to clipboard on the click

let copyText = document.getElementsByClassName('quote')[0];

copyText.addEventListener('click', () => {
    
            let text = copyText.innerText;
            navigator.clipboard.writeText
                (text);

});


// div to image

function divToImg(){
        $("#download").click();
      }

      $(document).ready(function(){
        var element = $(".demo");

        $("#download").on('click', function(){

          html2canvas(element, {
            onrendered: function(canvas) {
              var imageData = canvas.toDataURL("image/jpg");
              var newData = imageData.replace(/^data:image\/jpg/, "data:application/octet-stream");
              $("#download").attr("download", "image.jpg").attr("href", newData);
            }
          });

        });
      })


// play/pause the music on spacebar and esc key. Change function is called on any arrow keyDown, Shortcut keys and more

let arrowkeys = [ "Down", "Up", "Left", "Right", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "Space Bar"];

let spacebar = ["Space Bar","Spacebar"," "];

let escapeKey = ["Esc", "Escape"];

let surprise = "";

    
document.addEventListener('keydown', (e) => {

    if (arrowkeys.includes(e.key)) {
        change();
    }
    else if (spacebar.includes(e.key)) {

        if(playpause1.classList.contains('fa-play'))
          playAudio1();
        else
          playAudio2();
    }
    else if(escapeKey.includes(e.key)){
     
      if(musicstatus == 'music1')
        playAudio1();
      else
        playAudio2();

    }
    else if(e.key == "b" || e.key == "B"){
      surprise+=e.key;
    }
    else if((surprise=="b" || surprise=="B") && (e.key == "g" || e.key == "G")){
        document.body.innerHTML = "";
        console.log('You unlocked a Surprise Gift');
        document.body.innerHTML = `<div style="display: grid;align-items: center;text-align: center;height: 100vh;background-color: yellow"><h1 style="font-size: 50px;color: orangered"; class="glow">Surprise unlocked, wait for a moment</h1></div>`;
        setTimeout(()=> {window.location.replace("img/lifelessons.png")},5000);
        surprise = "";
    }
    else if((e.key == "m" || e.key == "M") || ((surprise=="m" || surprise == "M") && (e.key == "e" || e.key=="E")) || ((surprise=="me"  || surprise == "ME") && (e.key == "n" || e.key=="N"))){
      surprise+=e.key;
    }
    else if((surprise=="men" || surprise == "MEN") && (e.key == "u" || e.key == "U")){
      Swal.fire(`
      Spacebar Key - Play the Music \n 
      Esc Key - Pause the Music \n 
      MENU/menu - Displays All Shortcut Keys \n
      Arrow Keys - Change Quotation \n
      bg/BG - Surprise ... \n
      Enter Key - Disappear menu
      `);
      surprise = "";
    }
    else{
      surprise = "";
    }
    
});


// divToImg function is called when the window is resized

window.addEventListener('resize', () => {
  divToImg();
});



