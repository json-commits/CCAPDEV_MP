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

document.addEventListener("DOMContentLoaded", function (event) {

    const routeBox = document.querySelector('.routeBox');
    routeBox.addEventListener('click', function (e) {
        if (e.target instanceof Element && e.target.matches('.btnRemove')) {
            console.log("clicked remove");
            // your code here
            let routeBoxElement = e.path[4]
            console.log(routeBoxElement);
            let textCollection = routeBoxElement.getElementsByClassName('text')
            console.log(textCollection);

            let company = textCollection[0].textContent
            let terminal = textCollection[1].textContent
            let destination = textCollection[2].textContent.replace('Destination: ', '')
            let schedule = textCollection[3].textContent
            let price = Number(textCollection[4].textContent.replace('P', ''))

            console.log({company: company, terminal: terminal, destination: destination, schedule: schedule, price: price})
            $.get('/delete', {company: company, terminal: terminal, destination: destination, schedule: schedule, price: price})

            // routeBox.remove()
        }
    }, true);

});