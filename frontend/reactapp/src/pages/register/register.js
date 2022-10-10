const register = () => {
    return (
        <form class="signup-form">
        <h1 class="sign-in-header">Sign up</h1>
        <div class="content content-register">
            <div class="inputs-container">
                <div class="input-container">
                    <input type="text" name="name" id="nameInput" class="name-input" placeholder="Enter your name"/>
                    <label for="name">Name</label>
                </div>
                <div class="input-container">
                    <input type="text" name="email" id="emailInput" class="email-input"
                        placeholder="Enter your email address"/>
                    <label for="emailInput">Email address</label>
                </div>
                <div class="input-container">
                    <input type="password" name="password" id="passwordInput" class="password-input"
                        placeholder="Enter your password"/>
                    <label for="passwordInput">Password</label>
                </div>
                <div class="input-container">
                    <input type="password" name="password" id="passwordInput" class="age-input"
                        placeholder="Enter your password"/>
                    <label for="typeInput">Admin, Instructor or Student</label>
                </div>
                <h2 id="response" class="response opacity">.</h2>
            </div>
            <button type="submit" id="authSubmitBtn" class="form-submit">Sign up</button>
            <p class="old-account">Already have an account? <a class="register" href="signin.html">Sign in !</a></p>
        </div>
    </form>

        )
    }
      
        
    export default register;