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

function quality_info() {
    document.getElementById('cr-info-box').style.display = 'flex';
    document.getElementById('qa1').style.display = 'flex';
    document.getElementById('qa2').style.display = 'none';
    document.getElementById('qat1').textContent = 'Infoa Laadusta';
}

function quality_info_hide() {
    document.getElementById('cr-info-box').style.display = 'none';
    location.reload();
}

function what_id() {
    document.getElementById('cr-info-box').style.display = 'flex';
    document.getElementById('qa2').style.display = 'flex';
    document.getElementById('qa1').style.display = 'none';
}

function quality_info_eng() {
    document.getElementById('cr-info-box').style.display = 'flex';
    document.getElementById('qa2').style.display = 'flex';
    document.getElementById('qa1').style.display = 'none';
    // document.getElementById('qat1').textContent = 'INFO ABOUT QUALITY';

}

function what_id_eng() {
    document.getElementById('cr-info-box').style.display = 'flex';
    document.getElementById('qa2').style.display = 'flex';
    document.getElementById('qa1').style.display = 'none';
    document.getElementById('qat1').textContent = 'What ID';
}