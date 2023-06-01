const styleMenu = ["hair", "ears", "eyes", "mouth", "neck", "leg", "accessories", "backgrounds"];
const hairStyle = ["default", "bang", "curls", "elegant", "fancy", "quiff", "short"];
const earStyle = ["default", "tilt-backward", "tilt-forward"];
const eyeStyle = ["default", "angry", "naughty", "panda", "smart", "star"];
const mouthStyle = ["default", "astonished", "eating", "laugh", "tongue"];
const neckStyle = ["default", "bend-backward", "bend-forward", "thick"];
const legStyle = ["default", "bubble-tea", "cookie", "game-console", "tilt-backward", "tilt-forward"];
const accessStyle = ["earings", "flower", "glasses", "headphone"];
const bgStyle = ["blue50", "blue60", "blue70", "darkblue70",  "grey70", "yellow50", "green50", "grey80", "yellow60", "green60", "red50", "yellow70","darkblue30", "green70", "red60", "darkblue50", "grey40", "red70"];


// SELECTING MENU BUTTONS

var menus = document.querySelectorAll(".menu");
var menuLen = menus.length;
var currentMenu = document.querySelector(".active");

// CHANGING H3 TEXT OF STYLE BUTTONS DIV

var styleH3 = currentMenu.textContent + " Styles";
document.querySelector("#styleH3").textContent = styleH3;

var viewStyle = document.querySelector("." + currentMenu.textContent + "Style");

// SELECTING STYLE BUTTONS

var styles = document.querySelectorAll(".style");
var styleLen = styles.length;
var currentStyle = document.querySelector(".style.selected");

var tools = document.querySelectorAll(".tool");
var toolsLen = tools.length;


// SELECTING ALL MENU BUTTON

for(var i=0;i<menuLen; i++){
    menus[i].addEventListener('click', function(){

        currentMenu.classList.toggle("active");
        viewStyle.classList.toggle("hidden");
        viewStyle = document.querySelector("." + this.textContent + "Style");
        viewStyle.classList.toggle("hidden");
        currentMenu = this;
        changeMenu(currentMenu);
    });
}

// SELECTING ALL STYLE BUTTON

for (var i = 0; i < styleLen; i++) {
    styles[i].addEventListener('click', function () {
        console.log(currentStyle.classList);
        currentStyle.classList.toggle("selected");
        currentStyle = this;
        changeStyle(currentStyle);
    });
}

// SELECTING TOOLS ELEMENTS

for(var i = 0; i < toolsLen; i++){
    tools[i].addEventListener('click', function(){
        if(this.id ==="random"){
            randomImg();
        } else {
            downloadImg()
        }
    });
}

// CHANGING SELECTION BUTTON AS PER CLICK

function changeMenu(menu){
    currentMenu = document.querySelector("#"+ menu.id);
    currentMenu.classList.toggle("active");
    styleH3 = menu.textContent + " Styles";
    document.querySelector("#styleH3").textContent = styleH3;
}


function changeStyle(style) {
    style.classList.add("selected");
    var styleElement = document.querySelector("#"+currentStyle.id);
    changeImage(currentMenu.id, styleElement.id);
}


function changeImage(menu, option){
    var imgSrc = "./images/"+ menu +"/" + option + ".png";
    var imgSelector = document.querySelector("#"+menu+"pic");
    imgSelector.src = imgSrc;
}


function randomImg() {
    var menuLen = styleMenu.length;
    var hairLen = hairStyle.length;
    var earLen = earStyle.length;
    var eyeLen = eyeStyle.length;
    var mouthLen = mouthStyle.length;
    var neckLen = neckStyle.length;
    var legLen = legStyle.length;
    var accessLen = accessStyle.length;
    var bgLen = bgStyle.length;

    for(var i = 0; i < menuLen; i++){
        switch (styleMenu[i]) {
            case "hair":
                var randomNumber = Math.floor(Math.random() * hairLen);
                changeImage(styleMenu[i], hairStyle[randomNumber]);
                
                break;
            case "ears":
                var randomNumber = Math.floor(Math.random() * earLen);
                changeImage(styleMenu[i], earStyle[randomNumber]);
                break;
            case "eyes":
                var randomNumber = Math.floor(Math.random() * eyeLen);
                changeImage(styleMenu[i], eyeStyle[randomNumber]);
                break;
            case "mouth":
                var randomNumber = Math.floor(Math.random() * mouthLen);
                changeImage(styleMenu[i], mouthStyle[randomNumber]);
                break;
            case "neck":
                var randomNumber = Math.floor(Math.random() * neckLen);
                changeImage(styleMenu[i], neckStyle[randomNumber]);
                break;
            case "leg":
                var randomNumber = Math.floor(Math.random() * legLen);
                changeImage(styleMenu[i], legStyle[randomNumber]);
                break;
            case "accessories":
                var randomNumber = Math.floor(Math.random() * accessLen);
                changeImage(styleMenu[i], accessStyle[randomNumber]);
                break;
            case "backgrounds":
                var randomNumber = Math.floor(Math.random() * bgLen);
                changeImage(styleMenu[i], bgStyle[randomNumber]);
                break;
            default:
                break;
        }
    }
}



function downloadImg(){

    var imgElements = document.querySelector("#alpa-img");
    html2canvas(imgElements).then(function (canvas){
        console.log(canvas.toDataURL("image/png", 0.9));
        canvas.toBlob(function (blob) {
            window.saveAs(blob, "Alpaca.png");
        });
    });
    }
