import React from 'react';

function Login(){

    const handleSubmit =() =>{
    // check if creds by user are correct
    // Update global state
    }

    return(
        <div>
            <form>
                <input type="email" name="email" required/>
                <input type="password" name="password" required/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;