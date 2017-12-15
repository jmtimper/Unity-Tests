//Lose Screen Script

//Inspector Variables
var loseQuote : String = "You Win!";

//Private Variables

//
function OnGUI () {
	var wid : float = Screen.width;
	var hei : float = Screen.height;
	GUI.BeginGroup(Rect(wid/2-100, hei/2-100,200,100));

	GUI.Box(Rect(0,0,200,100), loseQuote);

	GUI.Label(Rect(10,40,100,50), "Score: " + PlayerPrefs.GetInt("SCORE"));

	if(GUI.Button(Rect(60,60,80,30), "Main Menu")){
		Application.LoadLevel("ScreenMainMenu");
	}

	GUI.EndGroup();
}
