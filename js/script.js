document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  fetch("https://university-backend.onrender.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      alert("Login successful");
    } else {
      alert("Invalid credentials");
    }
  });
});
