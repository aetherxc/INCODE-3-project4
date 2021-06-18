
const form = document.querySelector("#signupform")
const firstname = document.querySelector("#firstName")
const surname = document.querySelector("#surName")
const email = document.querySelector("#email")
const password = document.querySelector("#psw")
const errorfirstname = document.querySelector("#error-firstname")
const errorlastname = document.querySelector("#error-lastname")
const erroremail = document.querySelector("#error-email")
const errorpsw = document.querySelector("#error-psw")
const errormpsw = document.querySelector("#error-mpsw")




form.setAttribute('novalidate',true)

firstname.addEventListener("oninput",)


function validateNames() {
    /^[A-Za-zÀ-ÖØ-öø-ÿ \-']+$/i.test(firstname.value)

}



const str = 'hello world!';
const result = /^hello/.test(str);