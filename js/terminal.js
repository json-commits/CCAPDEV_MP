function confirmBuy() {
  let confirmBuy = confirm("Proceed buying this ticket?")
  if (confirmBuy) {
    alert("Ticket successfully bought!")
  } else {
    return;
  }
}

function cancelTickets(){
  let ticketCancel = confirm("Proceed cancelling these ticket(s)?")
  if (ticketCancel) {
    alert("Ticket successfully cancelled!")
  } else {
    return;
  }
}