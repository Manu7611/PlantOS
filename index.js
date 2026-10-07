const loading = document.getElementById("load");
const loadingBackground = document.getElementById("loadingBackground");
var TimeElement = document.getElementById("TimeElement");
const WindowsElement = document.getElementById("Windows1");
const NoteElement = document.getElementById("NoteContain");
const NoteBar = document.getElementById("NoteBar");
const screen = document.getElementById("screen");
const CalcContain = document.getElementById("MyCalc");
document.getElementById("Sombre").checked = false;
document.getElementById("google").value = ""

let resultat = "";
let Timing = 6;
let research = "";
let GoogleWEB = "https://www.google.com/search?q=";
function load () {
    loading.style.display = "none";
    loadingBackground.style.display = "none";
}
function updateCountdown() {
    Timing = Timing - 1;
    document.getElementById("testt").innerHTML = Timing;
    if (Timing==0) {
        load();
        clearInterval(updateCountdown);
    }
}
setInterval(updateCountdown,1000)
function updateTime() {
    TimeElement.innerHTML = new Date();
}
setInterval(updateTime,1000);
let dx, dy, actif = false;
let fenetreActive = null;

function attraper(handle, e) {
    fenetreActive = handle.parentElement;
    fenetreActive.style.transform = "none";
    actif = true;
    dx = e.clientX - fenetreActive.offsetLeft;
    dy = e.clientY - fenetreActive.offsetTop;
}

document.onpointermove = function(e) {
    if (actif) {
        fenetreActive.style.left = (e.clientX - dx) + "px";
        fenetreActive.style.top = (e.clientY - dy) + "px";
    }
}
document.onpointerup = function() {
    actif = false;
};

function CloseWindows(Closest) {
    Closest.style.display = "none";
}
function OpenWindows(Openest) {
    Openest.style.display = "flex";
}
function ZindexUp(WichID , NoId1 , NoId2 , NoId3 , Noid4 , NoId5) {
    const TestIndex = WichID.style.zIndex;
    WichID.style.zIndex = 20;
    NoId1.style.zIndex = 0;
    NoId2.style.zIndex = 0;
    NoId3.style.zIndex = 0;
    Noid4.style.zIndex = 0;
    NoId5.style.zIndex = 0;
}
var content = [
    {
        title: "Advice 1",
        date: "28/09/26",
        content: `<div id="NoteDescription" class="DarkMode" style="border: 0.125rem solid black; background-color: aliceblue; border-radius: 10px;">Welcome on my PlantNotes ! Here we can see a location where you can edit memo.</div>
                   <div id="NoteWriting" class="DarkMode" style="border: 0.125rem solid black; background-color: aliceblue; margin: 12px; border-radius: 10px;" contenteditable="true">Always water yours plants and vegetables , mainly in summer with the high temperature !</div>`
    },
    {
        title: "Advice 2",
        date: "29/09/26",
        content: `<div id="NoteDescription" class="DarkMode" style="border: 0.125rem solid black; background-color: aliceblue; margin: 0.75rem; border-radius: 10px;" contenteditable="true">To preserve tomatoes , keep in your mind that you must'nt water the leaf !</div>`
    }
]
function Note(index){
    NoteElement.innerHTML = content[index].content;
}
Note(0)
function remplirColonne() {
    for (let i = 0; i < content.length; i++) {
        const note = content[i];

        const bloc = document.createElement("div");
        bloc.innerHTML = `<p contenteditable="true" class="DarkMode" style="background-color: aliceblue ; border-radius: 10px;">${note.title}</p><p style="font-size:12px; background-color: aliceblue ;border-radius: 10px;" class="DarkMode" contenteditable="true">${note.date}</p>`;
        bloc.style.cursor = "pointer";
        bloc.style.borderBottom = "1px solid black";
        bloc.style.borderRadius = "10px";

        bloc.addEventListener("click", function() {
            Note(i);
        });

        NoteBar.appendChild(bloc);
    }
}
remplirColonne();

function MakeCalc(Number){
    resultat=resultat + Number.innerHTML;
    document.getElementById("screen").innerHTML = resultat;
}
function Calc() {
     resultat = eval(resultat).toString();
     document.getElementById("screen").innerHTML = resultat;
}
function ClearCalc() {
    resultat = "";
    document.getElementById("screen").innerHTML = "";
}

var Cal = [
    {
        title: "Calculator",
        date: "28/09/26",
        content: `<div>
 <div id="CalcContainer" style="margin-top: 5px; display: flex; flex-direction: column; justify-content: center; align-items: center; background-color: green">
  <div id="screen" class="DarkMode" style="margin: 0.5rem; border: black solid 0.188rem; min-height: 2.5rem; width: 100%; box-sizing: border-box; justify-content: center; align-items: center; background-color: aliceblue ; border-radius: 10px;">Click on AC between each operation</div>
   <div id="smthg" style="display: flex; flex-direction: row; justify-content: center;">
  <div id="column1" class="ColumnCalc">
    <p id="1" class="DarkMode" onclick="MakeCalc(this)">1</p>
    <p id="2" class="DarkMode" onclick="MakeCalc(this)">2</p>
    <p id="3" class="DarkMode" onclick="MakeCalc(this)">3</p>
    <p id="AC" class="DarkMode" onclick="ClearCalc()">AC</p>
  </div>
  <div id="column2" class="ColumnCalc">
    <p id="4" class="DarkMode" onclick="MakeCalc(this)">4</p>
    <p id="5" class="DarkMode" onclick="MakeCalc(this)">5</p>
    <p id="6" class="DarkMode" onclick="MakeCalc(this)">6</p>
    <p id="0"  class="DarkMode" onclick="MakeCalc(this)">0</p>
  </div>
  <div id="column3" class="ColumnCalc">
    <p id="7" class="DarkMode" onclick="MakeCalc(this)">7</p>
    <p id="8" class="DarkMode" onclick="MakeCalc(this)">8</p>
    <p id="9" class="DarkMode" onclick="MakeCalc(this)">9</p>
    <p id="enter" class="DarkMode" onclick="Calc()">Enter</p>
  </div>
  <div id="column4" class="ColumnCalc">
    <p id="+" class="DarkMode" onclick="MakeCalc(this)">+</p>
    <p id="-" class="DarkMode" onclick="MakeCalc(this)">-</p>
    <p id="*" class="DarkMode" onclick="MakeCalc(this)">*</p>
    <p id="/" class="DarkMode" onclick="MakeCalc(this)">/</p>
  </div>
</div>
</div>
 </div>`
    },
] 
 function Calculator(index){
    CalcContain.innerHTML = Cal[index].content;
 }
 Calculator(0)
function search(){
    const SaisieUtilisateur = document.getElementById("google").value;
    researchhh = GoogleWEB + SaisieUtilisateur;
    window.open(researchhh ,'_blank')
}
function BlackTheme() {
    let theme = document.querySelectorAll(".DarkMode")
    theme.forEach(function(themes){
        if (document.getElementById("Sombre").checked) {
            themes.style.backgroundColor = "black";
            document.body.style.color = "white";
            document.body.style.backgroundImage = "url('img/DarkWallpaper.jpg')";
            document.getElementById("google").style.color = "white";
        }
        else{
            themes.style.backgroundColor ="aliceblue";
            document.body.style.color = "black";
            document.body.style.backgroundImage = "url('img/Wallpaper.jpg')";
        }
    });
}

var PictureApp = [
    {
        title: "PictureApp",
        Date: "07/10/26",
        content: `<div id="InitialPhotos" style="display: flex; flex-direction: column; justify-content: center; align-items: center; background-color: aliceblue;">
  <div class="Photos" style="padding-top: 0px; border-radius: 15%;"><p> This is a wiki of pictures of plants !</p></div>
  <div id="Photo1" class="Photos" onclick="OpenPhoto(BigSunflower,BigMuguet,BigPissenlit,BigRose,BigOrchid)"><img src="PicturesPlants/Photo1.jpg" style="height: 2.5rem; margin-left: 0.625rem;"><p style="margin-left: 0.625rem;">SunFlower</p><Span style="visibility: hidden; width: 2.5rem;"></Span><div style="display: flex; flex-direction: column;"><p style="margin: 0rem;">Date:06/10</p><p style="margin: 0rem;">Taille: 56ko</p></div></div>
  <div id="Photo2" class="Photos" onclick="OpenPhoto(BigMuguet,BigSunflower,BigPissenlit,BigRose,BigOrchid)"><img src="PicturesPlants/Muguet.jpg" style="height: 1.875rem; margin-left: 0.625rem;"><p style="margin-left: 0.625rem;">Muguet</p><Span style="visibility: hidden; width: 2.5rem;"></Span><div style="display: flex; flex-direction: column;"><p style="margin: 0rem;">Date:06/10</p><p style="margin: 0rem;">Taille: 2.1Mo</p></div></div>
  <div id="Photo3" class="Photos" onclick="OpenPhoto(BigPissenlit,BigMuguet,BigSunflower,BigRose,BigOrchid)"><img src="PicturesPlants/Pissenlit.jpg" style="height: 1.625rem; margin-left: 0.625rem;"><p style="margin-left: 0.625rem;">Pissenlit</p><Span style="visibility: hidden; width: 2.5rem;"></Span><div style="display: flex; flex-direction: column;"><p style="margin: 0rem;">Date:06/10</p><p style="margin: 0rem;">Taille: 2.2Mo</p></div></div>
  <div id="Photo4" class="Photos" onclick="OpenPhoto(BigRose,BigMuguet,BigSunflower,BigPissenlit,BigOrchid)"><img src="PicturesPlants/Rose.jpg" style="height: 3.438rem; margin-left: 0.625rem;"><p style="margin-left: 0.625rem">Rose</p><Span style="visibility: hidden; width: 1.75rem;"></Span><div style="display: flex; flex-direction: column;"><p style="margin: 0rem;">Date:06/10</p><p style="margin: 0rem;">Taille: 0.8Mo</p></div></div>
  <div id="Photo5" class="Photos" onclick="OpenPhoto(BigOrchid,BigMuguet,BigSunflower,BigPissenlit,BigRose)"><img src="PicturesPlants/Orchid.jpg" style="height: 2.625rem; margin-left: 0.625rem;"><p style="margin-left: 0.625rem">Orchid</p><Span style="visibility: hidden; width: 2.063rem;"></Span><div style="display: flex; flex-direction: column;"><p style="margin: 0rem;">Date:06/10</p><p style="margin: 0prem;">Taille: 1.4Mo</p></div></div>
 </div>
  <div id="BigSunflower" class="BigPhoto" style="display:none;"><img src="PicturesPlants/Photo1.jpg"></div>
  <div id="BigMuguet" class="BigPhoto" style="height: 10rem;width: 10rem; box-sizing: border-box;display:none;"><img src="PicturesPlants/Muguet.jpg"></div>
  <div id="BigPissenlit" class="BigPhoto" style="display:none;"><img src="PicturesPlants/Pissenlit.jpg"></div>
  <div id="BigRose" class="BigPhoto" style="display:none;"><img src="PicturesPlants/Rose.jpg"></div>
  <div id="BigOrchid" class="BigPhoto" style="display:none;"><img src="PicturesPlants/Orchid.jpg"></div>`
    }
]

function Picture(index){
    document.getElementById("MyPictures").innerHTML = PictureApp[index].content;
}
Picture(0)
function OpenPhoto(MyPhoto , Photo1 , Photo2, Photo3, Photo4){
    MyPhoto.style.display = "flex";
    Photo1.style.display = "none";
    Photo2.style.display = "none";
    Photo3.style.display = "none";
    Photo4.style.display = "none";
    document.getElementById("InitialPhotos").style.display = "none"
}
function ReturnPhoto(MyBigPhoto){
    FullScreen=document.querySelectorAll(".BigPhoto")
    FullScreen.forEach(function(Photo){
        Photo.style.display = "none";
        document.getElementById("InitialPhotos").style.display = "flex";
    })

}