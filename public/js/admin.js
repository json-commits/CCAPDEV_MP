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

    $.get("/add", {CMP: company, TML: terminal, DST: destination, SCHD: schedule, PRC: price})

    $("#company").val('');
    $("#terminal").val('');
    $("#destination").val('');
    $("#schedule").val('');
    $("#price").val('');
}
