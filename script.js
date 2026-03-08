// 1. Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXEKf_9iJbH-rBAGY3pFbMTzbYpXOICIY",
  authDomain: "social-india-8e720.firebaseapp.com",
  databaseURL: "https://social-india-8e720-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "social-india-8e720",
  storageBucket: "social-india-8e720.firebasestorage.app",
  messagingSenderId: "550357112046",
  appId: "1:550357112046:web:0338532d8f2f8e1501cfff",
  measurementId: "G-WJQVDJJ33M"
};

// 2. Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// 3. Telegram Login Function
function onTelegramAuth(user) {
  // User ka data Firebase mein save karna
  const userRef = database.ref('users/' + user.id);
  userRef.set({
    username: user.first_name,
    photo: user.photo_url,
    auth_date: user.auth_date
  }).then(() => {
    console.log("User saved to Firebase successfully!");
    // Login ke baad feed page par bhejna
    window.location.href = "feed.html";
  }).catch((error) => {
    alert("Error saving data: " + error.message);
  });
}

// 4. Check if user is already logged in (Simple Logic)
console.log("Social India Backend connected via Firebase!");
