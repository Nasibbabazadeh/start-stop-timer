const timerEl = document.getElementById('timer')
const startButton = document.getElementById('start')
const stopButton = document.getElementById('stop')
const resetButton = document.getElementById('reset')
let [hour, minute, second, millisecond] = [0, 0, 0, 0]
let int = null
startButton.addEventListener('click', () => {
    if (int !== null) {
        clearInterval(int)
    }
    int = setInterval(setTimer, 10)
})
stopButton.addEventListener('click', () => {
    clearInterval(int)
})
resetButton.addEventListener('click', () => {
    clearInterval(int)
    ;[hour, minute, second, millisecond] = [0, 0, 0, 0]
    timerEl.innerHTML = '00:00:00:000'
})

const setTimer = () => {
    millisecond += 10
    if (millisecond === 1000) {
        millisecond = 0
        second++
        if (second === 60) {
            second = 0
            minute++
            if (minute === 60) {
                minute = 0
                hour++
            }
        }
    }
    let h = hour < 10 ? `0${hour}` : hour
    let m = minute < 10 ? `0${minute}` : minute
    let s = second < 10 ? `0${second}` : second
    let ml =
        millisecond < 10
            ? `00${millisecond}`
            : millisecond < 100
            ? `0${millisecond}`
            : millisecond

    timerEl.innerHTML = `${h}:${m}:${s}:${ml}`
}
