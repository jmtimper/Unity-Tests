//Player Script

//Inspector Varibles
var tagName : String;          //tag name of objects being clicked
var rayDistance : float = 0;   //distance ray from mouse pointer goes
var score : int = 0;           //score for our player
var gameTime : float = 20.0;   //amount of time the game will last
var loadWaitTime : float = 2.0; //level load wait time
var numberOfPointsToWin : int = 2; //number Of Points To Win

//Private Varibles

function Start(){
	InvokeRepeating("CountDown", 1.0, 1.0);  //Repeat CountDown every second
}

//Update is called every frame
function Update () {
	//use the mouse button to select on gameobjects in the scene
	if(Input.GetMouseButtonDown(0)){

		var hit: RaycastHit;  //var object clicked
		var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition); //get mouse position

		if(Physics.Raycast(ray, hit, rayDistance)){
			if(hit.transform.tag == tagName){
				var enemyScript = hit.transform.GetComponent(scriptActorEnemy); //create access to enemyScript
				enemyScript.numberOfClicks--;  //decrease numberOfClicks
				if(enemyScript.numberOfClicks == 0) //check for numberOfClicks == 0
					score += enemyScript.enemyPoint; //if true add to score
			} else if(hit.transform.tag  == "enemy2") {
				var enemyScript2 = hit.transform.GetComponent(scriptActorEnemyBlinking); //create access to enemyScript
				enemyScript2.numberOfClicks--;  //decrease numberOfClicks
				if(enemyScript2.numberOfClicks == 0) //check for numberOfClicks == 0
					score += enemyScript2.enemyPoint; //if true add to score
			} else {
				print("This is not a " + tagName +"!");
			}
		}
	}
}

//counts down gameTime
function CountDown(){
	if(--gameTime == 0){  //subtract gameTime
		CancelInvoke("CountDown"); //cancel the CountDown
		if(score >= numberOfPointsToWin)
			Application.LoadLevel("sceneScreenWin");
		else
			Application.LoadLevel("sceneScreenLose");
	}
}

//Manages GUI display
function OnGUI(){
	GUI.Label(Rect(10, 10, 100, 20), "Score: " + score);
	GUI.Label(Rect(10,25,100,35), "Time: " + gameTime);
}
