window.onload = function () {
    var
        i = 0,
        emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
        letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        numbers = "0123456789",
        form = document.getElementById('contact-form'),
        fName = document.getElementById('fname'),
        lName = document.getElementById('lname'),
        eMail = document.getElementById('email'),
        radio1 = document.getElementById('radio1'),
        radio2 = document.getElementById('radio2'),
        radio3 = document.getElementById('radio3'),
        message = document.getElementById('textarea-contact');

        function isLetter(char) {
            return (letters.indexOf(char) !== -1);
        }

        function isNumber(char) {
            return (numbers.indexOf(char) !== -1);
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

        function validateAlphaNum(str) {
            for (i = 0; i < str.length; i++) {
                var char = str.charAt(i);
                if (!(isLetter(char) || isNumber(char))) {
                    return false;
                }
            }
            return true;
        }

        function validateFName() {
            if (fName.value.length < 4 || !validateLetters(fName.value)) {
                return false;
            }
            return true;
        }

        function validateLName() {
            if (lName.value.length < 4 || !validateLetters(lName.value)) {
                return false;
            }
            return true;
        }

        function validateEMail() {
            if (!eMail.value.match(emailRegex)) {
                return false;
            }
            return true;
        }

        function validateContact() {
            if (radio1.checked) {
                return 'I want to make a query or suggestion';
            } else if (radio2.checked) {
                return 'I want to make a claim';
            } else if (radio3.checked) {
                return 'I want to know the meberships and costs';
            }
            return 0;
        }

        function validateMessage() {
            if (message.value.length < 3 || !validateAlphaNum(message.value)) {
                return false;
            }
            return true;
        }

    form.addEventListener('submit', submitFunc);

    function submitFunc(e) {
        e.preventDefault();
        var
            fNameA = validateFName(),
            lNameA = validateLName(),
            contactA = validateContact(),
            messageA = validateMessage(),
            eMailA = validateEMail();
        if (fNameA && lNameA && contactA != 0 && eMailA && messageA) {
            alert('First Name: ' + fName.value +
                '\nLast Name: ' + lName.value +
                '\nE-Mail: ' + eMail.value +
                '\nReason of contact: ' + contactA +
                '\nMessage: ' + message.value);
        }
        if (!fNameA) {
            alert('Invalid First Name');
        }
        if (!lNameA) {
            alert('Invalid Last Name');
        }
        if (!eMailA) {
            alert('Invalid Email');
        }
        if (!contactA) {
            alert('Invalid Reason of contact');
        }
        if (!messageA) {
            alert('Invalid Message');
        }
    }
}