// Variables
const textInput = document.getElementById("text-input"),
checkBtn = document.getElementById("check-btn"),
result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
    // 0. Variables
    const cleanText = textInput.value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(),
    wordsArr = [], reversedWordsArr = [];
    let resultText = textInput.value;

    if (textInput.value.length > 36) {
        resultText = textInput.value.slice(0, 36) + "..."
    }
    result.style.display = "flex";

    // 1. No value given
    if (cleanText.length < 1) {
        result.innerText = "Your input is invalid.";
        return;
    }
    
    // 2. Value given
    for (const word of cleanText) {
        wordsArr.push(word);
        reversedWordsArr.unshift(word)
    }
    const isPalindrome = wordsArr.every(word => wordsArr.indexOf(word) === reversedWordsArr.indexOf(word));
    if (isPalindrome) {
        result.innerText = `${resultText} is a Palindrome.`;
    } else {
        result.innerText = `${resultText} is not a Palindrome.`;
    }

    // 3. Clean input
    textInput.value = "";
})