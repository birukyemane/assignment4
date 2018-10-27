//https://www.w3schools.com/jsref/jsref_obj_regexp.asp
//https://www.w3schools.com/jsref/jsref_regexp_digit_non.asp
//https://regex101.com/r/bL0Nfv/2/

const inputs = document.querySelectorAll ('input[type="text"],input[type="email"],input[type="url"],textarea');
const button = document.querySelector ('button');

//console.log (inputs);


const patterns = {
  fullName: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
  phones: /[0-9]{3}[ -][0-9]{3}[-][0-9]{4}$/,
  email:/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
  ReEnterEmail: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
  address1: /^[a-zA-Z0-9]+(([',. -][a-zA-Z0-9 ])?[a-zA-Z0-9]*)*$/,
  address2: /^[a-zA-Z0-9]+(([',. -][a-zA-Z0-9 ])?[a-zA-Z0-9]*)*$/,
  city:/[A-Za-z0-9' \-,.]+$/,
  state: /[A-Za-z0-9' \-,.]+$/,
  country: /[A-Za-z0-9' \-,.]+$/,
  zip:/^\d{5}$/,
  aboutUS: /.{0,50}$/,
  portfolio: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/,
  another: /.{0,50}$/
};

let arryInputs = Array.from(inputs);
function allPassed() {
 return arryInputs.every(input=>{
          return input.classList.contains('valid');
  });  
} 

inputs.forEach (element => {
  element.addEventListener ('input', e => {
    formValidator (e.target, patterns[e.target.name]);
  });
});

const formValidator = (element, pattern) => {
  if (pattern.test (element.value)) {
    //element.className = 'valid';
      element.classList.add('valid');
      element.classList.remove('invalid');
    if(allPassed()){
      button.className = 'submit-button';
      button.disabled = false;
    }   
  } else {
    //element.className = 'invalid';
      element.classList.add('invalid');
      element.classList.remove('valid');
      button.classList.remove('submit-button');
      button.disabled = true;
  }
}