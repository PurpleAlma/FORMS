/*function validate(e){
    const inputelement= e.target
    console.log(inputelement.parentElement)
    inputelement.classList.add('signup__field__input--error')

    const errorElement=e.target.parentElement.getElementsByClassName('signup__field__error')[0]
    errorElement.innerHTML='Sample Error'
}
const inputs=document.getElementsByClassName('signup__field__input')

for(input of inputs){
    input.onblur=validate
}*/

//regex for passwords

/*const PASSWORDS={
    WEAK:"weak",
    FAIR:'fair',
    GREAT:'great'
}
function getquality(password){
    const lettersREG=/[a-zA-Z]+/
    const numbersREG=/[0-9]+/
    const numbersAndLettersREG= /[a-zA-Z0-9]{6,}$/

    function isGreat(){
        return lettersREG.test(password)&&
        numbersREG.test(password)&&
        numbersAndLettersREG.test(password)
    }
    function isFair(){
        return numbersAndLettersREG.test(password)
    }

    if (isGreat){return PASSWORDS.GREAT}else if(isFair){
        return PASSWORDS.FAIR}else{
            return PASSWORDS.WEAK}
}*/


class ValidationError extends Error {
    constructor(message) {
      super();
      this.message = message;
    }
  }

function validateName(name){
    const nameREG=/[a-zA-Z]+$/
    if (!nameREG.test(name)){throw new ValidationError('please enter a valid name')}
}

function validatePassword(password) {
    if (!password) {
      throw new ValidationError('Password cannot be empty');
    }
    if (password.length < 6) {
      throw new ValidationError('Password length too short');
    }
}
  
  function validateConfirmPassword(password) {
    const currentPassword = document.getElementsByClassName('signup__field__input--password')[0].value;
    if (password && password !== currentPassword) {
      throw new ValidationError('Password did not match');
    }
  }

function validateEmail(email){
    const emailReg = /^[a-zA-Z0-9]{1}[a-zA-Z0-9@._-]+[a-zA-Z]$/;
    if(!emailReg.test(email)){throw new ValidationError('please enter a valid email')}
    const mustHaveChars=['@','.']
    for(i of mustHaveChars){if(!email.includes(i)){throw new ValidationError('enter a valid email')}}
}
function validateUser(username){
    const userReg= /^[a-zA-Z0-9._]+$/;
    if(!userReg.test(username)){throw new ValidationError('enter a valid username')}
}

function validateDay(day){
    const dayREG=/^[0-9]{1,2}$/;
    if(!dayREG.test(day)){throw new ValidationError('invalid day')}
}
function validateYear(year){
    const yearREG=/^[0-9]{4}$/;
    if(!yearREG.test(year)){throw new ValidationError('invalid year')}
}


const validateMap={
    'name':validateName,
    'email':validateEmail,
    'username':validateUser,
    'day':validateDay,
    'year':validateYear,
    'password': validatePassword,
    'confirmPassword': validateConfirmPassword
  
}

function validateEvent(event){
    const field = event.dataset.field;
    if (field === 'password') {
        const confirmPassword = document.getElementsByClassName('signup__field__input--confirm-password')[0];
        validateEvent(confirmPassword);
      }
    
    const errorMessageElement = event.parentElement.getElementsByClassName('signup__field__error')[0];
    try {
      validateMap[field](event.value); 
      errorMessageElement.innerHTML = '';
      event.classList.remove('signup__field__input--error');
      }catch(err){

if (!(err instanceof ValidationError)) {
    // Log real error
    throw err 
  }
  errorMessageElement.innerHTML = err.message;
  event.classList.add('signup__field__input--error');
}
}

const inputs = document.getElementsByClassName('signup__field__input');

for (const input of inputs) {
    input.onblur = (event) => validateEvent(event.target);
  }

