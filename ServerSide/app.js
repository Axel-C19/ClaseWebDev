const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Configurar EJS como motor de vistas
app.set("view engine", "ejs");

// Middleware para manejar datos de formularios
app.use(bodyParser.urlencoded({ extended: false }));

// Datos de ejemplo
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
];

// Ruta para la página principal
app.get("/", (req, res) => {
  res.render("index", { books: books });
});

// Ruta para manejar el envío del formulario
app.post("/add-book", (req, res) => {
  const newBook = { title: req.body.title, author: req.body.author };
  books.push(newBook);
  res.redirect("/");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
