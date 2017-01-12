$(document).ready(function() {

  $("form#dating").submit(function(event) {

    $(".celebrity").hide();
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    if(age) {
      if(age > 60 && gender === "female") {
        $("#jennifer").show();
      } else if(age > 60 && gender === "male") {
        $("#arnold").show();
      } else if (age <= 60 && age > 40 && gender === "female") {
        $("#sharon").show();
      } else if(age <= 60 && age > 40 && gender === "male") {
        $("#rock").show();
      } else if (age <= 40 && age > 20 && gender === "female") {
        $("#gabrielle").show();
      } else if (age <= 40 && age > 20 && gender === "male") {
        $("#mark").show();
      } else if (age <= 20 && gender === "female") {
        $("#selena").show();
      } else if (age <= 20 && gender === "male") {
        $("#justin").show();
      };
    } else {
      alert("Enter your age!")
    };
    event.preventDefault();
  });


});
