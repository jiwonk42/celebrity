$(document).ready(function() {

  $("form#dating").submit(function(event) {

    $(".celebrity").hide();
    var age = parseInt($("input#age").val());

    if(age) {
      if(age > 60) {
        $("#jennifer").show();
      }
      else if (age <= 60 && age > 40) {
        $("#rock").show();
      }
      else if (age <= 40 && age > 20) {
        $("#gabrielle").show();
      }
      else {
        $("#justin").show();
      };
    } else {
      alert("Enter your age!")
    };
    event.preventDefault();
  });


});
