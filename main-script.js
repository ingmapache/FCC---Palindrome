const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const results = document.getElementById('results');

let normalizedStringArray;
let isPalindrome = true;

const palindromeChecker = () => {
    if (textInput.value === "") {
        alert('Please input a value');
    } else {
        stringNormalizer();
        for (let i = 0; i < normalizedStringArray.length / 2; i++) {
            if (normalizedStringArray[i] !== normalizedStringArray[length - 1 -i]) {
                isPalindrome = false;
                break;
            }
        }
        console.log(normalizedStringArray);
        console.log(isPalindrome);
    }


};

const stringNormalizer = () => {
    normalizedStringArray = textInput.value.toString().toLowerCase().replace(/\W/g, '').split('');
}

checkBtn.addEventListener('click', palindromeChecker);