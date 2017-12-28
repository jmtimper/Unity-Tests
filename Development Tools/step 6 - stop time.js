// Start Time
// Desc: Start Time simply start playTime at 0 and stores current Time

var playTime		: float		= 0.0;
var stopTime		: float		= 0.0;
var pauseGameTime	: float		= 0.0;

var timeActive		: boolean	= true;

function Update()
{
	if	( timeActive )							// enables time
	{
		playTime = Time.time;					// playTime is current time since start
	}

	if (Input.GetKeyDown(KeyCode.Alpha3)) {
		stopTime = Time.time;
		timeActive = false;
	}

	if (Input.GetKeyDown(KeyCode.Alpha4)) {
		Time.timeScale = 0.0;
	}
	else if (Input.GetKeyUp(KeyCode.Alpha4)){
		Time.timeScale = 1.0;
	}
	pauseGameTime = Time.time;
}

function OnGUI()
{
	GUILayout.Label ("playTime " + playTime);
	GUILayout.Label ("stopTime " + stopTime);
	GUILayout.Label ("Pause Game Time " + pauseGameTime);
}