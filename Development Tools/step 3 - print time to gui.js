var playTime : float = 0.0;

var days     : float = 0.0;
var hours    : float = 0.0;
var minutes  : float = 0.0;
var seconds  : float = 0.0;
var fraction : float = 0.0;

// year optional
// var year : float = 0.0;
// year = days / 365;

function Update ()
{
	//print (Time.time);
	playTime = Time.time;                     // runs in background keeping up with time
	days     = hours    / 24;
	hours    = minutes  / 60;
	minutes  = playTime / 60;
	seconds  = playTime % 60;
	fraction = ( playTime * 10 ) % 10;
}

function OnGUI()
{
	GUILayout.Label ("playTime "	+ playTime);
	GUILayout.Label ("minutes "		+ minutes.ToString("f0"));
	GUILayout.Label ("seconds "		+ seconds.ToString("f0"));
	GUILayout.Label ("fractions "	+ fraction.ToString("f3"));
}