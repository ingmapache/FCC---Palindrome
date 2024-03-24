const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const results = document.getElementById('result');

let normalizedStringArray;


const palindromeChecker = () => {
    if (textInput.value === "") {
        alert('Please input a value');
    } else {
        stringNormalizer();
        let isPalindrome = true;
        for (let i = 0; i < normalizedStringArray.length / 2; i++) {
            if (normalizedStringArray[i] !== normalizedStringArray[normalizedStringArray.length - 1 - i ]) {
                isPalindrome = false;
                break;
            }
        }
        if (isPalindrome) {
        results.innerHTML = `<p class="resultText"><span class="bold">${textInput.value}</span> is a palindrome.</p>`;
        } else {
         results.innerHTML = `<p class="resultText"><span class="bold">${textInput.value}</span> is not a palindrome.</p>`;
        }
        textInput.value = "";
    }


};

const stringNormalizer = () => {
   normalizedStringArray = textInput.value.toString().toLowerCase().replace(/[\W_]+/g, '').split('');
}

checkBtn.addEventListener('click', palindromeChecker);
textInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      palindromeChecker();
    }
});