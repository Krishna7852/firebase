(function () {




  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAmpMIMS8LRio8-XEGBxKIOlH5MZ0faClM",
    authDomain: "sampleapp-95cdd.firebaseapp.com",
    databaseURL: "https://sampleapp-95cdd.firebaseio.com",
    storageBucket: "sampleapp-95cdd.appspot.com",
    messagingSenderId: "390134456000"
  };
  firebase.initializeApp(config);
  // get elements
  const txtEmail=document.getElementById('txtEmail');
  const password = document.getElementById('pswrd');
  const btnLogin = document.getElementById('button');
  const btnSignUp = document.getElementById('buttonUp');


  btnLogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = password.value;
    const auth = firebase.auth();
console.log(email,pass);
    // sign in
    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e =>alert(e.message));
    promise.then(e =>alert("sign in successfully"));
  });


  btnSignUp.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = password.value;
    const auth = firebase.auth();

    // // sign up
    const promise = auth.createUserWithEmailAndPassword(email,pass);
    promise.catch(e =>console.log(e.message));

    // anather syntax to signup
//     firebase.auth().createUserWithEmailAndPassword(email, pass)
//     .catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   if (errorCode == 'auth/weak-password') {
//     alert('The password is too weak.');
//   } else {
//     alert(errorMessage);
//   }
//   console.log(error);
// });
  });

  // add real time listener
  firebase.auth().onAuthStateChanged(firebaseUser =>{
    if (firebaseUser) {
      console.log(firebaseUser);
    }else {
      console.log('not loged in');
    }
  })
}())
