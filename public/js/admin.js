function addRoute(){
    console.log("addRoute was ran.")
    let company = $("#company").val();
    let terminal = $("#terminal").val();
    let destination = $("#destination").val();
    let schedule = $("#schedule").val();
    let price = $("#price").val();

    if(!isFinite(price)){
        alert("Price is not a valid number!");
        return;
    }

    $.get("/add", {company: company, terminal: terminal, destination: destination, schedule: schedule, price: price})

    $("#company").val('');
    $("#terminal").val('');
    $("#destination").val('');
    $("#schedule").val('');
    $("#price").val('');
}

const routeBox = document.querySelector('#routeBox');
routeBox.addEventListener('click', function (e) {
    if (e.target instanceof Element && e.target.matches('.btnRemove')) {
        // your code here
        let routeBoxElement = e.target.parentElement
        let textCollection = routeBoxElement.getElementsByClassName('text')
        let company = textCollection[0].textContent
        let terminal = textCollection[1].textContent
        let destination = textCollection[2].textContent
        let schedule = textCollection[3].textContent

        $.get('/delete', {company: company, terminal: terminal, destination: destination, schedule: schedule, price: price})

        routeBox.remove()
    }
}, true);