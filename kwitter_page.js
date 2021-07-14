var firebaseConfig = {
      apiKey: "AIzaSyBQpgiJtX0zZ0Us19pq8pvdX7Lm175BVVs",
      authDomain: "kwitter-28ff7.firebaseapp.com",
      databaseURL: "https://kwitter-28ff7-default-rtdb.firebaseio.com",
      projectId: "kwitter-28ff7",
      storageBucket: "kwitter-28ff7.appspot.com",
      messagingSenderId: "192694534189",
      appId: "1:192694534189:web:8d6f82bfd5fea7f2e278a4"
    };

    
  
    firebase.initializeApp(firebaseConfig)

    user_name = localStorage.getItem("user_name") ;
    room_name - localStorage.getItem("room_name") ;
    function logout() {

localStorage.removeItem("user_name") ;
localStorage.removeItem("room_name") ;
      window.location = "kwitter.html"
      }

      function send() 
      { msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({ 
       name:user_name, message:msg, like:0 }); 
       document.getElementById("msg").value = ""; }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
