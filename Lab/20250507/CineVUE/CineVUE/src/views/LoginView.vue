<style>
    #loginContent {
        height: 600px;
        width: auto;
    }

    #loginForm {
        text-align: center;
        background: var(--primary);
        color: var(--white);
        position: absolute;
        top: 65%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px;
        margin: 0px;
        border-radius: 10px;
        box-shadow: 0 3px rgba(0,0,0,0.5);
    }

    #loginForm h1 {
        color: var(--white);
    }

    #loginForm input {
        display: block;
        width: 66%;
        margin-left: 16.5%;
    }

    #loginForm input[type="submit"]{
        background: var(--white);
        color: var(--primary);
        font-weight: bold;
        cursor: pointer;
        padding: 10px;
        border: none;
        border-radius: 5px;
        margin-top: 20px;
    }

    #loginForm input[type="submit"]:hover {
        background: var(--tertiary);
        color: var(--white);
    }
</style>

<template>
    <Header/>
    <div id="loginContent">
        <div id="loginForm">
            <h1>Login</h1>
            <form action="login" method="POST">
                <label for="username">Username</label>
                <input type="text" id="username" name="username">
                <label for="password">Password</label>
                <input type="password" id="password" name="password">
                <input type="submit" value="accedi">
            </form>
        </div>
    </div>
</template>