var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;
var date = undefined
var clock = new Clock();
function Clock() {
	this.hours = undefined;
	this.analogHours = undefined;
	this.minutes = undefined;
	this.seconds = undefined;
	this.test = undefined;
	this.digitalDisplay = function() {
		ctx.fillStyle = "rgb(9,0,255)";
		ctx.font = " 30px Bookman";
		ctx.textAlign = "center";
		ctx.fillText(this.hours + ":" + this.minutes + ":" + this.seconds, 250, 400);
	}
	this.analogDisplay = function() {
		ctx.lineWidth = 10;
		ctx.strokeStyle = "grey";
		ctx.beginPath();
		ctx.arc(250, 250, 50, 1.5 * Math.PI, (((2 * Math.PI) / 12) * this.analogHours) + 1.5 * Math.PI, false);
		ctx.stroke();
		ctx.strokeStyle = "red";
		ctx.beginPath();
		ctx.arc(250, 250, 70, 1.5 * Math.PI, (((2 * Math.PI) / 60) * this.minutes) + 1.5 * Math.PI, false);
		ctx.stroke();
		ctx.strokeStyle = "black";
		ctx.beginPath();
		ctx.arc(250, 250, 90, 1.5 * Math.PI, (((2 * Math.PI) / 60) * this.seconds) + 1.5 * Math.PI, false);
		ctx.stroke();
		//ctx.beginPath();
		//ctx.arc(250, 250, 50 , 0 , Math.PI *// 2, true);
		//ctx.strokeStyle = this.color;
		//ctx.stroke();
		
	}
	this.update = function() {
		date = new Date();
		this.hours = date.getHours();
		this.minutes = date.getMinutes();
		this.seconds = date.getSeconds();
		if (this.hours > 12) {
			this.analogHours = this.hours - 12;
		}
		this.digitalDisplay();
		this.analogDisplay();
	}
}
function animate() {
	requestAnimationFrame(animate);
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	clock.update();
	
}
animate();