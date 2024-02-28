// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDT-2ChEXWlZjgemYKSFEpOAKTkmhrIHao",
    authDomain: "lets-chat-app-f2756.firebaseapp.com",
    databaseURL: "https://lets-chat-app-f2756-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-f2756",
    storageBucket: "lets-chat-app-f2756.appspot.com",
    messagingSenderId: "226096292011",
    appId: "1:226096292011:web:a0b3da827111b76568d7ee"
  };
//initialize firedatabase
firebase.initializeApp(firebaseConfig)  

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firbase.database().ref("/").child(user_name).update((
      purpose: "ADD MY NAME"
    ))
}

var firebaseConfig = {
  apiKey: "AIzaSyADzBedRFaGs2TziYsh48TKP5JeZPGPhXk",
  authDomain: "kwitter-26544.firebaseapp.com",
  databaseURL: "https://kwitter-26544-default-rtdb.firebaseio.com",
  projectId: "kwitter-26544",
  storageBucket: "kwitter-26544.appspot.com",
  messagingSenderId: "355121423764",
  appId: "1:355121423764:web:84d387587b9b6cf8051b81",
  measurementId: "G-F8XQ4CXWJS"
};

// Initialize Firebase
  firbase.initializeApp(firebaseConfig);

        user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom()
  {
        room_name = document.getElementById("room_name").value;
        firbase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });

              localStorage.setItem("room_name", room_name);

              window.location = "Kwitter_page.HTML";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
   console.log("Room_name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
  document.getElementById("output").innerHTML +=row;
  });
});

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
        window.location = "Kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
        window.location = "Kwitter.html";
}
