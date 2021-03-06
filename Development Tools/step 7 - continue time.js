// Continue Time
// Desc: Continue timer from stopped time

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
}

function OnGUI()
{
	GUILayout.Label ("playTime " + playTime);
	GUILayout.Label ("stopTime " + stopTime);
	GUILayout.Label ("Time " + Time.time);
}