(function () {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAmpMIMS8LRio8-XEGBxKIOlH5MZ0faClM",
    authDomain: "sampleapp-95cdd.firebaseapp.com",
    databaseURL: "https://sampleapp-95cdd.firebaseio.com",
    storageBucket: "sampleapp-95cdd.appspot.com",
    messagingSenderId: "390134456000"
  };
  firebase.initializeApp(config);

  // get element
// const preObject = document.getElementById("object");

// create reference
const dbRefObject = firebase.database().ref().child('object');

dbRefObject.on('value',function (snap) {
  // const len =
  const newPost = snap.val().users.full_name;
  const newPost1 = snap.val().users.date_of_birth;
// const newPost = snap.val().users;
  // for (var i = 0; i < newPost.length; i++) {
    // console.log(array[i]);
  // }

  console.log(newPost,newPost1);
});

}())
