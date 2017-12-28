// Count Down Timer
// Desc: Counts down from countDownAmount

var playTime		: float		= 0.0;
var countDownDelay	: float		= 0.0;
var countDownAmount : float		= 0.0;

var timeActive		: boolean	= false;

function Update()
{
	if	( timeActive )							// enables time
	{
		playTime = countDownDelay - Time.time + countDownAmount;	// playTime is current time since start
	}

	if( Input.GetKeyDown(KeyCode.Alpha7) )
	{
		countDownDelay = Time.time;
		timeActive = true;
	}

	if ( playTime < 0 )
	{
		timeActive = false;
	}

}

function OnGUI()
{
	GUILayout.Label ("playTime " + playTime);
}