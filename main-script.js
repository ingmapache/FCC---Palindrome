const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const results = document.getElementById('results');

let normalizedStringArray;
let reversedArray;

const palindromeChecker = () => {
    if (textInput.value === "") {
        alert('Please input a value');
    } else {
        stringNormalizer();
        arrayReverser();
        console.log(normalizedStringArray);
        console.log(reversedArray);
    }


};

const stringNormalizer = () => {
    normalizedStringArray = textInput.value.toString().toLowerCase().replace(/\W/g, '').split('');
}

const arrayReverser = () => {
    reversedArray = [...normalizedStringArray].reverse();
}

checkBtn.addEventListener('click', palindromeChecker);