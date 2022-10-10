import "./login.css";


const Login = () => {
    return (
        <div class="form">
         <h1 class="sign-in-header">Sign in</h1>
         <div class="content">
            <div class="inputs-container">
                <div class="input-container">
                    <input type="text" name="email" id="usernameInput" class="client-input"
                        placeholder="Enter your username"/>
                    <label for="email">Username</label>
                </div>
                <div class="input-container">
                    <input type="password" name="password" id="passwordInput" class="client-input"
                        placeholder="Enter your password"/>
                    <label for="passwordInput">Password</label>
                </div>
                <h2 id="response" class="response opacity">.</h2>
            </div>
            <button type="submit" id="authSubmitBtn" class="form-submit">Sign in <i
                    class="fa-solid fa-right-to-bracket"></i></button>
         </div>
         <p class="new-account">Don't have an account? <a class="register" href="signup.html">Sign up !</a></p>
         </div>



        )
    }
      
        
    export default Login;