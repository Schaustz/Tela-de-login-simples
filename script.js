const loginForm = document.getElementById("login-form")
const loginButton = document.getElementById("login-form-submit")
const loginErrorMsg = document.getElementById("login-error-msg")


loginButton.addEventListener("click", (clicar) => {
    clicar.preventDefault()
    const username = loginForm.username.value
    const password = loginForm.password.value

    if (username === "user" && password === "web_dev") {
        alert("Você logou com sucesso.")
        location.reload()
    } else {
        loginErrorMsg.style.opacity = 1 
    }

})
