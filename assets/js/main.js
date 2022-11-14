

const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionBox = document.getElementById('question');
const displayButton1 = document.getElementById('opt1');
const displayButton2 = document.getElementById('opt2');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');



// Questions to be asked
let questions = [{
  id:0,
  q: "Where would you like to paddle?",
  a: ["Sea", "Lake"],
  },

  {id:1,
  q: "Do you need to hire equipment?",
  a: ["Yes", "No"]
  },

  {id:2,
  q: "Are you wanting to take some lessons?",
  a: ["Yes", "No"]
  },

  {id:3,
  q: "Level of expertise?",
  a: ["Beginner", "Expert"]
  }]
let start = true;

startButton.addEventListener('click', initQuestionnaire());

function initQuestionnaire(){
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  nextButton.classList.remove('hide')
  restartButton.classList.remove('hide')
if (start) {
  runQuestionnaire('0');
}
}




function runQuestionnaire(id) {
  

  questionBox.innerText = questions[id].q;

  displayButton1.innerText = questions[id].a[0];
  displayButton2.innerText = questions[id].a[1];

  let selected = []

  displayButton1.addEventListener("click", () => {
    displayButton1.style.backgroundColor = "green";
    displayButton2.style.backgroundColor = "lightgoldenrodyellow";
    selected = displayButton1.value;
  })

  displayButton2.addEventListener("click", () => {
    displayButton1.style.backgroundColor = "lightgoldenrodyellow";
    displayButton2.style.backgroundColor = "green";
    selected = displayButton2.value;
  })



}



let id = 0;
nextButton.addEventListener('click',() => {
  start = false;
  if (id < 4) {
  id++;
  runQuestionnaire(id);
  console.log(id);
  console.log(selected);
  }

})

console.log(selected)



function questionOverCheck() {

}

function restartQuestionnaire() {

}

function finalDestination() {

}




//*user object created from answers
//let resultObject = new Object();
//let firstKey = 'Destination';
//let secondKey = 'Hire';
//let thirdKey = 'Lessons';
//let forthKey = 'Expertise'
//resultObject[firstKey] = destinationType;


//if (start) {
//  runQuestionnaire("0");
//}


//





// Map code

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: { lat: 54.5187636, lng: -4.488381 },
    });
    const infoWindow = new google.maps.InfoWindow({
      content: "",
      disableAutoPan: true,
    });
    // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.
    const markers = locations.map((position, i) => {
      const label = labels[i % labels.length];
      const marker = new google.maps.Marker({
        position,
        label,
      });
  
      // markers can only be keyboard focusable when they have click listeners
      // open info window when marker is clicked
      marker.addListener("click", () => {
        infoWindow.setContent(label);
        infoWindow.open(map, marker);
      });
      return marker;
    });
  
    // Add a marker clusterer to manage the markers.
    new MarkerClusterer({ markers, map });
  }
  
  const locations = [
    { lat: 51.1982119, lng: 1.4036143844917808 },
    { lat: -33.718234, lng: 150.363181 },
    { lat: -33.727111, lng: 150.371124 },
    { lat: -33.848588, lng: 151.209834 },
    { lat: -33.851702, lng: 151.216968 },
    { lat: -34.671264, lng: 150.863657 },
    { lat: -35.304724, lng: 148.662905 },
    { lat: -36.817685, lng: 175.699196 },
    { lat: -36.828611, lng: 175.790222 },
    { lat: -37.75, lng: 145.116667 },
    { lat: -37.759859, lng: 145.128708 },
    { lat: -37.765015, lng: 145.133858 },
    { lat: -37.770104, lng: 145.143299 },
    { lat: -37.7737, lng: 145.145187 },
    { lat: -37.774785, lng: 145.137978 },
    { lat: -37.819616, lng: 144.968119 },
    { lat: -38.330766, lng: 144.695692 },
    { lat: -39.927193, lng: 175.053218 },
    { lat: -41.330162, lng: 174.865694 },
    { lat: -42.734358, lng: 147.439506 },
    { lat: -42.734358, lng: 147.501315 },
    { lat: -42.735258, lng: 147.438 },
    { lat: -43.999792, lng: 170.463352 },
  ];
  
  window.initMap = initMap;
  