// --- Loading Animation ---
window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    setTimeout(() => { loader.style.display = "none"; }, 2500); 
});

// --- F12 & Inspect Prevention ---
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', (e) => {
    if (e.keyCode === 123 || 
       (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) || 
       (e.ctrlKey && e.keyCode === 85)) {
        e.preventDefault();
        return false;
    }
});

// --- Status & Clock ---
function updateStatusAndTime() {
    const phTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Manila" }));
    const hour = phTime.getHours();

    document.getElementById('clock').textContent = "PHT: " + phTime.toLocaleTimeString();

    const statusElement = document.getElementById('status-indicator');
    if (hour >= 7 && hour < 22) {
        statusElement.textContent = "● Online";
        statusElement.className = "is-online";
    } else {
        statusElement.textContent = "● Offline";
        statusElement.className = "";
        statusElement.style.color = "#6b7280";
    }
}
setInterval(updateStatusAndTime, 1000);
updateStatusAndTime();