//Main Menu Script

//
function OnGUI () {
	if(GUI.Button(Rect(10,10,90,50), "Start Game")){
		//print("Start Game");
		Application.LoadLevel("sceneLevel1");
	}
	if(GUI.Button(Rect(10,70,90,50), "Exit Game")){
		//print("Exit Game");
		Application.Quit();
	}
}
