document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('registration').onsubmit = (e) => {
        e.preventDefault();
        const firstName = e.target[0].value;
        const lastName = e.target[1].value;
        const email = e.target[2].value;
        const password = e.target[3].value;

        if (firstName === "" || firstName.trim() === '') {
            document.getElementsByClassName('form-element')[0].className = 'form-element error';
        } else {
            document.getElementsByClassName('form-element')[0].className = 'form-element';
        }

        if (lastName === "" || lastName.trim() === '') {
            document.getElementsByClassName('form-element')[1].className = 'form-element error';
        } else {
            document.getElementsByClassName('form-element')[1].className = 'form-element';
        }

        if (email === "" || email.trim() === '') {
            document.getElementsByClassName('form-element')[2].className = 'form-element error';
            document.getElementsByClassName('email-error')[0].innerHTML = 'Email Address cannot be empty';
        } else if (!validateEmail(email)) {
            document.getElementsByClassName('form-element')[2].className = 'form-element error';
            document.getElementsByClassName('email-error')[0].innerHTML = 'Looks like this is not an email';
        } else {
            document.getElementsByClassName('form-element')[2].className = 'form-element';
        }

        if (password === "" || password.trim() === '') {
            document.getElementsByClassName('form-element')[3].className = 'form-element error';
        } else {
            document.getElementsByClassName('form-element')[3].className = 'form-element';
        }
    };
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}