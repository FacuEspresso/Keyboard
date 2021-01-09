window.addEventListener("load", () => {
    const padSounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");

    const keySounds = document.querySelectorAll(".keysSound");
    const keys = document.querySelectorAll(".keys div");

    const padKeyboard = [49, 50, 51, 52, 53, 54, 55, 56];
    const keyKeyboard = [65 ,81 ,83 ,87 ,68 ,70 ,84 ,71 ,89 ,72 ,85 ,74 ,75 ,79 ,76 ,80 ,192 ,222 ,187 ,191 ,90 ,88 ,67, 86];
    
    document.addEventListener("keydown", e => {
        if(e.repeat) return;
        const k = e.keyCode;
        const padI = padKeyboard.indexOf(k);

        pads.forEach(() => {
            padSounds[padI].play();    
            padSounds[padI].currentTime = 0;
        })
    })

    document.addEventListener("keydown", e => {
        if(e.repeat) return;
        const k = e.keyCode;
        const keyI = keyKeyboard.indexOf(k);
        
        keys.forEach(() => {
            keySounds[keyI].play();    
            keySounds[keyI].currentTime = 0;
        })
    })
})

