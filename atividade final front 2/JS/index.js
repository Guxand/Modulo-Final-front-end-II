const formNewUser = document.getElementById('formNewUser');
let listUsers = JSON.parse(localStorage.getItem('listUsers')) ?? [];

const modalCadastro = new bootstrap.Modal('#modalNewUser')

formNewUser.addEventListener('submit', (ev) => {
    ev.preventDefault();

    if (!formNewUser.checkValidity()) {
        formNewUser.classList.add('was-validated');
        return
    }
    const userName = document.getElementById('nameUser').value;
    const userEmail = document.getElementById('mailUser').value;
    const userPassword = document.getElementById('passwordUser').value;
    const exist = listUsers.some((user) => user.userEmail === userEmail);

    if (exist) {
        alert('Já existe um usuario cadastrado com este e-mail.')
        return
    }

    const newUser = {
        id: new Date().getTime(),
        userName,
        userEmail,
        userPassword,
    }

    listUsers.push(newUser)
    alert(`Bem vindo ${userName}`)
    localStorage.setItem('listUsers', JSON.stringify(listUsers));
    formNewUser.reset()
    modalCadastro.hide()
    formNewUser.classList.remove('was-validated');


    console.log(listUsers)
})

const loginUser = document.getElementById('userLogin');

loginUser.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const userSave = JSON.parse(localStorage.getItem("listUsers") ?? "[]");

    const usuarioCadastrado = userSave.find((usuario) => usuario.userEmail === loginUser.emailLogin.value && usuario.userPassword === loginUser.passwordLogin.value);
    if (!usuarioCadastrado) {
        alert("Verifique seu e-mail ou senha.");
        form.reset();
        return;
    }
    alert(`Bem vindo ${usuarioCadastrado.userName}`)

    localStorage.setItem("usuarioAtivo", JSON.stringify(usuarioCadastrado));

    window.location.href = "./recados.html";


})
