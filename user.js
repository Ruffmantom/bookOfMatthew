$(document).ready(()=>{
    var user = {
        id: "23kjhr2h",
        verses: [],
        mode: false,
      };
      var activeUser;
      //  console.log(user)
      // functions for setting local storage with darkmode
      function createUser() {
        try {
          if (localStorage.getItem("bibleUser") === null) {
            localStorage.setItem("bibleUser", JSON.stringify(user));
            activeUser = user;
            console.log("created user");
          } else {
            let t = localStorage.getItem("bibleUser");
            activeUser = JSON.parse(t);
            console.log("user found!");
          }
        } catch (error) {
          console.log(error);
        }
      }
      function updateUser() {
        localStorage.setItem("bibleUser", JSON.stringify(activeUser));
      }
      // when app loads it creates user
      createUser();
    // end of doc ready
})