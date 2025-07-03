function validateLogin() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === "jabespogi" && pass === "amazing") {
    localStorage.setItem("loggedInUser", "Jabez Mendoza");
    window.location.href = "index.html";
    return false;
  } else {
    alert("Invalid credentials");
    return false;
  }
}
