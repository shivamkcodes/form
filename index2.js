regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2-7}$/;
regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
let str = 'shivamguglani306@gmail.com'
if (regex.test(str)) {
    console.log(str, 'is valid');
} else {
    console.log(str, 'is invalid');
}