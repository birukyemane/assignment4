//https://www.w3schools.com/jsref/jsref_obj_regexp.asp
//https://www.w3schools.com/jsref/jsref_regexp_digit_non.asp
//https://regex101.com/r/bL0Nfv/2/

const inputs = document.querySelectorAll ('input[type="text"],input[type="email"],input[type="url"],textarea');
const button = document.querySelector ('button');

//console.log (inputs);


const patterns = {
  fullName: /fullName/,
  phones: /phones/,
  email:/email/,
  ReEnterEmail: /ReEnterEmail/,
  address1: /address1/,
  address2: /address2/,
  city:/city/,
  state: /state/,
  country: /country/,
  zip:/zip/,
  aboutUS: /aboutUS/,
  portfolio: /url/,
  another: /another/
};

let arryInputs = Array.from(inputs);
function allPassed() {
 return arryInputs.every(input=>{
          return input.className == 'valid'   
  });  
} 

inputs.forEach (element => {
  element.addEventListener ('input', e => {
    formValidator (e.target, patterns[e.target.name]);
  });
});

const formValidator = (element, pattern) => {
  if (pattern.test (element.value)) {
    element.className = 'valid';
    if(allPassed()){
      button.className = 'submit-button';
      button.disabled = false;
    }   
  } else {
    element.className = 'invalid';
    button.classList.remove ('submit-button');
    button.disabled = true;
  }
};