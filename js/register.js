let User = function (fName, lName, email, password){
    this.fName = fName
    this.lName = lName
    this.email = email
    this.password = password
}

$(document).ready(function () {
    function showError(errorMsg){
        let mainBox = $(".mainBox")

        mainBox.find("h4").remove()

        let errorMessage = document.createElement("h4")
        errorMessage.className = "errorText"

        errorMessage.append(errorMsg)
        mainBox.find("h1").after(errorMessage)
    }

    function isEmail(email) {
        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    function validateRegister(submittedUser) {
        let b_fname = submittedUser.fName === ""
        let b_lname = submittedUser.lName === ""
        let b_email = submittedUser.email === "" || !(isEmail(submittedUser.email))
        let b_password = submittedUser.password === ""

        let b_total = b_fname + b_lname + b_email + b_password

        if(b_total > 1){
            showError("Multiple input fields are blank/unset!")
            return false
        }

        if(b_fname){
            showError("First name is left blank/unset!")
            return false
        }

        if(b_lname){
            showError("Last name is left blank/unset!")
            return false
        }

        if(b_email){
            showError("Email Address is left blank/unset/invalid!")
            return false
        }

        if(b_password){
            showError("Password is left blank/unset!")
            return false
        }
        showError("")
        return true
    }

    $(".submitBtn").click(function(e) {
        e.preventDefault();

        let submittedUser = new User($("#fName").val(), $("#lName").val(), $("#email").val(), $("#password").val())

        if(validateRegister(submittedUser)){
            $(".loginForm").submit()
        }

    })


})
