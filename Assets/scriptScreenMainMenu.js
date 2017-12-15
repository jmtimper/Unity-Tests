//Main Menu Script

//Inspector Variables

//Private Variables

//Displays GUI
function OnGUI(){
	//Make a group on the center of the screen
	var wid : float = Screen.width;
	var hei : float = Screen.height;
	GUI.BeginGroup(Rect(wid / 2 - 50, hei / 2 - 50, 100, 175));

	//Make a box to see the group on screen
	GUI.Box(Rect(0,0,100,175), "Main Menu");

	//Add buttons for game navigation
	if(GUI.Button(Rect(10,30,80,30), "Start Game")){
		Application.LoadLevel("ScreenLoad");
	}

	if(GUI.Button(Rect(10,65,80,30), "Credits")){
		Application.LoadLevel("ScreenCredit");
	}

	if(GUI.Button(Rect(10, 100, 80,30), "Exit")){
		Application.Quit();
	}

	if(GUI.Button(Rect(10,135,80,30), "Homepage")){
		Application.OpenURL("http://unity3d.com/");
	}

	GUI.EndGroup();
}