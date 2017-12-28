//Load Screen Script

//Inspector Variables

//Private Variables
var waitTime : float = 3.0;

function Update(){
	if(Input.GetKeyDown("space")){
		Application.LoadLevel("Level_01");
	} else {
		WaitTime();
	}
}

function OnGUI(){

	//Make a group on the center of the screen
	var wid : float = Screen.width;
	var hei : float = Screen.height;
	GUI.BeginGroup(Rect(wid / 2 - 100, hei / 2 - 100, 200, 200));

	//Make a box to see the group on screen
	GUI.Box(Rect(0,0,200,200),"Instructions");

	//Instructions for the player go here
	GUI.Label(Rect(10,30,140,40), "Arrow Keys to Move");
	GUI.Label(Rect(10,60,160,70), "Spacebar to Shoot");
	GUI.Label(Rect(10,90,160,100), "Esc to Quit the Game");

	//Ends group started above
	GUI.EndGroup();
}

//Waits for number of waitTime seconds
function WaitTime(){
	yield WaitForSeconds( waitTime );
	Application.LoadLevel("Level_01");
}