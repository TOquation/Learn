const containerE1 = document.querySelector('.container');

const career = ['maths tutor', 'web developer', 'engineer', 'educator']

let careerIndex = 0;
let textIndex = 0;


function updateText() {
    textIndex++
    containerE1.innerHTML = `i am ${career[careerIndex].slice(0, 1) === 'e' ? 'an' : 'a'} ${career[careerIndex].slice(0, textIndex)}`

    if (textIndex === career[careerIndex].length) {
        careerIndex++
        textIndex = 0
    }

    if (careerIndex === career.length) {
        careerIndex = 0
    }
    setTimeout(updateText, 400);
}

updateText()

