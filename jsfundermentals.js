

// Timer codes.........................................

function digitalTimer() {
  var date = new Date();
  // console.log(date);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var am_pm = "AM";

  if (hours > 12) {
    hours = hours - 12;
    am_pm = "PM";
  }
  if (hours == 0) {
    hours = 12;
    am_pm = "AM";
  }
  var hour = hours < 10 ? "0" + hours : hours;
  var minute = minutes < 10 ? "0" + minutes : minutes;
  var second = seconds < 10 ? "0" + seconds : seconds;
  var currentTime = hour + ":" + minute + ":" + second + am_pm;
  document.getElementById("digital").innerHTML = currentTime;
  // console.log(currentTime);
}
setInterval(digitalTimer, 1000);
// digitalTimer();
