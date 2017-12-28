// Start Time
// Desc: Start Time simply start playTime at 0 and stores current Time

var playTime		: float = 0.0;
var startTime		: float = 0.0;
var fromStartTime	: float = 0.0;

var timeActive				= true;

function Update()
{
	if	( timeActive )				// playTime = current Time
	{
		playTime = Time.time;
	}

	if ( Input.GetKeyDown(KeyCode.Alpha1) ) 		// press a key to activate the start Time
	{
		startTime = Time.time;
	}

	fromStartTime = Time.time - startTime; // counting from start Time

}

function OnGUI()
{
	GUILayout.Label ("playTime " + playTime);
	GUILayout.Label ("Start Time " + startTime);
	GUILayout.Label ("From Start Time " + fromStartTime);
}