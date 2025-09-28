const title = document.getElementById("title");

let tempTitle = title.textContent;

title.textContent = "";

function typeOutTitle() {
  for (let i = 0; i < tempTitle.length; i++) {
    setTimeout(() => {
      title.textContent += tempTitle.charAt(i);
    }, i * 100);
  }
}

typeOutTitle();