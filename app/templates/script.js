const timerElement = document.getElementById("timer");
    let seconds = 180; // 3 minutos

    function updateTimer() {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        timerElement.textContent = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;

        if (seconds === 0) {
            clearInterval(interval);
            timerElement.textContent = "Tempo esgotado!";
        } else {
            seconds--;
        }
    }

    const interval = setInterval(updateTimer, 1000);