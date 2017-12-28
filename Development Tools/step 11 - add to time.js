// Add to Timer
// Desc: Add more time to the timer 1. single amount once. 2. continuous adding

var playTime		: float		= 0.0;
var addToTimeAmount	: float		= 0.0;
var timeAmount		: float		= 0.0;

var timeActive		: boolean	= true;

function Update()
{
	if	( timeActive )							// enables time
	{
		playTime = Time.time + addToTimeAmount;	// playTime is current time since start
	}

	if( Input.GetKeyDown(KeyCode.Alpha8) )
	{
		addToTimeAmount = timeAmount;
	}

	if( Input.GetKeyDown(KeyCode.Alpha9) )
	{
		addToTimeAmount += timeAmount;
	}

}

function OnGUI()
{
	GUILayout.Label ("playTime " + playTime);
}