// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
//
// The maximum time never exceeds 359999 (99:59:59)


function humanReadable (seconds) {
    let HH = Math.floor(seconds / 3600).toString().padStart(2,"00");
    let MM = Math.floor((seconds % 3600) / 60).toString().padStart(2,"00");
    let SS = Math.floor((seconds % 3600) % 60).toString().padStart(2,"00");
    return `${HH}:${MM}:${SS}`;
}


console.log(humanReadable(0),'00:00:00');
console.log(humanReadable(59),'00:00:59');
console.log(humanReadable(60),'00:01:00');
console.log(humanReadable(90),'00:01:30');
console.log(humanReadable(3599),'00:59:59');
console.log(humanReadable(3600),'01:00:00');
console.log(humanReadable(45296),'12:34:56');
console.log(humanReadable(86399),'23:59:59');
console.log(humanReadable(86400),'24:00:00');
console.log(humanReadable(359999),'99:59:59');