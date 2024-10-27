// Variables
const allInputs = document.querySelectorAll('.main__input');

// Corner variables
const topLeft = document.querySelector('.main__top-left-value');
const topRight = document.querySelector('.main__top-right-value');
const bottomLeft = document.querySelector('.main__bottom-left-value');
const bottomRight = document.querySelector('.main__bottom-right-value');


// Functions
const addEventListeners = () => {
    for (let input of allInputs) {
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {   
                changeCode(input);
            };
        });
    };
};

const changeCode = (corner) => {
    if (corner.placeholder === 'top-left') {
        topLeft.textContent = corner.value;
    } else if (corner.placeholder === 'top-right') {
        topRight.textContent = corner.value;
    } else if (corner.placeholder === 'bottom-left') {
        bottomLeft.textContent = corner.value;
    } else if (corner.placeholder === 'bottom-right') {
        bottomRight.textContent = corner.value;
    }
};
// Event-listeners
addEventListeners();
