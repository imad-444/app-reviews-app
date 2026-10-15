let btn = document.getElementById("login");
let show = document.getElementById("alertee");

function foundUser() {
  let username = document.getElementById("name").value.toLowerCase();
  let email = document.getElementById("email").value.toLowerCase();
  let pass = document.getElementById("password").value;
  
  let users = JSON.parse(localStorage.getItem("listeUsers")) || [];
  if (username!=""&&email!=""&&pass!=""){
    if (username.length<6){
      show.innerText = "enter a long username > 6";
    }
    else if (pass.length<6){
      show.innerText = "enter a long pass > 6";
    }
    else {
      let userFound = users.find(item=>{
        return item.email === email;
      })
      if (userFound){
        show.innerText = "login...";
        window.location.href = "dashbord.html";
      }
      else{
        show.innerText = "password incorrect";
      }
    }
  }
  else {
    show.innerText = "enter your fucking information please";
  }
}

btn.addEventListener("click",function(e){
  e.preventDefault();
  foundUser();
})
