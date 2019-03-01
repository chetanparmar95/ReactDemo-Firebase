import React from 'react';

class Validation {
    //Check empty TextInput
    emptyTextInput(txtInput) {
        return (txtInput == null || txtInput.length <= 0);
    }

    //Email Validation
    isValidEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Check Password length greater than minimum
    passwordLength(password, min) {
        return password.length >= min;

    }

    //Check if password is same
    isSamePassword(currentPassword, newPassword) {
        return currentPassword === newPassword;
    }

    validateSignUpForm({email, emailError, password, passwordError, confirmPassword, confirmPasswordError }, callback){
        if(this.emptyTextInput(email)){
            callback({emailError: 'Email can not be empty'});
            return false;
        }else if(!this.isValidEmail(email)){
            callback({emailError: 'Please enter valid email'})
            return false;
        }

        if(this.emptyTextInput(password)){
            callback({passwordError: 'Password can not be empty'});
            return false;
        }else if(!this.passwordLength(password,6)){
            callback({passwordError: 'Password length should be minimum 6 character'})
            return false;
        }

        if(this.emptyTextInput(confirmPassword)){
            callback({confirmPasswordError: 'Confirm Password can not be empty'});
            return false;
        }else if(!this.passwordLength(confirmPassword,6)){
            callback({confirmPasswordError: 'Password length should be minimum 6 character'})
            return false;
        }else if(!this.isSamePassword(password,confirmPassword)){
            callback({confirmPasswordError: 'Password Mismatched'})
            return false;
        }

        return true;
    }

    validateLoginForm({email,password}, callback){
        if(this.emptyTextInput(email)){
            callback({emailError: 'Email can not be empty'});
            return false;
        }else if(!this.isValidEmail(email)){
            callback({emailError: 'Please enter valid email'})
            return false;
        }else{
            callback({emailError: null})
        }

        if(this.emptyTextInput(password)){
            callback({passwordError: 'Password can not be empty'});
            return false;
        }else{
            callback({passwordError: null})
        }

        return true;
    }

}

module.exports = new Validation();