function removeAlert() {
  document.getElementById("alert_notif").remove();
}

$(document).ready(function () {
  $(".dropdown").click(function () {
    // console.log("click");
    // this == the link that was clicked

    if ($(this).text() == "+ SEE PACKAGE CONTENTS") {
      $(this).text("- HIDE PACKAGE CONTENTS");
    } else {
      $(this).text("+ SEE PACKAGE CONTENTS");
    }

    // closest searches parent elements until it finds what you want it to find
    // in this case we want it to find the parent w/ class "card"
    var parent = $(this).closest(".collapse");
    var content = parent.find(".accordian-body");
    // slide toggle is just like a show/hide w/ animation
    content.slideToggle(100);
  });
});
