function sendEmail() {
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let jobtitle = document.getElementById("jobtitle").value;
    let jobgame = document.getElementById("jobgame").value;
    let message = document.getElementById("message").value;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "user-email@gmail.com",
        Password: "password-email",
        To: "evandeilsonjose@gmail.com",
        From: email,
        Subject: jobtitle,
        Body: "Nome: " + firstname + " " + lastname + 
              "<br>Email: " + email + " Telefone: " + phone + 
              "<br>Interesse: " + jobtitle + " Simulador: " + jobgame + 
              "<br>Mensagem: " + message
    }).then(function (response) {
        if (response === "OK") {
            alert("Email enviado com sucesso.");
        } else {
            throw new Error("Erro ao enviar email.");
        }
    });

}

// Adicione esse código após a função sendEmail()
document.getElementById("btnEnviar").addEventListener("click", sendEmail);