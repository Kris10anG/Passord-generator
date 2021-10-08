
function generatePassword() {

    if (desiredPasswordLength <= 0 || desiredPasswordLength > 20) {
        alert('Velg tyve eller under!');
        return; // controll flow statement
    }
    passwordResult = "";
    for (let i = 0; i < desiredPasswordLength / 4; i++) {
        var randomLowerCase = lowercaseChecked ? lowerCase[Math.floor(Math.random() * lowerCase.length)] : "";
        var randomUpperCase = uppercaseChecked ? upperCase[Math.floor(Math.random() * upperCase.length)] : "";
        var randomNumbers = numbersChecked ? numbers[Math.floor(Math.random() * numbers.length)] : "";
        var randomSigns = symbolsChecked ? signs[Math.floor(Math.random() * signs.length)] : "";

        passwordResult += randomLowerCase + randomSigns + randomNumbers + randomUpperCase;
    }

    uppercaseChecked = false
    lowercaseChecked = false
    numbersChecked = false
    symbolsChecked = false
    show();
}
