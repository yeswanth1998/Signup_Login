  function loginButtonClick(){
    var emailId = document.getElementById("emailIdLogin");
    var password = document.getElementById("passwordLogin");
    const promise = auth.signInWithEmailAndPassword(emailId.value,password.value);
    promise.catch(e=> alert(e.message));
    alert("Signed In" + emailId);
  }
  function registerButtonClick(){
    var userId_resiter = document.getElementById("userIdRegister");
    var password_register = document.getElementById("passwordRegister");
    var emailId_register = document.getElementById("emailIdRegister");
    firebase.auth().createUserWithEmailAndPassword(emailId_register.value,password_register.value).catch(function(error){
        var errorMessage = error.message;
        alert(errorMessage);
      });
    alert("Signed Up");

    //We can take the user to another page or home here
  }

  /*
  function signOut(){
      auth.signOut();
      alert("Signed Out");
  }
  */

  /*auth.onAuthStateChanged(function(user){
      if(user){
          //signed in
          var emailId = user.email;
          alert("Signed in as"+ emailId);
      }
      else{
          //no user
          alert("No User Found");
      }
  });*/