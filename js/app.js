document.addEventListener("DOMContentLoaded", () => {
    for (let i = 1; i <= 30; i++) {
        document.getElementById(`btn-${i}`).addEventListener("click", () => {
            handleButtonClick(i);
        });
    }
});

function handleButtonClick(buttonNumber) {
    switch (buttonNumber) {
        case 1:
            alert("Button 1 clicked!");
            break;
        case 2:
            console.log("Button 2 clicked!");
            break;
        case 3:
            document.body.style.backgroundColor = "lightblue";
            break;
        case 4:
            document.body.style.backgroundColor = "lightgreen";
            break;
        case 5:
            document.getElementById('btn-5').innerText = "Clicked!";
            break;
        case 6:
            document.getElementById('btn-6').style.fontSize = "20px";
            break;
        case 7:
            document.getElementById('btn-7').style.fontSize = "12px";
            break;
        case 8:
            document.getElementById('btn-8').style.backgroundColor = "red";
            break;
        case 9:
            alert("You found the hidden message!");
            break;
        case 10:
            console.log("Button 10 clicked!");
            break;
        case 11:
            document.body.style.backgroundColor = "yellow";
            break;
        case 12:
            document.body.style.backgroundColor = "orange";
            break;
        case 13:
            document.getElementById('btn-13').innerText = "Lucky 13!";
            break;
        case 14:
            document.getElementById('btn-14').style.fontSize = "25px";
            break;
        case 15:
            document.getElementById('btn-15').style.fontSize = "10px";
            break;
        case 16:
            document.getElementById('btn-16').style.backgroundColor = "blue";
            break;
        case 17:
            alert("Button 17 clicked!");
            break;
        case 18:
            console.log("Button 18 clicked!");
            break;
        case 19:
            document.body.style.backgroundColor = "purple";
            break;
        case 20:
            document.body.style.backgroundColor = "pink";
            break;
        case 21:
            document.getElementById('btn-21').innerText = "Clicked!";
            break;
        case 22:
            document.getElementById('btn-22').style.fontSize = "22px";
            break;
        case 23:
            document.getElementById('btn-23').style.fontSize = "14px";
            break;
        case 24:
            document.getElementById('btn-24').style.backgroundColor = "green";
            break;
        case 25:
            alert("Button 25 clicked!");
            break;
        case 26:
            console.log("Button 26 clicked!");
            break;
        case 27:
            document.body.style.backgroundColor = "cyan";
            break;
        case 28:
            document.body.style.backgroundColor = "magenta";
            break;
        case 29:
            document.getElementById('btn-29').innerText = "Almost there!";
            break;
        case 30:
            document.getElementById('btn-30').style.fontSize = "30px";
            break;
        default:
            console.log("Unknown button clicked");
    }
}
