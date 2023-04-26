window.onload = function () {
    var
        i = 0,
        emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
        letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        numbers = "0123456789",
        form = document.getElementById('sign-input'),
        fName = document.getElementById('sfname'),
        lName = document.getElementById('slname'),
        id = document.getElementById('sid'),
        bDate = document.getElementById('sbdate'),
        pNumber = document.getElementById('spnumber'),
        adress = document.getElementById('sadress'),
        city = document.getElementById('scity'),
        pCode = document.getElementById('spcode'),
        eMail = document.getElementById('semail'),
        pass = document.getElementById('spass'),
        Rpass = document.getElementById('srpass');

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

    fName.addEventListener('blur', validateFName);
    fName.addEventListener('focus', focusFName);

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

    lName.addEventListener('blur', validateLName);
    lName.addEventListener('focus', focusLName);

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

    id.addEventListener('blur', validateId);
    id.addEventListener('focus', focusId);

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

    bDate.addEventListener('blur', validateBDate);
    bDate.addEventListener('focus', focusBDate);

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

    pNumber.addEventListener('blur', validatePNumber);
    pNumber.addEventListener('focus', focusPNumber);

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

    adress.addEventListener('blur', validateAdress);
    adress.addEventListener('focus', focusAdress);

    function validateAdress() {
        if (adress.value.length < 5 || adress.value[0] == " " || adress.value[adress.value.length - 1] == " "
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

    city.addEventListener('blur', validateCity);
    city.addEventListener('focus', focusCity);

    function validateCity() {
        if (city.value.length < 4 || !validateAlphaNumSpace(city.value) || city.value[0] == " " || city.value[city.value.length - 1] == " ") {
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

    pCode.addEventListener('blur', validatePCode);
    pCode.addEventListener('focus', focusPCode);

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

    eMail.addEventListener('blur', validateEMail);
    eMail.addEventListener('focus', focusEMail);

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
    pass.addEventListener('blur', validatePass);
    pass.addEventListener('focus', focusPass);

    function validatePass() {
        if ((pass.value.length < 9) || validateAlphaNum(pass.value) || !validateIntStr(pass.value)) {
            pass.classList.add('invalid');
            spassError.innerHTML = 'Must be at least 8 characters long, letters, numbers and special characters';
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

    Rpass.addEventListener('blur', validateRPass);
    Rpass.addEventListener('focus', focusRPass);

    function validateRPass() {
        if ((Rpass.value.length < 9) || validateAlphaNum(pass.value) || !validateIntStr(Rpass.value)
            || Rpass.value != pass.value) {
            Rpass.classList.add('invalid');
            srpassError.innerHTML = 'Must be at least 8 characters long, letters, numbers and special characters';
            return false;
        }
        return true;
    }

    function focusRPass() {
        if (Rpass.classList.contains('invalid')) {
            Rpass.classList.remove('invalid');
            srpassError.innerHTML = '&nbsp;'
        }
    }

    form.addEventListener('submit', submitFunc);

    function submitFunc(e) {
        e.preventDefault();
        var
            fNameA = validateFName(),
            lNameA = validateLName(),
            idA = validateId(),
            bDateA = validateBDate(),
            pNumberA = validatePNumber(),
            adressA = validateAdress(),
            cityA = validateCity(),
            pCodeA = validatePCode(),
            eMailA = validateEMail(),
            passA = validatePass(),
            RpassA = validateRPass();
        if (fNameA && lNameA && idA && bDateA && pNumberA && adressA &&
            cityA && pCodeA && eMailA && passA && RpassA) {
            alert('First Name: ' + fName.value +
                '\nLast Name: ' + lName.value +
                '\nID: ' + id.value +
                '\nBith Date: ' + bDate.value +
                '\nPhone Number: ' + pNumber.value +
                '\nAdress: ' + adress.value +
                '\nCity: ' + city.value +
                '\nPostal Code: ' + pCode.value +
                '\nE-Mail: ' + eMail.value +
                '\nPassword: ' + pass.value +
                '\nRepeat Password: ' + Rpass.value);
        }
        if (!fNameA) {
            alert('Invalid First Name');
        }
        if (!lNameA) {
            alert('Invalid Last Name');
        }
        if (!idA) {
            alert('Invalid Id');
        }
        if (!bDateA) {
            alert('Invalid Birth Date');
        }
        if (!pNumberA) {
            alert('Invalid Phone Number');
        }
        if (!adressA) {
            alert('Invalid Adress');
        }
        if (!cityA) {
            alert('Invalid City');
        }
        if (!pCodeA) {
            alert('Invalid Postal Code');
        }
        if (!eMailA) {
            alert('Invalid Email');
        }
        if (!passA) {
            alert('Invalid Password');
        }
        if (!RpassA) {
            alert('Invalid Repeat Password');
        }
    }
}