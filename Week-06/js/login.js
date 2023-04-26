window.onload = function () {
    var
        emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
        letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        numbers = "0123456789",
        mail = document.getElementById('lmail'),
        pass = document.getElementById('lpass'),
        form = document.getElementById('log-input');

    function isNumber(char) {
        return (numbers.indexOf(char) !== -1);
    }

    function isLetter(char) {
        return (letters.indexOf(char) !== -1);
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

    function validateAlphaNum(str) {
        for (var i = 0; i < str.length; i++) {
            var char = str.charAt(i);
            if (!(isLetter(char) || isNumber(char))) {
                return false;
            }
        }
        return true;
    }

    mail.addEventListener('blur', validateMail);
    mail.addEventListener('focus', focusMail);

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

    pass.addEventListener('blur', validatePass);
    pass.addEventListener('focus', focusPass);

    function validatePass() {
        if ((pass.value.length < 9) || validateAlphaNum(pass.value) || !validateIntStr(pass.value)) {
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

    form.addEventListener('submit', submitFunc);

    function submitFunc(e) {
        e.preventDefault();
        var mailA = validateMail(), passA = validatePass();
        if (mailA && passA) {
            alert('Mail: ' + mail.value + '\nPassword: ' + pass.value);
        }
        if (!mailA) {
            alert('Invalid email');
        }
        if (!passA) {
            alert('Invalid password');
        }
    }
}