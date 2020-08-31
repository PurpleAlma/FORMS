const namehelper=document.getElementById('namehelp')
const name=document.getElementById('name')
const emailhelper=document.getElementById('emailhelp')
const email=document.getElementById('email')
const abouthelp=document.getElementById('abouthelp')
const about=document.getElementById('about')
const passwordhelp=document.getElementById('passwordhelp')
const password=document.getElementById('password')


name.addEventListener('click',()=>{
    name.value=''
    namehelper.innerHTML='Write your name'
})
name.addEventListener('blur',(e)=>{
    namehelper.innerHTML=''
    if (name.value==''){name.value='Your name'}else{name.value}
})

email.addEventListener('focus',()=>{
    emailhelper.innerHTML='write you business email'
    email.value=''
})
email.addEventListener('blur',emailHelp)

about.addEventListener('focus',()=>abouthelp.innerHTML='short bio')
about.addEventListener('blur',()=>abouthelp.innerHTML='')

password.addEventListener('focus',()=>passwordhelp.innerHTML='make it hard to guess')
password.addEventListener('blur',()=>passwordhelp.innerHTML='')

password.addEventListener('input',passwordHelp)

function passwordHelp(e){   
    let password=e.target.value
    if(password.length<=3){passwordhelp.innerHTML='SHORT',passwordhelp.style.color='red'}
    else if(password.length>3 && password.length<6){passwordhelp.innerHTML='OKAYISH',passwordhelp.style.color='blue'}
    else{passwordhelp.innerHTML='GREAT',passwordhelp.style.color='green'}
}
function emailHelp(e){
    let email=e.target.value
    const emailRegex = /.+@.+\..+/;
    if (!email.match(emailRegex)){
    emailhelper.innerHTML='INVALID ADRESS'}
    else{emailhelper.innerHTML=''}
}

document.querySelector("form").addEventListener("submit", e => {
    const pass1=document.getElementById('password')
    const pass2=document.getElementById('confirm-password')
    const result=document.getElementById('result')
    
    let reg= /^[a-zA-Z0-9\d{1}]{6,}$/
    let passinput=pass1.value
    if(passinput.match(reg) && pass2.value==pass1.value){
        result.innerHTML='password is good'
    }
    else{result.innerHTML='password error'}
         e.preventDefault();
    })