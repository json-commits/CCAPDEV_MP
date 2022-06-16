

function validateInput(){

    let form = document.getElementById('submit');

    form.addEventListener('click', preventRefresh);

    function preventRefresh(){
        preventDefault();
    }


    let userInput = document.getElementById('destination').value;
    let errorMessage = document.getElementById('errorMessage');

    



    if(userInput != ""){
        errorMessage.innerHTML = "Search bar is filled.";
    }
    else{
        errorMessage.innerHTML = "Invalid/Missing input.";
    }
	
	return false;

}