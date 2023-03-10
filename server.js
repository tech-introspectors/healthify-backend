const app = require("./app");

const PORT = 8000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
