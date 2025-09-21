document.getElementById(login - box).addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let resultado = document.getElementById(resultado);
    resultado.innerHTML = "";

    resultado.innerHTML += "<p><strong>Email:</strong> " + email + "</p>";
    resultado.innerHTML += "<p><strong>Password:</strong> " + password + "</p>";

    form.reset();


    



})