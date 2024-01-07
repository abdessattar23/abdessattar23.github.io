AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
};
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  };
};
function post(){
var name = document.querySelector('#name').value;
var email = document.querySelector('#email').value;
var message = document.querySelector('#message').value;
fetch("https://formsubmit.co/ajax/elyagoubiabdessattar@gmail.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        name: name,
        email: email,
        message: message
    })
})
    .then(response => success())
    .catch(error => error());
};function success(){
  document.querySelector('.hh1').innerText = 'Success';
document.querySelector('.hh1').style.color = 'springgreen';
document.querySelector('#pp').innerText = 'Message sent successfully. Thank you for leaving the message.';
modal.style.display='block';
};function error(){
  document.querySelector('.hh1').innerText = 'Failed';
document.querySelector('.hh1').style.color = 'red';
document.querySelector('.pp').innerText = 'Failed to send the message. Please try again...';
modal.style.display='block';
}
document.querySelector('button[type="submit"]').setAttribute('onclick', 'post()')
