let body = document.body;
let modeLight = document.getElementById('modeLight');
let modeDark = document.getElementById('modeDark');
let modeSky = document.getElementById('modeSky');
let modeGreen = document.getElementById('modeGreen');
let modeRed = document.getElementById('modeRed');
let info = document.getElementById('info');

// INI VARIABLE UNTUK DARKMODE
let darkCounter = 0;
let darkMaximum = 5;
let darkRemainingleft;

function darkMode() {
    let darkRemainingleft = darkMaximum - darkCounter;
    if (darkRemainingleft == 0) {
        alert('Jatah DarkMode Anda Habis')
       
    }

    darkCounter += 1;
    info.textContent = `DarkMode dipakai ${darkCounter}x, tersisa ${darkRemainingleft}`;
    body.classList.toggle('dark')
}

function lightMode() {
    location.reload();
}

// INI VARIABLE UNTUK SKYMODE
let skyCounter = 0;
let skyMaximum = 5;
let skyRemainingleft;

function skyMode() {
    let skyRemainingleft = skyMaximum - skyCounter;
    if(skyRemainingleft == 0) {
        alert('Jatah SkyMode Anda Habis')
        
    }
    skyCounter += 1;
    info.textContent = `SkyMode dipakai ${skyCounter}x, tersisa ${skyRemainingleft}`;
    body.classList.toggle('sky')
}

//  INI VARIABLE UNTUK GREENMODE
    let greenCounter = 0;
    let greenMaximum = 5;
    let greenRemainingleft;

    function greenMode() {
        let greenRemainingleft = greenMaximum - greenCounter;
        if(greenRemainingleft == 0) {
            alert('Jatah GreenMode Anda Habis');
           
        }

        greenCounter += 1;
        info.textContent = `GreenMode dipakai ${greenCounter}x, tersisa ${greenRemainingleft}`;
        body.classList.toggle('green-mode');
}

// INI VARIABLE UNTUK REDMODE
    let redCounter = 0;
    let redMaximum = 5;
    let redRemainingleft;

    function redMode() {
        let redRemainingleft = redMaximum - redCounter;
        if(redRemainingleft == 0) {
            alert('Jatah RedMode Anda Telah Habis');
        }
        redCounter += 1;
        info.textContent = `RedMode dipakai ${redCounter}x, tersisa ${redRemainingleft}`;
        body.classList.toggle('red-mode');
       
    }


