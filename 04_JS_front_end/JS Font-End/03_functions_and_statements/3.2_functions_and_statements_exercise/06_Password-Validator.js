function passwordValidator(password) {
    let validateLength = (pass) => pass.length >= 6 && pass.length <= 10;
    let validateSymbols = (pass) => /^[a-zA-Z0-9]+$/.test(pass);
    let validateAtLeastTwoDigits = (pass) => /\d.*\d/.test(pass);
    
    if (!validateLength(password)) {
        console.log("Password must be between 6 and 10 characters");
    }
    
    if (!validateSymbols(password)) {
        console.log("Password must consist only of letters and digits");
    }
    
    if (!validateAtLeastTwoDigits(password)) {
        console.log("Password must have at least 2 digits");
    }
    
    if (validateLength(password) && validateSymbols(password) && validateAtLeastTwoDigits(password)) {
        console.log("Password is valid");
    }
}

// passwordValidator("logIn");
// passwordValidator("MyPass123");
// passwordValidator("Pa$s$s");