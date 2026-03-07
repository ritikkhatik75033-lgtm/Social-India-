// Telegram Login Function
function onTelegramAuth(user) {
  // Send user info to your backend
  fetch("https://celebrated-gratitude-production.up.railway.app/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  })
  .then(response => response.json())
  .then(data => {
    if(data.user) {
      alert("Welcome " + data.user.first_name + "!");
      // Redirect to feed page after successful login
      window.location.href = "feed.html";
    } else {
      alert("Login failed. Please try again!");
    }
  })
  .catch(err => {
    console.error("Error during login:", err);
    alert("Something went wrong. Check console for details.");
  });
}

// Fetch Feed Function
function fetchFeed() {
  fetch("https://celebrated-gratitude-production.up.railway.app/getusers")
  .then(response => response.json())
  .then(data => {
    let html = "";
    for (let id in data) {
      html += `<p>⭕ ${data[id].first_name}</p>`;
    }
    document.getElementById("feed").innerHTML = html;
  })
  .catch(err => {
    console.error("Error fetching feed:", err);
    alert("Unable to load feed. Please try again later.");
  });
}
