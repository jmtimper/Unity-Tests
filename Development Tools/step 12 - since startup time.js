// Since Startup Time
// Desc: Real time since startup

var playTime		: float		= 0.0;
var actualTime		: float		= 0.0;

var timeActive		: boolean	= true;

function Update()
{
	if	( timeActive )							// enables time
	{
		playTime = Time.time;	// playTime is current time since start
	}
	if( Input.GetKeyDown(KeyCode.alpha0)){
		actualTime = Time.realtimeSinceStartup;
	}
}

function OnGUI()
{
	GUILayout.Label ("playTime " + playTime);
	GUILayout.Label ("actualTime " + actualTime);
}