// Reset Timer
// Desc: Reset timer from stopped or play time

var playTime		: float		= 0.0;
var stopTime		: float		= 0.0;
var continueTime	: float		= 0.0;

var timeActive		: boolean	= true;

function Update()
{
	if	( timeActive )							// enables time
	{
		playTime = Time.time - continueTime;	// playTime is current time since start
	}

	if (Input.GetKeyDown(KeyCode.Alpha3)) 
	{
		stopTime = Time.time;
		timeActive = false;
	}

	if (Input.GetKeyDown(KeyCode.Alpha5)) 
	{
		continueTime = (Time.time - playTime);
		timeActive = true;
	}

	if (Input.GetKeyDown(KeyCode.Alpha6))
	{
		playTime = 0;
		stopTime = 0;
		timeActive = false;
	}
}

function OnGUI()
{
	GUILayout.Label ("playTime " + playTime);
	GUILayout.Label ("stopTime " + stopTime);
	GUILayout.Label ("Time " + Time.time);
}