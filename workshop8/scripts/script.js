// დავალება 1


const image = document.getElementById('image');
    const increaseBtn = document.getElementById('increase-btn');
    const decreaseBtn = document.getElementById('decrease-btn');

    increaseBtn.addEventListener('click', () => {
        const currentWidth = image.offsetWidth;
        const newWidth = currentWidth * 1.2;
        image.style.width = newWidth + 'px';
    });

    decreaseBtn.addEventListener('click', () => {
        const currentWidth = image.offsetWidth;
        const newWidth = currentWidth * 0.8; 
        image.style.width = newWidth + 'px';
    });



    // ========================================== //

    // დავალება 2

    const redBtn = document.getElementById('red-btn');
    const blueBtn = document.getElementById('blue-btn');
    const greenBtn = document.getElementById('green-btn');

    redBtn.addEventListener('click', () => {
        redBtn.style.color = 'red';
        blueBtn.style.color = 'black';
        greenBtn.style.color = 'black';
    });

    blueBtn.addEventListener('click', () => {
        redBtn.style.color = 'black';
        blueBtn.style.color = 'blue';
        greenBtn.style.color = 'black';
    });

    greenBtn.addEventListener('click', () => {
        redBtn.style.color = 'black';
        blueBtn.style.color = 'black';
        greenBtn.style.color = 'green';
    });


    // ================================================//

    // დავალება 3


    let currentState = localStorage.getItem('currentState') || "none";

function buttonClickHandler() {
    let menuItems = document.querySelector(".menuItems");
    if (currentState === "none") {
        menuItems.style.display = "block";
        currentState = "block";
    } else if (currentState === "block") {
        menuItems.style.display = "none";
        currentState = "none";
    }
    
    localStorage.setItem('currentState', currentState);
}