/**
 * Spring Break 2026 Logic
 */
function updateSpringBreakTimer() {
    const startDate = new Date("March 16, 2026 00:00:00").getTime();
    const endDate = new Date("March 20, 2026 23:59:59").getTime();
    const now = new Date().getTime();
    
    const displayElement = document.getElementById("countdown-timer");
    const statusElement = document.getElementById("status-message");

    if (!displayElement || !statusElement) return;

    if (now < startDate) {
        const diff = startDate - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        displayElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
        statusElement.innerHTML = "Until the break begins!";
    } else if (now >= startDate && now <= endDate) {
        displayElement.innerHTML = "VACATION MODE";
        statusElement.innerHTML = "Enjoy your Spring Break!";
    } else {
        displayElement.innerHTML = "EXPIRED";
        statusElement.innerHTML = "See you next year!";
    }
}

// Initialize
setInterval(updateSpringBreakTimer, 1000);
updateSpringBreakTimer();
