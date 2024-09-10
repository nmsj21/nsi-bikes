function show_question() {
    document.getElementById('lang-box').style.display = 'flex';
}
function show_links() {
    document.getElementById('menu-links').style.display = 'flex';
    document.getElementById('menu-link-close').style.display = 'flex';
    document.getElementById('menu-link-bar').style.display = 'none';
    document.getElementById('top-bar').style.width = '150px';
}

function hide_links() {
    document.getElementById('menu-links').style.display = 'none';
    document.getElementById('menu-link-close').style.display = 'none';
    document.getElementById('menu-link-bar').style.display = 'flex';
}