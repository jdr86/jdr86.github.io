if (Function('/*@cc_on return document.documentMode===10@*/')()) {
  // alert('IE 10');
} else {
  // alert('Not IE 10');
}
function callForm(x) {
  switch (x) {
    case 1:
      document.getElementById("form1").classList.remove("hidden");
      document.getElementById("form2").classList.add("hidden");
      document.getElementById("verify").classList.add("hidden");
      document.getElementById("form4").classList.add("hidden");
      document.getElementById("circle1").classList.add("circle-active");
      document.getElementById("circle2").classList.remove("circle-active");
      document.getElementById("circle3").classList.remove("circle-active");
      document.getElementById("circle4").classList.remove("circle-active");

      break;
    case 2:
      document.getElementById("form2").classList.remove("hidden");
      document.getElementById("form1").classList.add("hidden");
      document.getElementById("verify").classList.add("hidden");
      document.getElementById("form4").classList.add("hidden");
      document.getElementById("circle2").classList.add("circle-active");
      document.getElementById("circle1").classList.remove("circle-active");
      document.getElementById("circle3").classList.remove("circle-active");
      document.getElementById("circle4").classList.remove("circle-active");
      break;
    case 3:
      document.getElementById("verify").classList.remove("hidden");
      document.getElementById("form1").classList.add("hidden");
      document.getElementById("form4").classList.add("hidden");
      document.getElementById("circle3").classList.add("circle-active");
      document.getElementById("circle1").classList.remove("circle-active");
      document.getElementById("circle2").classList.remove("circle-active");
      document.getElementById("circle4").classList.remove("circle-active");
      break;
    case 4:
      document.getElementById("form4").classList.remove("hidden");
      document.getElementById("form1").classList.add("hidden");
      document.getElementById("form2").classList.add("hidden");
      document.getElementById("verify").classList.add("hidden");
      document.getElementById("circle4").classList.add("circle-active");
      document.getElementById("circle1").classList.remove("circle-active");
      document.getElementById("circle2").classList.remove("circle-active");
      document.getElementById("circle3").classList.remove("circle-active");
      break;
    default:
  }
}
function showTabContent(x) {
  switch (x) {
    case 1:
      document.getElementById("tabContent1").classList.remove("hidden");
      document.getElementById("tabContent2").classList.add("hidden");
      document.getElementById("tabContent3").classList.add("hidden");
      document.getElementById("tabContent4").classList.add("hidden");
      document.getElementById("box1").classList.add("box-active");
      document.getElementById("box2").classList.remove("box-active");
      document.getElementById("box3").classList.remove("box-active");
      document.getElementById("box4").classList.remove("box-active");
      break;
    case 2:
      document.getElementById("tabContent2").classList.remove("hidden");
      document.getElementById("tabContent1").classList.add("hidden");
      document.getElementById("tabContent3").classList.add("hidden");
      document.getElementById("tabContent4").classList.add("hidden");
      document.getElementById("box2").classList.add("box-active");
      document.getElementById("box1").classList.remove("box-active");
      document.getElementById("box3").classList.remove("box-active");
      document.getElementById("box4").classList.remove("box-active");
      break;
    case 3:
      document.getElementById("tabContent3").classList.remove("hidden");
      document.getElementById("tabContent1").classList.add("hidden");
      document.getElementById("tabContent2").classList.add("hidden");
      document.getElementById("tabContent4").classList.add("hidden");
      document.getElementById("box3").classList.add("box-active");
      document.getElementById("box1").classList.remove("box-active");
      document.getElementById("box2").classList.remove("box-active");
      document.getElementById("box4").classList.remove("box-active");
      break;
    case 4:
      document.getElementById("tabContent4").classList.remove("hidden");
      document.getElementById("tabContent2").classList.add("hidden");
      document.getElementById("tabContent3").classList.add("hidden");
      document.getElementById("tabContent1").classList.add("hidden");
      document.getElementById("box4").classList.add("box-active");
      document.getElementById("box2").classList.remove("box-active");
      document.getElementById("box3").classList.remove("box-active");
      document.getElementById("box1").classList.remove("box-active");
      break;
    default:
  }
}
