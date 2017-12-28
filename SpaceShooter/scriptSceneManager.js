//Scene Manager Script

//Inspector Variables
var gameTime : float = 60;
static var score : int = 0;
static var lives : int = 3;
var labelRight : float = 100;

//Private Variables

//Starts timer
function Start(){
	InvokeRepeating("CountDown", 1.0, 1.0);
}

//Game loop
function Update () {
	if(lives <= 0){
		Application.LoadLevel("ScreenLose");
		lives = 3;
		PlayerPrefs.SetInt("SCORE", score);
		score = 0;
	}

	if(gameTime <= 0){
		Application.LoadLevel("ScreenWin");
		lives = 3;
		PlayerPrefs.SetInt("SCORE", score);
		score = 0;
	}
}

//Iterates score
function AddScore(){
	score += 1;
}

//subracts one life from lives
function SubtractLife(){
	lives -= 1;
}

//Counts down timer
function CountDown(){
	if(--gameTime <= 0){
		CancelInvoke("CountDown");
	}
}

//Displays GUI
function OnGUI(){
	GUI.Label(Rect(10,10,100,20), "Score: " + score);
	GUI.Label(Rect(10,25,100,35), "Lives: " + lives);
	GUI.Label(Rect(Screen.width - labelRight,10,100,20), "Time: " + gameTime);
}
