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

    isValidMobileNumber(number) {
        var regex = /^[\s()+-]*([0-9][\s()+-]*){5,15}$/;
        if (!(regex.test(number))) {
            return false
        }
        return true
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

    validateForgotPasswordForm({email, emailError,}, callback){
        if(this.emptyTextInput(email)){
            callback({emailError: 'Email can not be empty'});
            return false;
        }else if(!this.isValidEmail(email)){
            callback({emailError: 'Please enter valid email'})
            return false;
        }
        return true;
    }

    validateResetPasswordForm({email, emailError, otp, otpError, password, passwordError, confirmPassword, confirmPasswordError }, callback){
        if(this.emptyTextInput(email)){
            callback({emailError: 'Email can not be empty'});
            return false;
        }else if(!this.isValidEmail(email)){
            callback({emailError: 'Please enter valid email'})
            return false;
        }

        if(this.emptyTextInput(otp)){
            callback({otpError: 'OTP can not be empty'});
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
        }/*else if(!this.passwordLength(confirmPassword,6)){
            callback({confirmPasswordError: 'Password length should be minimum 6 character'})
            return false;
        }*/else if(!this.isSamePassword(password,confirmPassword)){
            callback({confirmPasswordError: 'Password Mismatched'})
            return false;
        }

        return true;
    }

    validatePersonalInfoForm({firstName,lastName,zip}, callback){
        if(this.emptyTextInput(firstName)){
            callback({firstNameError: 'First name can not be empty'});
            return false;
        }else{
            callback({firstNameError: null})
        }

        if(this.emptyTextInput(lastName)){
            callback({lastNameError: 'Last name can not be empty'});
            return false;
        }else{
            callback({lastNameError: null})
        }

        if(this.emptyTextInput(zip)){
            callback({zipError: 'Zip code can not be empty'});
            return false;
        }else{
            callback({zipError: null})
        }


        return true;
    }

    validateInterestData({selectedItems, selectedChurchId}, callback){
        if(selectedItems.length === 0){
            callback({interestError: 'Please select at least one interest'})
            return false
        }else if(selectedChurchId === 0){
            callback({churchError: 'Please select your local church'})
            return false
        }
        return true
    }

    validateContentData({selectedFileName, contentName, selectedSubjectId}, callback){
        if(this.emptyTextInput(selectedFileName)){
            callback({fileError: 'Please select file'})
            return false
        }else{
            callback({fileError: null})
        }

        if(this.emptyTextInput(contentName)){
            callback({contentNameError: 'Please enter name of the content'})
            return false
        }else{
            callback({contentNameError: null})
        }

        if(selectedSubjectId === 0){
            callback({subjectError: 'Please select category'})
            return false
        }else{
            callback({subjectError: null})
        }

        return true
    }
}

module.exports = new Validation();