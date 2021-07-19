var firebaseConfig = {
    apiKey: "AIzaSyAgakA7lr3ZtmzIkXppgkZM7qxLVzF-DuE",
    authDomain: "project94-15ca3.firebaseapp.com",
    projectId: "project94-15ca3",
    storageBucket: "project94-15ca3.appspot.com",
    messagingSenderId: "848800565218",
    appId: "1:848800565218:web:48345a6c6eec375c90dbbb",
    measurementId: "G-RSBVD5WK94"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();







var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome" + user_name +"!";

function addRoom() {
       room_name  = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({purpose:"adding a room name"});
       localStorage.setItem("room_name",room_name);
       window.location="chat_page.html";


          
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("roomname -"+ Room_names);
      row="<div class='room_name' id='+Room_names+' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="chat_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}


