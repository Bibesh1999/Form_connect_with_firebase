
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBC0G8CfMtX3Paba_dMuZswhqlBxF2dLdQ",
    authDomain: "form-90445.firebaseapp.com",
    databaseURL: "https://form-90445.firebaseio.com",
    projectId: "form-90445",
    storageBucket: "form-90445.appspot.com",
    messagingSenderId: "783514027823"
  };
  firebase.initializeApp(config);

  // Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var fname = getInputVal('fname');
  var lname = getInputVal('lname');
  var pwd = getInputVal('pwd');
  var email = getInputVal('email');
  var phone = getInputVal('phone');

  // Save message
  saveMessage(fname,lname,pwd,email,phone);

// Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fname,lname,pwd,email,phone){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
   fname:fname,
   lname:lname,
   pwd:pwd,
   email:email,
   phone:phone
  });
}