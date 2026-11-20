// Tasty Bites - JavaScript

// ----- Cart (Menu page) -----
var cartCount = 0;

function addToCart(itemName) {
  cartCount = cartCount + 1;
  document.getElementById("cart-count").innerText = cartCount;
  alert(itemName + " added to cart!");
}

// ----- Contact form validation -----
function checkForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var msg = document.getElementById("msg");

  if (name === "" || email === "" || message === "") {
    msg.style.color = "red";
    msg.innerText = "Please fill all the fields!";
    return false;
  }

  if (email.indexOf("@") === -1) {
    msg.style.color = "red";
    msg.innerText = "Please enter a valid email!";
    return false;
  }

  msg.style.color = "green";
  msg.innerText = "Thank you " + name + ", your message has been sent!";
  document.getElementById("contact-form").reset();
  return false; // page reload nahi hona chahiye
}
