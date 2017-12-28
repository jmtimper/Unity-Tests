//Credits Scene Script

//Inspector Variables

//Private Variables

//Display GUI
function OnGUI(){

	//Make a group on the center of the screen
	var wid : float = Screen.width;
	var hei : float = Screen.height;
	GUI.BeginGroup(Rect(wid / 2 - 100, hei / 2 - 100, 200, 200));

	//Make a box to see the group on screen
	GUI.Box(Rect(0,0,200,200),"Credits");

	//Instructions for the player go here
	GUI.Label(Rect(10,40,200,50),   "Designer           Jeremy Timperio");
	GUI.Label(Rect(10,70,200,80),   "Artist                Jeremy Timperio");
	GUI.Label(Rect(10,100,200,110), "Software           Jeremy Timperio");
	GUI.Label(Rect(10,130,200,140), "Level Designer  Jeremy Timperio");

	if(GUI.Button(Rect(60, 175, 80, 30), "Back")){
		Application.LoadLevel("screenMainMenu");
	}

	//Ends group started above
	GUI.EndGroup();
}