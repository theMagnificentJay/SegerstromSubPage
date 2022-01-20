function removeAlert() {
  document.getElementById("alert_notif").remove();
}
function btnOnClick1() {
  var i = document.getElementById("button_series_1");
  if (i.innerHTML == "- HIDE PACKAGE CONTENTS") {
    i.innerHTML = "+ SEE PACKAGE CONTENTS";
  } else {
    i.innerHTML = "- HIDE PACKAGE CONTENTS";
  }
}
function btnOnClick2() {
  var i = document.getElementById("button_series_2");
  if (i.innerHTML == "- HIDE PACKAGE CONTENTS") {
    i.innerHTML = "+ SEE PACKAGE CONTENTS";
  } else {
    i.innerHTML = "- HIDE PACKAGE CONTENTS";
  }
}
function btnOnClick3() {
  var i = document.getElementById("button_series_3");
  if (i.innerHTML == "- HIDE PACKAGE CONTENTS") {
    i.innerHTML = "+ SEE PACKAGE CONTENTS";
  } else {
    i.innerHTML = "- HIDE PACKAGE CONTENTS";
  }
}

$(".dropdown").click(function () {
  // this == the link that was clicked

  // if ($(this).text() == "Show Contents") {
  //   $(this).text("Hide Contents")
  // } else {
  //   $(this).text("Show Contents")
  // }

  $this.text("+ Show Contents")
    ? $this.text("- Hide Contents")
    : $this.text("+ Show Contents");

  // closest searches parent elements until it finds what you want it to find
  // in this case we want it to find the parent w/ class "card"
  var parent = $(this).closest(".card");
  var content = parent.find(".dropdown-content");
  // slide toggle is just like a show/hide w/ animation
  content.slideToggle(100);
});
