const HEART_BODY = "<3";
let numEmails = 0;

class Heart {
  constructor() {
    this.x = this.setX();
    this.y = this.setY();
  }

  setX() {
    return Math.floor(Math.random() * window.innerWidth);
  }

  setY() {
    return Math.floor(Math.random() * window.innerHeight);
  }

  render() {
    const b = document.body;
    const heartElement = document.createElement("div");
    heartElement.innerText = HEART_BODY;
    heartElement.style.position = "fixed";
    heartElement.style.fontSize = "16px";
    heartElement.style.color = "#ffffff";
    heartElement.style.left = this.x.toString() + "px";
    heartElement.style.top = this.y.toString() + "px";
    b.appendChild(heartElement);
    numEmails += 1;
    document.title = "Inbox (" + numEmails.toString() + ")";
  }
}

function createHeart() {
  const h = new Heart();
  h.render();
}

function dismissEmail() {
  const emailContainer = document.getElementById("email-content-container");
  emailContainer.style.display = "none";
  document.title = "Inbox (0)";
}

window.onload = function() {
  const email = document.getElementById("email-content");
  email.addEventListener("click", createHeart);
  const noEmail = document.getElementById("no-email");
  noEmail.addEventListener("click", dismissEmail);
}