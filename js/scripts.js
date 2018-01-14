$(document).ready(function() {
  $("form#yourAge").submit(function(event) {
    event.preventDefault();

    var age = $("#enterAge").val();
    var age = parseInt(age);
    console.log(age);
    if (age < 18) {
      $("#eighteenToTwenty").hide();
      $("#twentyOneToFifty").hide();
      $("#fiftyPlus").hide();
      $("#underEighteen").show();
      console.log(age);
    } else if (age >= 18 && age < 21) {
      $("#twentyOneToFifty").hide();
      $("#fiftyPlus").hide();
      $("#underEighteen").hide();
      $("#eighteenToTwenty").show();
    } else if (age >= 21 && age < 50) {
      $("#underEighteen").hide();
      $("#eighteenToTwenty").hide();
      $("#fiftyPlus").hide();
      $("#twentyOneToFifty").show();
    } else {
      $("#twentyOneToFifty").hide();
      $("#eighteenToTwenty").hide();
      $("#underEighteen").hide();
      $("#fiftyPlus").show();
    }
  });
});
