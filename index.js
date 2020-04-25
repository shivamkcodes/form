console.log('welcome to travel agency');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let message;
let validEmail = false;
let validName = false;
let validPhone = false;
name.addEventListener('blur', () => {
    console.log('blurred');
    // let regex = /[A-Z]{1}[a-zA-Z]{2,20}/;
    let regex = /^[A-Z]{1}([a-zA-Z]){2,20}$/;
    str = name.value;
    if (regex.test(str)) {
        console.log(str, 'is valid');
        name.classList.remove('is-invalid');
        small.innerText = '';
        validName = true;
    } else {
        console.log('is invalid');
        let small = document.getElementById('small');
        small.innerText = 'Your name must start with a Block Letter and should contains 3-20 characters and there shouldnot be any spacing between first and Last name..'
        name.classList.add('is-invalid')
        validName = false;
    }
});


email.addEventListener('blur', () => {
    console.log('blurred');
    let regex = /^([_\-\.0-9a-zA-Z]+)[@]{1}([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    str = email.value;
    if (regex.test(str)) {
        console.log(str, 'is valiphoemail');
        email.classList.remove('is-invalid');
        small1.innerText = '';
        validEmail = true;

    } else {
        console.log('is invalid');
        let small2 = document.getElementById('small1');
        small1.innerText = 'Your email Must be a valid one'
        email.classList.add('is-invalid');
        validEmail = false;
    }


});
phone.addEventListener('blur', () => {
    console.log('blurred');
    let regex = /^[0-9]{10}$/;
    str = phone.value;
    if (regex.test(str)) {
        console.log(str, 'is valiphone');
        phone.classList.remove('is-invalid');
        small2.innerText = '';
        validPhone = true;
    } else {
        console.log('is invalid');
        let small2 = document.getElementById('small2');
        small2.innerText = 'Your Number must contain  exactly 10 chracters'
        phone.classList.add('is-invalid');
        validPhone = false;
    }

});


let btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    //submitting the form
    if (validPhone & validName & validEmail) {
        message = "success"
        let alert = document.getElementById('alert');
        alert.innerHTML = `<div  class="alert alert-${message} alert-dismissible fade show" role="alert">
            <strong>Sucess!</strong> You form has been suceesfully submitted..
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            
            `

        setTimeout(() => {
            alert.innerHTML = '';
            location.reload();


        }, 5000)

    } else {
        // e.preventDefault();
        message = "danger"
        let alert = document.getElementById('alert');
        alert.innerHTML = `<div  class="alert alert-${message} alert-dismissible fade show" role="alert">
    <strong>Sorry!</strong> You form Cannot be submitted..
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
    </div>
    
    `
        setTimeout(() => {
            alert.innerHTML = '';
        }, 5000)

    }


});