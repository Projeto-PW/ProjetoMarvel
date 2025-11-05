document.getElementById('login').addEventListener('click', async (event) => {
    event.preventDefault();

    const { value: formValues } = await Swal.fire({
        title: "Seu Login",
        html: `
            <h3>Email</h3>
            <input id="email" type="email" class="swal2-input">
            <h3>Senha</h3>
            <input id="password" type="password" class="swal2-input">
        `,
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById("email").value,
                document.getElementById("password").value
            ];
        }
    });
    if (formValues[0] == "admin@admin.com" && formValues[1] == "admin") {
        Swal.fire({
            title: "Login realizado com sucesso!",
            icon: "success"
        }).then(() => {
            window.location.href = "./src/pages/listaDeTarefas.html";
        });
    }
    else {
        Swal.fire({
            title: "Erro no login!",
            text: "Email ou senha incorretos.",
            icon: "error"
        });
        console.log(formValues);
    }
});