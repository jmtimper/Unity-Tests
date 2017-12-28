//Blinking Circle Enemy Script

//Inspector Varibles
var shapeColor : Color[];             //color of object
var numberOfClicks : int = 2;         //number of clicks till respawn
var respawnWaitTime : float = 2.0;    //respawn time
var explosion : Transform;            //load particle effect
var enemyPoint : int = 1;             //object points
var blinkingTimer : float = 3.0;      //time before object hides

//Private Varibles
private var storeClicks : int = 0;
private var storeBlinks : float = 0;

//initializes Random color and position
function Start(){
    storeClicks = numberOfClicks;
	storeBlinks = blinkingTimer;
	RandomColor();
	BlinkingCountdown();
	var position = Vector3(Random.Range(-6,6), Random.Range(-4,4), 0); //new Random object position
	transform.position = position; //move game object to new location
	InvokeRepeating("CountDown", 1.0, 1.0);  //Repeat CountDown every second
}

//Update is called every frame
function Update () {
    if(numberOfClicks <= 0){
		CancelInvoke("CountDown"); //cancel the CountDown
		CancelInvoke("BlinkingCountdown"); //cancel the CountDown
		if(explosion){
			Instantiate(explosion, transform.position, transform.rotation);  //creates explosion
		}
		var audio : AudioSource = GetComponent.<AudioSource>();
		if(audio.clip)
			audio.Play();
		var position = Vector3(Random.Range(-6,6), Random.Range(-4,4), 0); //new Random object position
		RespawnWaitTime();
		transform.position = position; //move game object to new location
		numberOfClicks = storeClicks;
	}
}

function BlinkingCountdown(){
	while(true){
		GetComponent.<Renderer>().material.color = shapeColor[0];
		yield WaitForSeconds(0.2);
		GetComponent.<Renderer>().material.color = shapeColor[1];
		yield WaitForSeconds(0.2);
	}
}

function CountDown(){
	if(--blinkingTimer == 0){
		CancelInvoke("CountDown"); //cancel the CountDown
		var position = Vector3(Random.Range(-6,6), Random.Range(-4,4), 0); //new Random object position
		RespawnWaitTime();
		transform.position = position; //move game object to new location
		numberOfClicks = storeClicks;
		blinkingTimer = storeBlinks;

	}
}

//RespawnWaitTime is used hide the game object for a set amount of time and then show it
function RespawnWaitTime(){
	GetComponent.<Renderer>().enabled = false;
	RandomColor();
	yield WaitForSeconds(Random.Range(1,4));
	GetComponent.<Renderer>().enabled = true;
	InvokeRepeating("CountDown", 1.0, 1.0);  //Repeat CountDown every second
}

//RandomColor is used to change out the material of a game object
function RandomColor(){
    if(shapeColor.length > 0){
		var newColor = Random.Range(0, shapeColor.length);
		GetComponent.<Renderer>().material.color = shapeColor[newColor];
	}
}