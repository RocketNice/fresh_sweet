let downAfter = document.querySelector('.burger-menu_lines')
function burgerMenu(selectors) {
    let menu = document.querySelector(selectors);
    let button = document.querySelector('.burger-menu_button');
    let links = document.querySelector('.burger-menu_link');
    let overlay = document.querySelector('.burger-menu_overlay');

    button.onclick = (e) => {
        e.preventDefault();
        toggleMenu();
    };

    links.onclick = () => toggleMenu();
    overlay.onclick = () => toggleMenu();

    function toggleMenu() {
        menu.classList.toggle('burger-menu_active');
        downAfter.classList.toggle('active');
        button.classList.toggle('active')

        if (menu.classList.contains('burger-menu_active')) {
            document.querySelectorAll('body').forEach(function (el) {
                el.style.overlow = 'hidden';
            });
        } else {
            document.querySelectorAll('body').forEach(function (el) {
                el.style.overlow = 'visible';
            });
        }
    }
}
burgerMenu('.burger-menu');

function show_hide_password(target) {
    const input = document.getElementById('replace_pass')
    if (input.getAttribute('type') == 'password') {
        target.classList.add('view');
        input.setAttribute('type', 'text');
    } else {
        target.classList.remove('view');
        input.setAttribute('type', 'password');
    }
    return false;
}

let email_input = document.querySelector('.email_input');
let password_input = document.querySelector('.password_input');

email_input.oninput = function () {
    email_input.style.background = '#151515'
    email_input.style.color = 'white'
};
password_input.oninput = function () {
    password_input.style.background = '#151515'
    password_input.style.color = 'white'
};

let error_log_pass_container = document.querySelector('.error_log_pass_container');

function Formdata(data) {
    if (data.yearconst != null && data.yearconst.value.length == 0) {
        error_log_pass_container.style.display = 'block'
        return false;
    }
}
