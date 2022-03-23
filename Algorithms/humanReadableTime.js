// Write a function, which takes a non-negative integer (seconds) as input
// and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)

// describe('tests', function() {
//   it('should format correctly', function() {
//     strictEqual(humanReadable(0), '00:00:00', 'humanReadable(0)');
//     strictEqual(humanReadable(59), '00:00:59', 'humanReadable(59)');
//     strictEqual(humanReadable(60), '00:01:00', 'humanReadable(60)');
//     strictEqual(humanReadable(90), '00:01:30', 'humanReadable(90)');
//     strictEqual(humanReadable(3599), '00:59:59', 'humanReadable(3599)');
//     strictEqual(humanReadable(3600), '01:00:00', 'humanReadable(3600)');
//     strictEqual(humanReadable(45296), '12:34:56', 'humanReadable(45296)');
//     strictEqual(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
//     strictEqual(humanReadable(86400), '24:00:00', 'humanReadable(86400)');
//     strictEqual(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
//   });
// });

function humanReadable(sec) {
	if (sec < 0 || sec > 359999) return null;

	if (sec < 60) {
		if (sec.toString().length === 1) return `00:00:0${sec}`;

		return `00:00:${sec}`;
	}

	if (sec < 3600 && sec > 59) {
		let mins = Math.floor(sec / 60).toString();
		let secs = (sec % 60).toString();

		if (secs.length === 1 || mins.length === 1) {
			if (secs.length === 1) secs = `0${secs}`;
			if (mins.length === 1) mins = `0${mins}`;
		}

		return `00:${mins}:${secs}`;
	}

	let hours = Math.floor(sec / 3600).toString();
	let mins = Math.floor((sec % 3600) / 60).toString();
	let secs = Math.floor(sec % 60).toString();

	if (hours.length === 1 || mins.length === 1 || secs.length === 1) {
		if (hours.length === 1) hours = `0${hours}`;
		if (mins.length === 1) mins = `0${mins}`;
		if (secs.length === 1) secs = `0${secs}`;
	}

	return `${hours}:${mins}:${secs}`;
}

console.log(humanReadable(359999));
