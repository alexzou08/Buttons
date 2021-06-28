function clickButton() {
  alert('alalala');
}

function clickConfirm() {
  confirm("Press");
  var choice = confirm("Press");
  var txt;
  if (choice) {
    txt = "You pressed OK!";
   } else {
    txt = "Are you sure you want to cancel?";
   }
   alert(txt);
}