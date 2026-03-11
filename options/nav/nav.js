// Bottom Navigation Logic for Social India 🔱
function openTab(tabName) {
    console.log("Opening: " + tabName);
    
    if(tabName === 'home') {
        window.location.href = "feed.html";
    } else if(tabName === 'search') {
        // Search logic यहाँ आएगा
        alert("Search Option Coming Soon!");
    } else if(tabName === 'plus') {
        // पोस्ट बनाने का बॉक्स फोकस करें
        document.getElementById('postInput').focus();
    } else if(tabName === 'reels') {
        alert("Reels Feature is Loading...");
    } else if(tabName === 'profile') {
        alert("Ritik Developer Profile loading...");
    }
}
