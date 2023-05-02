var i = 0;
var storedObj = localStorage.getItem('user');
var emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var form = document.getElementById('sign-input');
var fName = document.getElementById('sfname');
var lName = document.getElementById('slname');
var id = document.getElementById('sid');
var bDate = document.getElementById('sbdate');
var pNumber = document.getElementById('spnumber');
var adress = document.getElementById('sadress');
var city = document.getElementById('scity');
var pCode = document.getElementById('spcode');
var eMail = document.getElementById('semail');
var pass = document.getElementById('spass');
var rPass = document.getElementById('srpass');

function complete() {
    if (storedObj) {
        var user = JSON.parse(storedObj);
        var [month, day, year] = user.dob.split('/');
        var newDate = `${year}-${month}-${day}`;
        fName.value = user.name;
        lName.value = user.lastName;
        id.value = user.dni;
        bDate.value = newDate;
        pNumber.value = user.phone;
        adress.value = user.address;
        city.value = user.city;
        pCode.value = user.zip;
        eMail.value = user.email;
        pass.value = user.password;
        rPass.value = user.password;
    }
}

document.addEventListener('DOMContentLoaded', complete);

function isNumber(char) {
    return (numbers.indexOf(char) !== -1);
}

function isLetter(char) {
    return (letters.indexOf(char) !== -1);
}

function validateAlphaNum(str) {
    for (i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        if (!(isLetter(char) || isNumber(char))) {
            return false;
        }
    }
    return true;
}

function validateAlphaNumSpace(str) {
    for (i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        if (char === ' ') {
            continue;
        }
        if (!(isLetter(char) || isNumber(char))) {
            return false;
        }
    }
    return true;
}

function validateLetters(str) {
    for (i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        if (!(isLetter(char))) {
            return false;
        }
    }
    return true;
}

function validateNum(str) {
    for (i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        if (!(isNumber(char))) {
            return false;
        }
    }
    return true;
}

function validateIntStr(str) {
    var hasLetter = false;
    var hasNumber = false;
    for (i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        if (isLetter(char)) {
            hasLetter = true;
        } else if (isNumber(char)) {
            hasNumber = true;
        }
    }
    return (hasLetter && hasNumber);
}

function validateNumSpace(str) {
    var lastSpace = findLastSpace(str);
    if (lastSpace == -1) {
        return false;
    }
    var afterSpace = str.substring(lastSpace + 1);
    if (!validateNum(afterSpace)) {
        return false;
    }
    return true;
}

function checkDate(date) {
    var now = new Date();
    var sDate = new Date(date);
    if (sDate < now) {
        return false;
    }
    return true;
}

function findLastSpace(str) {
    return str.lastIndexOf(' ');
}

function validateFName() {
    if (fName.value.length < 4 || !validateLetters(fName.value)) {
        fName.classList.add('invalid');
        sfnameError.innerHTML = 'Must be at least three characters long and only letters';
        return false;
    }
    return true;
}

function focusFName() {
    if (fName.classList.contains('invalid')) {
        fName.classList.remove('invalid');
        sfnameError.innerHTML = '&nbsp;';
    }
}

fName.addEventListener('blur', validateFName);
fName.addEventListener('focus', focusFName);

function validateLName() {
    if (lName.value.length < 4 || !validateLetters(lName.value)) {
        lName.classList.add('invalid');
        slnameError.innerHTML = 'Must be at least three characters long and only letters';
        return false;
    }
    return true;
}

function focusLName() {
    if (lName.classList.contains('invalid')) {
        lName.classList.remove('invalid');
        slnameError.innerHTML = '&nbsp;';
    }
}

lName.addEventListener('blur', validateLName);
lName.addEventListener('focus', focusLName);

function validateId() {
    if (id.value.length < 8 || !validateNum(id.value)) {
        id.classList.add('invalid');
        sidError.innerHTML = 'Must be at least seven characters long and only numbers';
        return false;
    }
    return true;
}

function focusId() {
    if (id.classList.contains('invalid')) {
        id.classList.remove('invalid');
        sidError.innerHTML = '&nbsp;';
    }
}

id.addEventListener('blur', validateId);
id.addEventListener('focus', focusId);

function validateBDate() {
    if (!bDate.value || checkDate(bDate.value)) {
        bDate.classList.add('invalid');
        sbdateError.innerHTML = 'Must be before today';
        return false;
    }
    return true;
}

function focusBDate() {
    if (bDate.classList.contains('invalid')) {
        bDate.classList.remove('invalid');
        sbdateError.innerHTML = '&nbsp;';
    }
}

bDate.addEventListener('blur', validateBDate);
bDate.addEventListener('focus', focusBDate);

function validatePNumber() {
    if (pNumber.value.length != 10 || !validateNum(pNumber.value)) {
        pNumber.classList.add('invalid');
        spnumberError.innerHTML = 'Must be ten characters long and only numbers';
        return false;
    }
    return true;
}

function focusPNumber() {
    if (pNumber.classList.contains('invalid')) {
        pNumber.classList.remove('invalid');
        spnumberError.innerHTML = '&nbsp;';
    }
}

pNumber.addEventListener('blur', validatePNumber);
pNumber.addEventListener('focus', focusPNumber);

function validateAdress() {
    if (adress.value.length < 5 || adress.value[0] == ' ' || adress.value[adress.value.length - 1] == ' '
        || !validateAlphaNumSpace(adress.value) || !validateIntStr(adress.value)
        || !validateNumSpace(adress.value)) {
        adress.classList.add('invalid');
        sadressError.innerHTML = 'Must be at least five characters long and have numbers after the end';
        return false;
    }
    return true;
}

function focusAdress() {
    if (adress.classList.contains('invalid')) {
        adress.classList.remove('invalid');
        sadressError.innerHTML = '&nbsp;';
    }
}

adress.addEventListener('blur', validateAdress);
adress.addEventListener('focus', focusAdress);

function validateCity() {
    if (city.value.length < 4 || !validateAlphaNumSpace(city.value) || city.value[0] == ' '
        || city.value[city.value.length - 1] == ' ') {
        city.classList.add('invalid');
        scityError.innerHTML = 'Must be at least 3 characters and alphanumeric';
        return false;
    }
    return true;
}

function focusCity() {
    if (city.classList.contains('invalid')) {
        city.classList.remove('invalid');
        scityError.innerHTML = '&nbsp;';
    }
}

city.addEventListener('blur', validateCity);
city.addEventListener('focus', focusCity);

function validatePCode() {
    if (pCode.value.length > 5 || pCode.value.length < 4 || !validateNum(pCode.value)) {
        pCode.classList.add('invalid');
        spcodeError.innerHTML = 'Must be between 4 and 5 characters long and only numbers';
        return false;
    }
    return true;
}

function focusPCode() {
    if (pCode.classList.contains('invalid')) {
        pCode.classList.remove('invalid');
        spcodeError.innerHTML = '&nbsp;';
    }
}

pCode.addEventListener('blur', validatePCode);
pCode.addEventListener('focus', focusPCode);

function validateEMail() {
    if (!eMail.value.match(emailRegex)) {
        eMail.classList.add('invalid');
        semailError.innerHTML = 'Please enter a valid Email';
        return false;
    }
    return true;
}

function focusEMail() {
    if (eMail.classList.contains('invalid')) {
        eMail.classList.remove('invalid');
        semailError.innerHTML = '&nbsp;'
    }
}

eMail.addEventListener('blur', validateEMail);
eMail.addEventListener('focus', focusEMail);

function validatePass() {
    if ((pass.value.length < 9) || !validateIntStr(pass.value || !validateAlphaNum(pass.value) )) {
        pass.classList.add('invalid');
        spassError.innerHTML = 'Must be at least 8 characters long and alphanumeric';
        return false;
    }
    return true;
}

function focusPass() {
    if (pass.classList.contains('invalid')) {
        pass.classList.remove('invalid');
        spassError.innerHTML = '&nbsp;'
    }
}

pass.addEventListener('blur', validatePass);
pass.addEventListener('focus', focusPass);

function validateRPass() {
    if ((rPass.value.length < 9) || !validateIntStr(rPass.value)
        || rPass.value != pass.value || !validateAlphaNum(rPass.value)) {
        rPass.classList.add('invalid');
        srpassError.innerHTML = 'Must be at least 8 characters long and alphanumeric and the same.';
        return false;
    }
    return true;
}

function focusRPass() {
    if (rPass.classList.contains('invalid')) {
        rPass.classList.remove('invalid');
        srpassError.innerHTML = '&nbsp;'
    }
}

rPass.addEventListener('blur', validateRPass);
rPass.addEventListener('focus', focusRPass);

function submitFunc(e) {
    e.preventDefault();
    var fNameA = validateFName();
    var lNameA = validateLName();
    var idA = validateId();
    var bDateA = validateBDate();
    var pNumberA = validatePNumber();
    var adressA = validateAdress();
    var cityA = validateCity();
    var pCodeA = validatePCode();
    var eMailA = validateEMail();
    var passA = validatePass();
    var rPassA = validateRPass();
    var alertA = "";

    if (fNameA && lNameA && idA && bDateA && pNumberA && adressA &&
        cityA && pCodeA && eMailA && passA && rPassA) {
        var bdate1 = new Date(bDate.value),
            mm = bdate1.getMonth() + 1,
            dd = bdate1.getDate(),
            aaaa = bdate1.getFullYear();
        mm = (mm < 10 ? '0' : '') + mm;
        dd = (dd < 10 ? '0' : '') + dd;
        var newDate = mm + '/' + dd + '/' + aaaa;
        var url = 'https://api-rest-server.vercel.app/signup?' +
            'name=' + fName.value +
            '&lastName=' + lName.value +
            '&dni=' + id.value +
            '&dob=' + newDate +
            '&phone=' + pNumber.value +
            '&address=' + adress.value +
            '&city=' + city.value +
            '&zip=' + pCode.value +
            '&email=' + eMail.value +
            '&password=' + pass.value;
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                if (!data.success) {
                    throw new Error(data.msg);
                }
                localStorage.setItem('user', JSON.stringify(data.data));
                alert(data.msg);
                alert('Successful Sign-Up:\n' +
                    'First Name: ' + data.data.name +
                    '\nLast Name: ' + data.data.lastName +
                    '\nID: ' + data.data.dni +
                    '\nBith Date: ' + data.data.dob +
                    '\nPhone Number: ' + data.data.phone +
                    '\nAdress: ' + data.data.address +
                    '\nCity: ' + data.data.city +
                    '\nPostal Code: ' + data.data.zip +
                    '\nE-Mail: ' + data.data.email +
                    '\nPassword: ' + data.data.password);
            })
            .catch(function (error) {
                alert('Could not perform request\n' + error);

            });
    }
    else {
        if (!fNameA) {
            alertA = alertA + 'Invalid First Name.\n'
        }
        if (!lNameA) {
            alertA = alertA + 'Invalid Last Name.\n'
        }
        if (!idA) {
            alertA = alertA + 'Invalid Id.\n'
        }
        if (!bDateA) {
            alertA = alertA + 'Invalid Birth Date.\n'
        }
        if (!pNumberA) {
            alertA = alertA + 'Invalid Phone Number.\n'
        }
        if (!adressA) {
            alertA = alertA + 'Invalid Adress.\n'
        }
        if (!cityA) {
            alertA = alertA + 'Invalid City.\n'
        }
        if (!pCodeA) {
            alertA = alertA + 'Invalid Postal Code.\n'
        }
        if (!eMailA) {
            alertA = alertA + 'Invalid Email.\n'
        }
        if (!passA) {
            alertA = alertA + 'Invalid Password.\n'
        }
        if (!rPassA) {
            alertA = alertA + 'Invalid Repeat Password.\n'
        }
        alert (alertA);
    }
}

form.addEventListener('submit', submitFunc);