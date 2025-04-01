
const save=()=>{
       let name = document.querySelector('.yourName').value
       let password = document.querySelector('.yourpassword').value

       sessionStorage.setItem("curent_user_name",name)
       sessionStorage.setItem("curent_usr_pass",pass)

       body.document.innerHTML=''
       let h1Hello=document.createElement('h1')
      //  h1Hello.innerHTML="welcome `${name}`"
      }