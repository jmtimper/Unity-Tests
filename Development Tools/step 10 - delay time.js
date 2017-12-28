// Delay Timer
// Desc: Continue timer after delayed amount

var playTime		: float		= 0.0;
var delayTime		: float		= 0.0;
var delayedAmount	: float		= 0.0;

var timeActive		: boolean	= true;

function Update()
{
	if	( timeActive )							// enables time
	{
		playTime = Time.time;	// playTime is current time since start
	}

	if ( playTime > delayTime)
	{
		delayTime = Time.time + delayedAmount;
		print("Delayed for " + delayedAmount + " seconds.");
	}


}

function OnGUI()
{
	GUILayout.Label ("playTime " + playTime);
	GUILayout.Label ("delayTime " + delayTime.ToString("f0"));
}