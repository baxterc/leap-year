
// business logic
var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

// user interface logic
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);

    year.forEach(function(num) {
      if (num === 1 || num === 2 || num === 3 || num === 4 || num === 5 || num === 6 || num === 7 || num === 8 || num === 9 || num === 0) {
        if (!result) {             // same as writing if (result === false)
          $(".not").text("not");
          alert(typeof(year));
        } else if (result){
          $(".not").text("");
          alert(typeof(year));
        });
        $("#result").show();
      } else {
        alert("Invalid Input!");
    )};
  });
});
