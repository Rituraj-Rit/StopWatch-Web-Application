let timer;
let isRunning = false;
let seconds = 0;

const display = document.getElementById('display');
const lapList = document.getElementById('lapList');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');

startBtn.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            display.textContent = formatTime(seconds);
        }, 1000);
    }
});

stopBtn.addEventListener('click', () => {
    isRunning = false;
    clearInterval(timer);
});

resetBtn.addEventListener('click', () => {
    isRunning = false;
    clearInterval(timer);
    seconds = 0;
    display.textContent = '00:00:00';
    lapList.innerHTML = ''; // Clear lap list
});

lapBtn.addEventListener('click', () => {
    if (isRunning) {
        const lapTime = formatTime(seconds);
        const lapItem = document.createElement('div');
        lapItem.classList.add('lap');
        lapItem.textContent = `Lap: ${lapTime}`;
        lapList.appendChild(lapItem);
    }
});

function formatTime(totalSeconds) {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const secs = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
}

