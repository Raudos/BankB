//Variables
var $input = $(".table input");
var $burger = $("#burger");
var $menu = $("#menu");
var $temp, $value;

//Functions
function showMenu() {
  $burger.on("click", function() {
    $("#menu").toggle();
  });
};

function valueSet() {
  $input.on("input", function() {
    $temp = $(this).attr("class");
    $temp = "p." + $temp;
    $value = $(this).val();
    if ($temp == "p.moneyInput") {
      $value += " zł";
    } else {
      if ($value == 1) {
        $value += " rok";
      } else if ($value <= 4) {
        $value += " lata";
      } else if ($value  >= 5) {
        $value += " lat";
      }
    };
    $($temp).text($value);
  });
}


$(document).on("ready", function() {
  valueSet();
  showMenu();
});
