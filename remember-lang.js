function ask_once_fin() {
    let hide_lang_question = document.getElementById('lang-box').style.visibility = 'hidden';
    localStorage.setItem(hide_lang_question, 'hide-fin');
}

function ask_once_eng() {
    let hide_lang_question_en = document.getElementById('lang-box').style.visibility = 'hidden';
    localStorage.setItem(hide_lang_question_en, 'hide-fin');
}

window.addEventListener('load', localStorage.getItem('hide-fin') || ask_once_fin);


// debugger down
//
function display2() {
    let hide_lang_question = document.getElementById('lang-box').style.visibility = 'visible';
    localStorage.removeItem(hide_lang_question, 'hideit');
}