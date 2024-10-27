// Variables
const allInputs = document.querySelectorAll('.main__input');

// Functions
const addEventListeners = () => {
    for (let input of allInputs) {
        input.addEventListener('keydown', (event) => {
            console.log(event.key);
        });
    };
};
// Event-listeners
addEventListeners();
