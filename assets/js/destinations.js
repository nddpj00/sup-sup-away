//Object constructor to create paddleboarding locations

function Location(name, destination, hire, lessons, expertise, website) {
  this.name = name;
  this.destination = destination;
  this.hire = hire;
  this.lessons = lessons;
  this.expertise = expertise;
  this.website = website;
}


// location object creation with JSON stringify to allow comparision with userObject

let jossbaySurfSchool = new Location('Joss Bay Surf School', 'sea', true, true, 'beginner', 'https://www.jossbay.co.uk/');
const jossJSON = JSON.stringify(jossbaySurfSchool);
console.log(jossJSON)

let kentSurfSchool = new Location('Kent Surf School', 'sea', true, true, 'beginner','https://kentsurfschool.co.uk/');
const kentJSON = JSON.stringify(kentSurfSchool);

let canoeWild = new Location('Canoe Wild', 'lake', true, true, 'beginner', 'https://www.canoewild.co.uk/courses-lessons');
const canoJSON = JSON.stringify(canoeWild);

let paddleboardingLondon = new Location('Paddleboarding London', 'lake', true, true, 'beginner', 'https://paddleboardinglondon.co.uk/');
const paddJSON = JSON.stringify(paddleboardingLondon);

// test objects
let testLocation = new Location('text Location', lake, false, false, 'beginner', www.test.com)
const testOneJSON = JSON.stringify(testLocation);
let testLocation2 = new Location('test location 2 ', sea, false, true, 'expert', www.infofin.com)
const testTwoJSON = JSON.stringify(testLocation);