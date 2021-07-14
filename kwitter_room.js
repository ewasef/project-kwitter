var firebaseConfig = {
  apiKey: "AIzaSyBQpgiJtX0zZ0Us19pq8pvdX7Lm175BVVs",
  authDomain: "kwitter-28ff7.firebaseapp.com",
  databaseURL: "https://kwitter-28ff7-default-rtdb.firebaseio.com",
  projectId: "kwitter-28ff7",
  storageBucket: "kwitter-28ff7.appspot.com",
  messagingSenderId: "192694534189",
  appId: "1:192694534189:web:8d6f82bfd5fea7f2e278a4"
};

firebase.initializeApp(firebaseConfig);
 

user_name=localStorage.getItem("user_name") ;

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!" ;

function addRoom()
{
  room_name = document.getElementById("room_name").value ;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  }) ;

  localStorage.setItem("room_name " , room_name) ;
  window.location = "kwitter_page.html" ;
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names) ;
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div> <hr>" ;
       document.getElementById("output").innerHTML+=row ;
      });
    });
  }
getData();

function redirectToRoomName(name)
{
   console.log(name) ;
   localStorage.setItem("room_name" , name) ;
   window.location= "kwitter_page.html" ;

}

function logout() {


localStorage.removeItem("user_name") ;
localStorage.removeItem("room_name") ;
window.location = "kwitter.html"
}
