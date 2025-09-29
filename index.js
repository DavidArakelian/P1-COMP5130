const date = document.getElementById("date");

function typeOutDateAndTime(dateAndTime) {
  date.textContent = "";
  for (let i = 0; i < dateAndTime.length; i++) {
    setTimeout(() => {
      date.textContent += dateAndTime.charAt(i);
    }, i * 100);
  }
}

function displayTime() {
  const time = new Date();
  let hour = time.getHours();
  let fullDateAndTimeString = "";

  console.log(fullDateAndTimeString);
  const dayAsString = time.toLocaleString([], {
    weekday: "long",
    month: "long",
    day: "2-digit",
    year: "numeric",
  });

  const timeAsString = time.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  if (hour >= 0 && hour < 12) {
    return (
      "Good morning today is " + dayAsString + " and it is " + timeAsString
    );
  } else if (hour >= 12 && hour < 18) {
    return (
      "Good afternoon today is " + dayAsString + " and it is " + timeAsString
    );
  } else if (hour >= 18 && hour < 24) {
    return (
      "Good evening today is " + dayAsString + " and it is " + timeAsString
    );
  }
}

typeOutDateAndTime(displayTime());

setTimeout(() => {
  setInterval(() => {
    date.textContent = displayTime();
  }, 1000);
}, 7000);
