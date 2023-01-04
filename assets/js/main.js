

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
  a: ["Sea", "Lake", "River"],
  },

  {id:2,
  q: "Do you need to hire equipment?",
  a: ["Yes", "No"]
  },

  {id:3,
  q: "Are you wanting to take some lessons?",
  a: ["Yes", "No"]
  },

  {id:4,
  q: "Level of expertise?",
  a: ["Beginner", "Expert"]
  }];




let selected ="";


startButton.addEventListener('click', initQuestionnaire);
restartButton.addEventListener('click', function(){location.reload()})


// hides start button and initiates runQuestionnaire function
function initQuestionnaire(){
startButton.classList.add('hide');
runQuestionnaire();
}

// question container and navigation buttons appear and iterates through questions
function runQuestionnaire() {
  questionContainerElement.classList.remove('hide');
  nextButton.classList.remove('hide');
  restartButton.classList.remove('hide');
  iterateQuestions(0);
}


function restartQuest(){

}

// generates questions and answer option,  applying colour to selected
function iterateQuestions(id){
  

  questionBox.innerHTML = questions[id].q;
  displayButton1.innerHTML = questions[id].a[0];
  displayButton2.innerHTML = questions[id].a[1];
//hides button 3 if null, otherwise displays
  if(questions[id].a[2] == null){
    displayButton3.classList.add('hide');
  }else{
    displayButton3.innerHTML = questions[id].a[2];
  };

  displayButton1.addEventListener("click", () => {
    displayButton1.style.backgroundColor = "green";
    displayButton2.style.backgroundColor = "hsl(27, 88%, 66%)";
    displayButton3.style.backgroundColor = "hsl(27, 88%, 66%)";
    selected = displayButton1.innerText;
  });

  displayButton2.addEventListener("click", () => {
    displayButton1.style.backgroundColor = "hsl(27, 88%, 66%)";
    displayButton2.style.backgroundColor = "green";
    displayButton3.style.backgroundColor = "hsl(27, 88%, 66%)";
    selected = displayButton2.innerText;
  });

  displayButton3.addEventListener("click", () => {
    displayButton1.style.backgroundColor = "hsl(27, 88%, 66%)";
    displayButton2.style.backgroundColor = "hsl(27, 88%, 66%)";
    displayButton3.style.backgroundColor = "green";
    selected = displayButton3.innerText;
  });  
  
}

// loop for questions and takes user selection to create new object 
let id = 0;
nextButton.addEventListener("click", () => {
id++;  
createUserDestObj(selected,id);  

 //checks for selection and if none made alert triggered
if(displayButton1.style.backgroundColor !== 'green' &&
    displayButton2.style.backgroundColor !== 'green' &&
    displayButton3.style.backgroundColor !== 'green'){
    alert('Oops, dont forget to make a selection before clicking next.'); id--}
    
else if(id <= questions.length -1){
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
  
  //contains the indexs of the locations that match the users criteria
  let matchedIndicesArray = compareLocation();
  console.log(matchedIndicesArray)

  // creates an array of the location array name values
  let destNames = locationArray.map(object => object.name);
  console.log(destNames);
  let destMarkers = locationArray.map(object1 => object1.marker)
  console.log(destMarkers)
  //loops the machedIndicesArray pushing each selection to new arrays 'finalUserDestination' and 'finalUserMarkers'
  for(i=0; i < matchedIndicesArray.length ; i++){
    finalUserDestination.push(destNames[matchedIndicesArray[i]]);
    finalUserMarkers.push(destMarkers[matchedIndicesArray[i]]);
  console.log(finalUserDestination)
 
}

  document.getElementById('result-text').innerHTML += finalUserDestination.join('<br/>');
  
  }


// creates a new object from users selections
let resultObject = new Object();
function createUserDestObj(userAnswer, id) {

if (id === 1){resultObject.destination = userAnswer;}
if (id === 2){resultObject.hire = userAnswer;}
if (id === 3){resultObject.lessons = userAnswer;}
if (id === 4){resultObject.expertise = userAnswer;}
return resultObject;
}
console.log(resultObject);


/* stringifies user selections (resultObject) and creates duplicate, 
removing name and website keys. Then compares duplicate to stringified locationArry*/

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


// Map code
let map;

// Initialize and add the map
function initMap() {
  // The locations
  const mapOptions = {
    zoom: 5,
      center: { lat: 54.888305, lng: -3.308703 },
    };
  // The map

  map = new google.maps.Map(document.getElementById("map"), mapOptions);

    console.log(finalUserMarkers)
  // The markers
  for (let i = 0; i < finalUserMarkers.length; i++) {
  
    const marker = new google.maps.Marker({
      // The below line is equivalent to writing:
      // position: new google.maps.LatLng(-34.397, 150.644)
      position: finalUserMarkers[i],
      map: map,
    });
  }
   
  }
  
  window.initMap = initMap;
