var emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var mail = document.getElementById('lmail');
var pass = document.getElementById('lpass');
var form = document.getElementById('log-input');

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

function validateIntStr(str) {
    var hasLetter = false;
    var hasNumber = false;
    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        if (isLetter(char)) {
            hasLetter = true;
        } else if (isNumber(char)) {
            hasNumber = true;
        }
    }
    return (hasLetter && hasNumber);
}

function validateMail() {
    if (!mail.value.match(emailRegex)) {
        mail.classList.add('invalid');
        lEmailError.innerHTML = 'Please enter a valid Email';
        return false;
    }
    return true;
}

function focusMail() {
    if (mail.classList.contains('invalid')) {
        mail.classList.remove('invalid');
        lEmailError.innerHTML = '&nbsp;'
    }
}

mail.addEventListener('blur', validateMail);
mail.addEventListener('focus', focusMail);

function validatePass() {
    if ((pass.value.length < 9) || !validateIntStr(pass.value)) {
        pass.classList.add('invalid');
        lPassError.innerHTML = 'Must be at least 8 characters long, letters, numbers and special characters';
        return false;
    }
    return true;
}

function focusPass() {
    if (pass.classList.contains('invalid')) {
        pass.classList.remove('invalid');
        lPassError.innerHTML = '&nbsp;'
    }
}
pass.addEventListener('blur', validatePass);
pass.addEventListener('focus', focusPass);

function submitFunc(e) {
    e.preventDefault();
    var mailA = validateMail();
    var passA = validatePass();
    if (mailA && passA) {
        var url = `https://api-rest-server.vercel.app/login?email=${mail.value}&password=${pass.value}`;
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                if (!data.success) {
                    throw new Error(data.msg);
                }
                alert('Successful Login: ' + data.msg);
            })
            .catch(function (error) {
                alert(error);

            });
   }
    if (!mailA) {
        alert('Invalid email');
    }
    if (!passA) {
        alert('Invalid password');
    }
}

form.addEventListener('submit', submitFunc);