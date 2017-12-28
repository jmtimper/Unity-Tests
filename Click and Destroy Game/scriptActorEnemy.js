//Player Script

//Inspector Varibles
var shapeColor : Color[];             //color of object
var numberOfClicks : int = 2;         //number of clicks till respawn
var respawnWaitTime : float = 2.0;    //respawn time
var explosion : Transform;            //load particle effect
var enemyPoint : int = 1;             //object points
var isSphere = false;                //is the enemy a sphere

//Private Varibles
private var storeClicks : int = 0;

//initializes Random color and position
function Start(){
    storeClicks = numberOfClicks;
	RandomColor();
	var position = Vector3(Random.Range(-6,6), Random.Range(-4,4), 0); //new Random object position
	transform.position = position; //move game object to new location
}

//Update is called every frame
function Update () {
    if(numberOfClicks <= 0){
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

//RespawnWaitTime is used hide the game object for a set amount of time and then show it
function RespawnWaitTime(){
	GetComponent.<Renderer>().enabled = false;
	RandomColor();
	if(isSphere){
		respawnWaitTime = Random.Range(1,4);
	}
	yield WaitForSeconds(respawnWaitTime);
	GetComponent.<Renderer>().enabled = true;
}

//RandomColor is used to change out the material of a game object
function RandomColor(){
    if(shapeColor.length > 0){
		var newColor = Random.Range(0, shapeColor.length);
		GetComponent.<Renderer>().material.color = shapeColor[newColor];
	}
}