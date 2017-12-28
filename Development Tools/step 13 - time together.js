// copy paste everything in here from the first 12 steps

// add to time is in all three spots. doesn't do back to original unless switching to diff

var playTime		: float		= 0.0;

var days			: float		= 0.0;
var hours			: float		= 0.0;
var minutes			: float		= 0.0;
var seconds			: float		= 0.0;
var fractions		: float		= 0.0;
	
var startTime		: float		= 0.0;
var fromStartTime	: float		= 0.0;
var fromLoadTime	: float		= 0.0;
var stopTime		: float		= 0.0;
var pauseGameTime	: float		= 0.0;
var continueTime	: float		= 0.0;

var countDownDelay	: float		= 0.0;
var countDownAmount : float		= 0.0;

var delayTime		: float		= 0.0;
var delayedAmount	: float		= 0.0;

var addToTimeAmount	: float		= 0.0;
var timeAmount		: float		= 0.0;
var actualTime		: float		= 0.0;

var timeActive		 : boolean	= true;
var countDownEnabled : boolean	= false;


function Update()
{
	playTime = Time.time;
	days		= (playTime / 86400) % 365;
	hours		= (playTime / 3600) % 24;
	minutes		= (playTime / 60) % 60;
	seconds		= (playTime % 60);
	fractions	= (playTime * 10) % 10;

	if	( timeActive )								// playTime = current Time
	{
		playTime = Time.time - continueTime + addToTimeAmount;
	}
	if	( !timeActive && countDownEnabled)							// enables time
	{
		playTime = countDownDelay - Time.time + countDownAmount;	// playTime is current time since start
	}
	//Step 1 - start time 
	if ( Input.GetKeyDown(KeyCode.Alpha1) ) 		// press a key to activate the start Time
	{
		startTime = Time.time;
	}
	fromStartTime = Time.time - startTime;			// counting from start Time
	//step 2 - from load time
	if ( Input.GetKeyDown(KeyCode.Alpha2) )			// press a key to activate the load Time
	{
		fromLoadTime = Time.timeSinceLevelLoad;		// fromLoadTime equals original level load time
	}
	//Step 3 - stop time (stopping playTime)
	if (Input.GetKeyDown(KeyCode.Alpha3)) {
		stopTime = Time.time;
		timeActive = false;
	}
	//step 4 - stop game (pause game)
	if (Input.GetKeyDown(KeyCode.Alpha4)) {
		Time.timeScale = 0.0;
	}
	else if (Input.GetKeyUp(KeyCode.Alpha4)){
		Time.timeScale = 1.0;
	}
	pauseGameTime = Time.time;
	//Step 5 - continue time
	if (Input.GetKeyDown(KeyCode.Alpha5)) 
	{
		continueTime = (Time.time - playTime);
		timeActive = true;
	}
	//Step 6 - reset time 
	if (Input.GetKeyDown(KeyCode.Alpha6))
	{
		playTime = 0;
		stopTime = 0;
		timeActive = false;
	}
	//Step 7 - count down time
	if( Input.GetKeyDown(KeyCode.Alpha7) )
	{
		countDownDelay = Time.time;
		timeActive = false;
		countDownEnabled = true;
	}

	if ( playTime < 0 )
	{
		timeActive = false;
	}
	//Step 8 - add to time (single/once)
	if( Input.GetKeyDown(KeyCode.Alpha8) )
	{
		addToTimeAmount = timeAmount;
	}
	//Step 9 - add to time (continuous)
	if( Input.GetKeyDown(KeyCode.Alpha9) )
	{
		addToTimeAmount += timeAmount;
	}
	//Step 0 - actual time since game start
	if( Input.GetKeyDown(KeyCode.Alpha0)){
		actualTime = Time.realtimeSinceStartup;
	}
	//Step 10 - delay amount / rate 
	if ( playTime > delayTime)
	{
		delayTime = Time.time + delayedAmount;
		print("Delayed for " + delayedAmount + " seconds.");
	}
}

function OnGUI()
{
	GUILayout.Label ("playTime "		+ playTime);
	GUILayout.Label ("minutes "			+ minutes.ToString("f0"));
	GUILayout.Label ("seconds "			+ seconds.ToString("f0"));
	GUILayout.Label ("fractions "		+ fractions.ToString("f3"));
	GUILayout.Label ("Start Time "		+ startTime);
	GUILayout.Label ("From Start Time " + fromStartTime);
	GUILayout.Label ("fromLoadTime "	+ fromLoadTime);
	GUILayout.Label ("stopTime "		+ stopTime);
	GUILayout.Label ("Pause Game Time " + pauseGameTime);
	GUILayout.Label ("delayTime "		+ delayTime.ToString("f0"));
		GUILayout.Label ("actualTime "	+ actualTime);

}