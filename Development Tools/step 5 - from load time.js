// Start Time
// Desc: Start Time simply start playTime at 0 and stores current Time

var playTime		: float		= 0.0;
var startTime		: float		= 0.0;
var fromStartTime	: float		= 0.0;
var fromLoadTime	: float		= 0.0;

var timeActive		: boolean	= true;

function Update()
{
	if	( timeActive )							// enables time
	{
		playTime = Time.time;					// playTime is current time since start
	}

	if ( Input.GetKeyDown(KeyCode.Alpha1) ) 	// press a key to activate the start Time
	{
		startTime = Time.time;					// startTime equals current Time
	}

	fromStartTime = Time.time - startTime;		// counting from start Time

	if ( Input.GetKeyDown(KeyCode.Alpha2) )		// press a key to activate the load Time
	{
		fromLoadTime = Time.timeSinceLevelLoad;	// fromLoadTime equals original level load time
	}
}

function OnGUI()
{
	GUILayout.Label ("playTime " + playTime);
	GUILayout.Label ("Start Time " + startTime);
	GUILayout.Label ("From Start Time " + fromStartTime);
	GUILayout.Label ("fromLoadTime " + fromLoadTime);
}