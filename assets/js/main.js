/*jshint esversion:6, esversion:9, loopfunc:true */
const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionBox = document.getElementById('question');
const displayButton1 = document.getElementById('opt1');
const displayButton2 = document.getElementById('opt2');
const displayButton3 = document.getElementById('opt3');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const resultText = document.getElementById('result');
const finalUserDestination = [];

// Questions to be asked
const questions = [{
  id:1,
  q: "Where would you like to paddle?",
  a: ["Sea", "Lake", "River"]
  },

  {id:2,
  q: "Do you need to hire equipment?",
  a: ["Yes", "No"]
  },

  {id:3,
  q: "Are you wanting to take lessons?",
  a: ["Yes", "No"]
  },

  {id:4,
  q: "Level of expertise?",
  a: ["Beginner", "Expert"]
  }];


let selected ="";

//events for start and restart buttons
startButton.addEventListener('click', initQuestionnaire);
restartButton.addEventListener('click', function(){location.reload();});

// hides start button and initiates runQuestionnaire function
function initQuestionnaire(){
startButton.classList.add('hide');
runQuestionnaire();
}

// removes hidden question container and navigation next/restart buttons and sets first question with iterateQuestions function
function runQuestionnaire() {
  questionContainerElement.classList.remove('hide');
  nextButton.classList.remove('hide');
  restartButton.classList.remove('hide');
  iterateQuestions(0);
}

// generates questions and answer options,  applying colour to selected options
function iterateQuestions(id){

  questionBox.innerHTML = questions[id].q;
  displayButton1.innerHTML = questions[id].a[0];
  displayButton2.innerHTML = questions[id].a[1];

//hides button 3 if null, otherwise displays
  if(questions[id].a[2] == null){
    displayButton3.classList.add('hide');
  }else{
    displayButton3.innerHTML = questions[id].a[2];
  }

  displayButton1.addEventListener("click", function(){
    displayButton1.style.backgroundColor = "green";
    displayButton2.style.backgroundColor = "hsl(27, 88%, 66%)";
    displayButton3.style.backgroundColor = "hsl(27, 88%, 66%)";
    selected = displayButton1.innerText;
  });

  displayButton2.addEventListener("click", function(){
    displayButton1.style.backgroundColor = "hsl(27, 88%, 66%)";
    displayButton2.style.backgroundColor = "green";
    displayButton3.style.backgroundColor = "hsl(27, 88%, 66%)";
    selected = displayButton2.innerText;
  });

  displayButton3.addEventListener("click", function(){
    displayButton1.style.backgroundColor = "hsl(27, 88%, 66%)";
    displayButton2.style.backgroundColor = "hsl(27, 88%, 66%)";
    displayButton3.style.backgroundColor = "green";
    selected = displayButton3.innerText;
  });
}

//loop for questions and takes user selection to create new object
let id = 0;
nextButton.addEventListener("click", function(){
id++;
createUserDestObj(selected,id);

//checks for selection and if none made an alert is triggered
if(displayButton1.style.backgroundColor !== 'green' &&
    displayButton2.style.backgroundColor !== 'green' &&
    displayButton3.style.backgroundColor !== 'green'){
    alert('Oops, dont forget to make a selection before clicking next.');
    id--;
  }else if(id <= questions.length -1){
  console.log(id, selected);
  iterateQuestions(id);

//returns background colour to orange
    displayButton1.style.backgroundColor = "hsl(27, 88%, 66%)";
    displayButton2.style.backgroundColor = "hsl(27, 88%, 66%)";
    displayButton3.style.backgroundColor = "hsl(27, 88%, 66%)";
  }else{
    finalDestination();
}});


function finalDestination() {
  questionContainerElement.classList.add('hide');
  nextButton.classList.add('hide');
  restartButton.classList.add('hide');
  resultText.classList.remove('hide');
  const finalUserWebsite = [];
//contains the indexs of the locations that match the users criteria
  let matchedIndicesArray = compareLocation();
  console.log(matchedIndicesArray);

// creates an array of the locationArray name values
  let destNames = locationArray.map((object) => object.name);
  let destMarkers = locationArray.map((object1) => object1.marker);
  let destWeb = locationArray.map((object2) => object2.website);

/*loops the machedIndicesArray pushing each selection to new arrays
'finalUserDestination''finalUserMarkers'& 'finalUserWebsite' that contain the destination
names, co-ordinates and urls respectively*/
  for(i=0; i < matchedIndicesArray.length ; i++){
    finalUserDestination.push(destNames[matchedIndicesArray[i]]);
    finalUserMarkers.push(destMarkers[matchedIndicesArray[i]]);
    finalUserWebsite.push(destWeb[matchedIndicesArray[i]]);
  console.log(finalUserDestination);
  console.log(finalUserWebsite[i]);

// adds markers on map for each location in results
  const marker = new google.maps.Marker({
    position: finalUserMarkers[i],
    map,
    title : finalUserDestination[i],
  });
// Adds url in Info Window when marker zooms in
  const infowindow = new google.maps.InfoWindow({
    content:`<a href= '${finalUserWebsite[i]}' target ='_blank'}> ${finalUserDestination[i]}</a>`,
    ariaLabel: `${finalUserDestination}`,
});
// zooms out and closes Info Window if zoom set less than 7, otherwise zooms in on location when marker clicked
  marker.addListener("click", () => {
    if(map.getZoom() > 7){
    map.setCenter( { lat: 53.69631, lng: -3.62492 });
    map.setZoom(5);
    infowindow.close();
    }else{
    map.setZoom(8);
    map.setCenter(marker.getPosition());

  infowindow.open({
    anchor: marker,
    map,
  });
  }
});
}
document.getElementById('result-text').innerHTML += finalUserDestination.join('<br/>');
restartButton.classList.remove('hide');
}

// creates a new object from users selections
let resultObject = {};
function createUserDestObj(userAnswer, id) {

if (id === 1){resultObject.destination = userAnswer;}
if (id === 2){resultObject.hire = userAnswer;}
if (id === 3){resultObject.lessons = userAnswer;}
if (id === 4){resultObject.expertise = userAnswer;}
return resultObject;
}
console.log(resultObject);

/*stringifies user selections (resultObject) and creates duplicate,
removing name and website keys. Then compares duplicate to stringified locationArray*/

function compareLocation(){

let matchedIndices = [];
let userDataString = JSON.stringify(resultObject);

for (let i = 0; i < locationArray.length; i++) {
  // create duplicate and delete fields
  let duplicateObject = { ...locationArray[i]};
  delete duplicateObject.name;
  delete duplicateObject.website;
  delete duplicateObject.marker;

  // convert and compare
  if (userDataString === JSON.stringify(duplicateObject)) {
  matchedIndices.push(i);
  }
}
return matchedIndices;
}

const finalUserMarkers =[];
console.log(finalUserMarkers);

// Map code
let map;

// Initialize and add the map
function initMap() {
map = new google.maps.Map(document.getElementById("map"),{
  center: { lat: 53.69631, lng: -3.62492 },
  zoom: 5,
  mapTypeControl: false,
  streetViewControl: false,
});
}

window.initMap = initMap;