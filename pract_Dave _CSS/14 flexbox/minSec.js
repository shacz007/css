// convert the given value to minute:seconds
let num = 45;
let minutes = Math.floor(num / 60);
let seconds = num % 60;
console.log(minutes + ':' + (seconds < 10 ? '0' : '') + seconds);