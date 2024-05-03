const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minEl = document.getElementById('mins');
const secEl = document.getElementById('secs');

const mybd = '8 Jul 2024';

function countdown() {
	const nxtbd = new Date(mybd);
	const currentDate = new Date();

	const totalSeconds = (nxtbd - currentDate) / 1000;
	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const mins = Math.floor(totalSeconds / 60) % 60;
	const secs = Math.floor(totalSeconds) % 60;

	console.log(days, hours, mins, secs);

	daysEl.innerHTML = days;
	hoursEl.innerHTML = formatTime(hours);
	minEl.innerHTML = formatTime(mins);
	secEl.innerHTML = formatTime(secs);
}

function formatTime(time){
	return time < 10 ? `0${time}` : time;
}
// innitialize function

countdown();

setInterval(countdown, 1000);