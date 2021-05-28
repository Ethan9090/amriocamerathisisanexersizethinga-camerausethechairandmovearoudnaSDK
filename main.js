function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();

	Jump = loadSound("jump.wav");

	Coin = loadSound("coin.wav");

	Lose = loadSound("gamerover.wav");

	Kick = loadSound("kick.wav");

	Die = loadSound("mariodie.wav");

}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);

	camera = createCapture(VIDEO);
	camera.size(800,500);
	camera.parent("game_console");

	mOdel = ml5.poseNet(camera,modaLoaded);

	mOdel.on("pose",gotPoses);

}

function modaLoaded(){
	console.log("my model is working");
}

function gotPoses(results,error){

	if(results.length > 0){

		console.log(results);

		X = results[0].pose.nose.x;

		Y = results[0].pose.nose.y;

	}
	else{
		console.error();
	}
}

function draw() {

	game();
}

//	ctx = canvas.getContext('2d');
//	ctx.beginPath();

//	ctx.moveTo(300,0);
//	ctx.lineTo(300,500);
//	ctx.stroke();



//	stroke("red");
//	strokeWeight(10);
//	line(300,0,300,500);