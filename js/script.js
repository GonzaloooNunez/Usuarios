let usuarios = document.getElementById("listaUsuarios");

function edadAleatoria(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mostrarUsuarios() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("La solicitud no fue exitosa.");
      }
      return response.json();
    })
    .then((data) => {
      data.forEach((user, index) => {
        let listaUsuarios = document.createElement("li");
        let imagen = document.createElement(`img`);
        let rutaImagen = `./assets/img/${index + 1}.jpeg`;
        imagen.src = rutaImagen;

        const { name, email, phone, company, address } = user;

        let infoUsuario = [
          `<strong>Nombre:</strong> ${name}`,
          `<strong>Edad:</strong> ${edadAleatoria(18, 46)}`,
          `<strong>Correo:</strong> ${email}`,
          `<strong>Telefono:</strong> ${phone}`,
          `<strong>Compañia:</strong> ${company.name}`,
          `<strong>Direccion:</strong> ${address.suite}, ${address.street}, ${address.city}`,
        ];

        let texto = document.createElement("div");
        texto.innerHTML = infoUsuario.join("<br>");
        listaUsuarios.appendChild(texto);
        listaUsuarios.appendChild(imagen);
        usuarios.appendChild(listaUsuarios);
      });
    })
    .catch((error) => {
      console.log(error);
      usuarios.innerText =
        "Error: No se pudo obtener la información de los usuarios.";
    });
}

mostrarUsuarios();
