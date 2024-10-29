// Variables
const allInputs = document.querySelectorAll('.main__input');
const box = document.querySelector('.main__box'); 
const copyToClip = document.querySelector('.main__img');

// Paragraph-corner variables
const topLeft = document.querySelector('.main__top-left-value');
const topRight = document.querySelector('.main__top-right-value');
const bottomLeft = document.querySelector('.main__bottom-left-value');
const bottomRight = document.querySelector('.main__bottom-right-value');

// Paragraph variables
const paragraphs = document.querySelectorAll('.main__css');


// Functions
const addEventListeners = () => {
    for (let input of allInputs) {
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {   
                changeCode(input);
                changeCss(input);
                input.value = '';
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

const changeCss = (corner) => {
    if (corner.placeholder === 'top-left') {
        box.style.borderTopLeftRadius = `${corner.value}px`;
    } else if (corner.placeholder === 'top-right') {
        box.style.borderTopRightRadius = `${corner.value}px`;
    } else if (corner.placeholder === 'bottom-left') {
        box.style.borderBottomLeftRadius = `${corner.value}px`;
    } else if (corner.placeholder === 'bottom-right') {
        box.style.borderBottomRightRadius = `${corner.value}px`;
    }
};

const fullParagraph = () => {
    let finalString = '';

    for (let line of paragraphs) {
        finalString += `${line.textContent}\n`;
    }

    return finalString;
};

// Event-listeners
addEventListeners();
copyToClip.addEventListener('click', () => {
    console.log('Works');
});

