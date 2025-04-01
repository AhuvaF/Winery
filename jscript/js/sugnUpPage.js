const save=()=>{
    let hello = document.createElement("h1")

    let name=document.querySelector("#txtname").value
    let mail=document.querySelector("#txtmail").value
    let pass=document.querySelector("#txtpass").value
  
    sessionStorage.setItem("curent_user_name",name)
    sessionStorage.setItem("curent_usr_mail",mail)
    sessionStorage.setItem("curent_usr_pass",pass)

    hello.style.fontsize='1000%';
    hello.style.direction='center'
    hello.style.paddingRight='40%'
    hello.innerHTML="hello "+ name
    document.body.append(hello)
    setTimeout(()=>{
      window.location='./1main.html'
    },4000)
}  

const logIn=()=>{
    let hello = document.createElement("h1")
    let name=document.querySelector("#txtname").value
    let pass=document.querySelector("#txtpass").value

  //חילוץ מידע מהסשן
  let ne=sessionStorage.getItem("curent_user_name")
  let p=sessionStorage.getItem("curent_usr_pass")

  hello.style.fontsize='1000%';
  hello.style.direction='center'
  hello.style.paddingRight='40%'

  if(ne==name && p==pass)
{
   
    hello.innerHTML="welcome back "+ name
    document.body.append(hello)
    setTimeout(() => {
      window.location = "1main.html";
  }, 4000);
}
  else{

    hello.innerHTML="בבקשה הירשם "
    document.body.append(hello)
    setTimeout(() => {
      window.location = "user.html";
  }, 4000);

  }
}
  