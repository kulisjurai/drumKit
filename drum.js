const sound1 = new Audio();
sound1.src = 'assets/CYCdh_ElecK07-Kick02.wav';

const sound2 = new Audio();
sound2.src = 'assets/CYCdh_ElecK07-Kick02.wav';

const sound3 = new Audio();
sound3.src = 'assets/CYCdh_ElecK07-Kick02.wav';

const sound4 = new Audio();
sound4.src = 'assets/CYCdh_ElecK06-Snr03.wav';

const sound5 = new Audio();
sound5.src = 'assets/CYCdh_K4-Snr05.wav';

const sound6 = new Audio();
sound6.src = 'assets/CYCdh_Kurz07-Snr03.wav';

const sound7 = new Audio();
sound7.src = 'assets/CYCdh_ElecK01-OpHat02.wav';

const sound8 = new Audio();
sound8.src = 'assets/CYCdh_Kurz07-Crash02.wav';

const sound9 = new Audio();
sound9.src = 'assets/CYCdh_Kurz01-Crash01.wav';

window.addEventListener("keydown", changeColorAndPlay, false);


function changeColorAndPlay(key) {
    if (key.keyCode == "97") {
        sound1.play();
        sound1.currentTime = 0;
        document.getElementById("one").style.backgroundColor = 'rgb(221, 186, 30)';

    }
    if (key.keyCode == "98") {
        sound2.play();
        sound2.currentTime = 0;
        document.getElementById("two").style.backgroundColor = 'rgb(221, 186, 30)';
    }
    if (key.keyCode == "99") {
        sound3.play();
        sound3.currentTime = 0;
        document.getElementById("three").style.backgroundColor = 'rgb(221, 186, 30)';
    }
    if (key.keyCode == "100") {
        sound4.play();
        sound4.currentTime = 0;
        document.getElementById("four").style.backgroundColor = 'rgb(221, 186, 30)';
    }
    if (key.keyCode == "101") {
        sound5.play();
        sound5.currentTime = 0;
        document.getElementById("five").style.backgroundColor = 'rgb(221, 186, 30)';
    }
    if (key.keyCode == "102") {
        sound6.play();
        sound6.currentTime = 0;
        document.getElementById("six").style.backgroundColor = 'rgb(221, 186, 30)';
    }
    if (key.keyCode == "103") {
        sound7.play();
        sound7.currentTime = 0;
        document.getElementById("seven").style.backgroundColor = 'rgb(221, 186, 30)';
    }
    if (key.keyCode == "104") {
        sound8.play();
        sound8.currentTime = 0;
        document.getElementById("eight").style.backgroundColor = 'rgb(221, 186, 30)';
    }
    if (key.keyCode == "105") {
        sound9.play();
        sound9.currentTime = 0;
        document.getElementById("nine").style.backgroundColor = 'rgb(221, 186, 30)';
    }
}

window.addEventListener("keyup", backToOriginColor, false);

function backToOriginColor(key) {
    if (key.keyCode == "97") {
        document.getElementById("one").style.backgroundColor = 'rgb(189, 165, 58)';
    }
    if (key.keyCode == "98") {
        document.getElementById("two").style.backgroundColor = 'rgb(189, 165, 58)';
    }
    if (key.keyCode == "99") {
        document.getElementById("three").style.backgroundColor = 'rgb(189, 165, 58)';
    }
    if (key.keyCode == "100") {
        document.getElementById("four").style.backgroundColor = 'rgb(189, 165, 58)';
    }
    if (key.keyCode == "101") {
        document.getElementById("five").style.backgroundColor = 'rgb(189, 165, 58)';
    }
    if (key.keyCode == "102") {
        document.getElementById("six").style.backgroundColor = 'rgb(189, 165, 58)';
    }
    if (key.keyCode == "103") {
        document.getElementById("seven").style.backgroundColor = 'rgb(189, 165, 58)';
    }
    if (key.keyCode == "104") {
        document.getElementById("eight").style.backgroundColor = 'rgb(189, 165, 58)';
    }
    if (key.keyCode == "105") {
        document.getElementById("nine").style.backgroundColor = 'rgb(189, 165, 58)';
    }
}

function hover(e) {
    e.currentTarget.style.backgroundColor = 'rgb(221, 186, 30)';
    if (e.currentTarget == document.getElementById('one')) {
        sound1.currentTime = 0;
    }
    if (e.currentTarget == document.getElementById('two')) {
        sound2.currentTime = 0;
    }
    if (e.currentTarget == document.getElementById('three')) {
        sound3.currentTime = 0;
    }
    if (e.currentTarget == document.getElementById('four')) {
        sound4.currentTime = 0;
    }
    if (e.currentTarget == document.getElementById('five')) {
        sound5.currentTime = 0;
    }
    if (e.currentTarget == document.getElementById('six')) {
        sound6.currentTime = 0;
    }
    if (e.currentTarget == document.getElementById('seven')) {
        sound7.currentTime = 0;
    }
    if (e.currentTarget == document.getElementById('eight')) {
        sound8.currentTime = 0;
    }
    if (e.currentTarget == document.getElementById('nine')) {
        sound9.currentTime = 0;
    }
}

function unHover(e) {
    e.currentTarget.style.backgroundColor = 'rgb(189, 165, 58)';
}