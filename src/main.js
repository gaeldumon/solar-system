const canvas = document.getElementById('solar-canvas');
const context = canvas.getContext('2d', {alpha: false});
let stopUpdate;

if (!canvas) {
	console.log("Impossible to get canvas");
}

if (!context) {
	console.log("Impossible to get canvas context");
}

class SpaceObject {
	constructor(name, color, radius, x, y) {
		this.name = name;
		this.color = color;
		this.radius = radius;
		this.x = x;
		this.y = y;
	}

	draw() {
		context.beginPath();
		context.fillStyle = this.color;
		context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
		context.fill();
		context.closePath();
	}
}

class Star extends SpaceObject {
	constructor(name, color, radius, x, y) {
		super(name, color, radius, x, y);
	}

	draw() {
		super.draw();
	}
}

class Planet extends SpaceObject {
	constructor(name, color, radius, dist, angSpeed, parent, rings = false) {
		super(name, color, radius);
		this.dist = dist;
		this.angSpeed = angSpeed;
		this.parent = parent;
		this.x = this.parent.x + this.dist;
		this.y = this.parent.y;
		this.angle = 0;
		this.rings = rings;
	}

	update() {
		this.angle += this.angSpeed;
		this.x = this.parent.x + this.dist * Math.sin(this.angle);
		this.y = this.parent.y + this.dist * Math.cos(this.angle);
	}

	drawRing() {
		context.fillStyle = '#ffffff';
		context.beginPath();
		context.ellipse(
			this.x, 
			this.y, 
			this.radius+5, 
			1, 
			Math.PI * -0.15, 
			0, 
			Math.PI * 2, 
			true
		);
		context.closePath();
		context.fill();
	}

	draw() {
		super.draw();
		if (this.rings) this.drawRing();
	}
}

class Moon extends Planet {
	constructor(name, color, radius, dist, angSpeed, parent) {
		super(name, color, radius, dist, angSpeed, parent);
	}

	update() {
		super.update();
	}

	drawRing() {
		super.drawRing();
	}

	draw() {
		super.draw();
	}
}

let sun = new Star("Sun", "yellow", 40, canvas.width/2, canvas.height/2);
let mercury = new Planet("Mercury", "#ffffff", 1.85, 59, 0.055, sun);
let venus = new Planet("Venus", "#de5f25", 4.85, 90, 0.022, sun);
let earth = new Planet("Earth", "blue", 5.10, 110, 0.013, sun);
let mars = new Planet("Mars", "red", 3, 140, 0.006, sun);
let jupiter = new Planet("Jupiter", "orange", 20.42, 220, 0.0015, sun);
let saturn = new Planet("Saturn", "#a88b6d", 17.23, 320, 0.0010, sun, true);
let uranus = new Planet("Uranus", "#9fc4ca", 7.30, 400, 0.0003, sun);
let neptune = new Planet("Neptune", "#3454df", 7.07, 450, 0.0006, sun);
let moon = new Moon('Moon', 'white', 1, 10, 0.013, earth);

let planets = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];
let stars = [sun];
let moons = [moon];

function clear() {
	context.clearRect(0, 0, canvas.width, canvas.height);
}

function mainUpdate() {
	
	clear();

	stars.forEach(function(star) {
		star.draw();
	});

	planets.forEach(function(planet) {
		planet.update();
		planet.draw();
	});

	moons.forEach(function(moon) {
		moon.update();
		moon.draw();
	});

	stopUpdate = requestAnimationFrame(mainUpdate);
}

mainUpdate();