import { useRef, useState } from "react";

function Login(){
    let myref = useRef(null);
    let [warn,setWarn] = useState("");
    return (
    <>
    <form class='w-50 m-auto my-5 p-3 py-5 border rounded-3 border-dark' ref={myref} onSubmit={ (e)=>{
        e.preventDefault();
        let username = e.target[0].value;
        let password = e.target[1].value;
         fetch("http://localhost:9999/user/"+username).then(res=>res.json()).then(async (status)=>{
            console.log(status);
            
        if(status.status=="failed"){
            await fetch("http://localhost:9999/user",{method:'POST',body: new URLSearchParams({username:username,password:password})});
            window.localStorage.setItem('user',username);
            window.location.replace("./home");
        }
        else if(status.password == password){
            window.localStorage.setItem('user',username);
            window.location.replace("./home");
        }
        else{
            setWarn("Enter valid data...");
        }
    });
    }} >
    <img class="mb-4 mx-auto" src={"https://static.vecteezy.com/system/resources/previews/018/930/234/original/walmart-transparent-logo-free-png.png"} alt="" width="100" height="100" />
    <h1 class="h3 mb-3 fw-normal fw-bold mx-2"> sign in/up</h1>

    <div class="form-floating m-2">
      <input type="text" class="form-control" id="floatingInput" placeholder="Username" pattern="[a-zA-Z0-9,@#$%^&]{3,}" required />
      <label for="floatingInput">Username</label>
      <div class="valid-feedback"> valid username ✔️</div>
      <div class="invalid-feedback"> invalid username ❌</div>
    </div>
    <div class="form-floating m-2">
      <input type="password" class="form-control" id="floatingPassword" pattern="[a-zA-Z0-9,@_$]{8,}" placeholder="Password" required />
      <label for="floatingPassword">Password</label>
      <div class="valid-feedback"> valid email ✔️</div>
      <div class="invalid-feedback"> invalid email ❌</div>
    </div>
    <button class="btn w-50 btn-primary py-2 fw-bold" type="submit" onClick={()=>{
        myref.current.classList.add("was-validated");
        
    }}> <i class="fa-solid fa-arrow-right-to-bracket"></i> get in </button>
    <h3 class="fw-bold text-warning">{warn}</h3>
  </form>
    </>
    );
}
export default Login;