// functions/login.js

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  const { username, password } = JSON.parse(event.body);

  // Simulación de usuario
  const fakeUser = {
    username: "admin",
    password: "1234"
  };

  if (username === fakeUser.username && password === fakeUser.password) {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Login exitoso" }),
    };
  } else {
    return {
      statusCode: 401,
      body: JSON.stringify({ success: false, message: "Credenciales incorrectas" }),
    };
  }
};
