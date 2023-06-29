import express from "express";
import path from "path";

// Reads the PORT value from the environment variable `PORT`
// If not found, uses the default value of 3030.
const PORT = process.env.PORT || 3030;
const staff = ["Sally", "Bob", "Mike", "Rachel", "Andy", "Greg"];

const app = express();

// Serve all resource files in public/ and subdirectories
app.use(express.static("public"));

// Parse JSON data in request bodies
app.use(express.json());

app.get("/", (request, response) => {
  // Logged in the terminal on the SERVER side
  console.log("Someone wants the root route!");
  // Sent to the client (visible in the browser window)
  response.send("Welcome to our site! 😎");
});

app.get("/about", function (req, res) {
  console.log("serving about-us.html...");

  // Use `path` to help us get the current directory
  const currentDirectory = path.dirname(new URL(import.meta.url).pathname);

  // Send the file to the client
  res.sendFile(path.join(currentDirectory, "/about-us.html"));
});

app.get("/staff", (req, res) => {
  res.json({
    staff: staff, // can shorten to `staff`
  });
});

app.get("/staff/:person", (req, res) => {
  const name = req.params.person;
  if (!staff.includes(name)) {
    res.status(404).json({
      error: "Staff member not found",
    });
  } else {
    res.json({
      name: name,
      description: `${name} is a valued employee here are our company!`,
    });
  }
});

app.get("/contact", function (req, res) {
  // Use `path` to help us get the current directory
  const currentDirectory = path.dirname(new URL(import.meta.url).pathname);

  // Send the file to the client
  res.sendFile(path.join(currentDirectory, "/contact-page.html"));
});

// Note that the SERVER is receiving data; not posting anything!
app.post("/contact", function (req, res) {
  console.log(`We got a message! Somebody wrote: '${req.body.message}'`);
  // Since we expect to get a JSON body, we'll respond
  // in kind with JSON.
  // The client will need to act after receiving our response.
  res.json({
    success: true,
    message: "Thank you for your message!",
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
