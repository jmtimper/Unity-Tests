//Lose Menu Script

//
function OnGUI () {
	GUI.Label(Rect(10,10,100,40), "YOU LOSE");
	if(GUI.Button(Rect(10,60,100,50), "Restart Game")){
		//print("Start Game");
		Application.LoadLevel("sceneLevel1");
	}
	if(GUI.Button(Rect(10,130,100,50), "Exit Game")){
		//print("Exit Game");
		Application.Quit();
	}
}
