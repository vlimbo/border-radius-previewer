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
                console.log('Works');
            };
        });
    };
};
// Event-listeners
addEventListeners();
