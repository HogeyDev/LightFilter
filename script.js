const image = document.querySelector('img');

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// canvas.width = 1;
// canvas.height = 1;

function blue(strength, r, g, b) {
	for (let i = 0; i <= canvas.width; i+=1) {
		for (let j = 0; j <= canvas.height; j+=1) {
			setTimeout(function() {
				let c = ctx.getImageData(Math.floor(i), Math.floor(j), 1, 1).data;
				ctx.fillStyle = 'rgba(' + (1 - strength * r) * c[0] + ',' + (1 - strength * g) * c[1] + ',' + (1 - strength * b) * c[2] + ',' + c[3] +')';
				ctx.fillRect(Math.floor(i), Math.floor(j), 1, 1);
			}, (i+j) / 10000);
		}
	}
	alert('done');
}

ctx.drawImage(image, 0, 0);

// setTimeout(function(){
// 	blue(1, 1, 0, 1);
// }, 1000);

document.onkeydown = function(e) {
	// blue(prompt('strength?'), prompt('r?'), prompt('g?'), prompt('b?'));
	blue(1, 0, 0, 1);
}