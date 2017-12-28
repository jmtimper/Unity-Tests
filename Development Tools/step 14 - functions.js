/*

var minutes = 0.0;
var seconds = 0.0;
var fraction = 0.0;
var playTime = 0.0;
var stopTime = 0.0;
var nextTime = 0.0;
var startTime= 0.0;
var delayTime = 1.0;
var delayedAmount = 0.0;
var addToTimeAmount = 0.0;
var countDownAmount = 0.0;
var countDownDelay = 0.0;
var elapsedTime = 0.0;
var actualTime= 0.0;
var buttonPressed = 0;
var timeActive = false;

var curTimeState : TimerState;

enum TimerState {startTimer, stopTimer, continueTimer, fromStartTimer,
resetTimer, countDownTimer, countToTimer, delayTimer,
addToTimer, actualTime}

function Update ()// update function counts time on minute, seconds, fractions (below)
{
	if ( Input.GetKeyDown ( KeyCode.Alpha1 ) )
	{
		StartTimer ();// time automatically begins
	}
	if ( Input.GetKeyDown ( KeyCode.Alpha2 ) )
	{
		FromStartTimer ();// shows current time from start of scene
	}
	if ( Input.GetKeyDown ( KeyCode.Alpha3 ) )
	{
		StopTimer ();// stops timer (at current time)
	}
	if ( Input.GetKeyDown ( KeyCode.Alpha4 ) )
	{
		ContinueTimer ();// continue from stop timer
	}
	if ( Input.GetKeyDown ( KeyCode.Alpha5 ) )
	{
		ResetTimer ();// reset timer to 0
	}
	if ( Input.GetKeyDown ( KeyCode.Alpha6 ) )
	{
		CountDownTimer (100);// possibly count down 'from'
	}
	if ( Input.GetKeyDown ( KeyCode.Alpha7 ) )
	{
		DelayTimer (3);// amount to delay every second
	}
	if ( Input.GetKeyDown ( KeyCode.Alpha8 ) )
	{
		AddToTimer (22);// add extra time to the current time amount
	}
	if ( Input.GetKeyDown ( KeyCode.Alpha9 ) )
	{
		SinceStartUpTimer ();// grab actual time since start of game
	}
	
	print (curTimeState);
	if ( Input.GetMouseButtonDown ( 0 ) )// example usaged - press mouse button to start/stop clock
	{
		buttonPressed++;// when button pressed, counts up 1
		if ( buttonPressed == 1 )// if button pressed equals 1, then start timer
		{
			if ( !timeActive )
			{
				StartTimer ();// call function, start Time.time, set go to true
			}
		}
		if ( buttonPressed >= 2 )// if button pressed equals 2, then stop timer, reset to 0
		{
			buttonPressed = 0;
			StopTimer ();// go =!go; <- other way to write stop timer
		}
	}
	if ( Input.GetMouseButtonDown ( 1 ) )
	{
		//FromStartTimer ();
		AddToTimer (30);
	}
	
	if ( playTime > 80 && playTime < 83 )// quick example of stopping the time clock
	{
		StopTimer ();
	}
	//DelayTimer (6);// delayTimer has to be 'in code' with if statement check
	
	
	switch (curTimeState)// functions called inside
	{
		case TimerState.startTimer:
		if ( timeActive )// time is active, then print to console current time
		{
			playTime = Time.time - startTime;// resets time to 0 when actived
			minutes = playTime / 60 ;
			seconds = playTime % 60;// modulated time by 60
			fraction = ( playTime *10 ) %10;
		}
		break;
		case TimerState.stopTimer:
		Debug.Log ("Timer stopped");
		break;
		case TimerState.fromStartTimer:
		playTime = Time.time;// keeps clock running in background, when actived, shows updated time
		minutes = playTime / 60 ;
		seconds = playTime % 60;
		fraction = ( playTime *10 ) % 10;
		break;
		case TimerState.continueTimer:
		if ( timeActive )// time is active, then print to console current time
		{
			//elapsedTime = Time.time - stopTime;// resets time to 0 when actived
			playTime = Time.time - elapsedTime;// resets time to 0 when actived
			minutes = playTime / 60 ;
			seconds = playTime % 60;
			fraction = ( playTime *10 ) %10;
		}
		break;
		case TimerState.resetTimer:
		if ( timeActive )
		{
			playTime = Time.time - startTime;// resets time to 0 when actived
			minutes = playTime / 60 ;
			seconds = playTime % 60;
			fraction = ( playTime *10 ) %10;
		}
		break;
		case TimerState.countDownTimer:
		if ( timeActive )
		{
			playTime = countDownDelay - Time.time + countDownAmount;
			minutes = playTime / 60 ;
			seconds = playTime % 60;
			fraction = ( playTime *10 ) %10;
		}
		break;
		case TimerState.delayTimer:
		if ( Time.time > delayTime)
		{
			delayTime = Time.time + delayedAmount;
			print ("delayed for " + delayedAmount + " seconds");
		}
		break;
		case TimerState.addToTimer:
		playTime = Time.time + addToTimeAmount;
		minutes = playTime / 60;
		seconds = playTime % 60;
		fraction = ( playTime *10 ) %10;
		break;
		case TimerState.actualTime:
		if ( Time.time > delayTime)
		{
			delayTime = Time.time + delayedAmount;
			print ("delayed for " + delayedAmount + " seconds");
		}
		break;
		default:
		break;
	}
	}// end update function
	
	function StartTimer ()// starts timer (at zero)
	{
		startTime  = Time.time;// startTime equals current time (Time.time)
		timeActive = true;// set timeActive to true (begin time display)
		curTimeState = TimerState.startTimer;
	}
	
	function FromStartTimer ()// shows current time from start of scene
	{
		curTimeState = TimerState.fromStartTimer;
	}
	
	function StopTimer ()// stops timer (at current time)
	{
		timeActive = false;// stop timer
		stopTime = Time.time;
		curTimeState = TimerState.stopTimer;
	}
	
	function ContinueTimer ()// continue from stop timer
	{
		timeActive = true;
		elapsedTime = Time.time - stopTime;
		curTimeState = TimerState.continueTimer;
	}
	
	function ResetTimer ()// reset timer to 0
	{
		startTime = Time.time;
		curTimeState = TimerState.resetTimer;
	}
	
	function CountDownTimer (downAmount)// possibly count down 'from'
	{
		countDownAmount = downAmount;
		curTimeState = TimerState.countDownTimer;
	}
	
	function DelayTimer (delayAmount)// amount to delay each time
	{
		delayedAmount = delayAmount;
		curTimeState = TimerState.delayTimer;
	}
	
	function AddToTimer (addingToTimeAmount)// add extra time to the current time amount
	{
		addToTimeAmount = addingToTimeAmount;
		curTimeState = TimerState.addToTimer;
	}
	
	function SinceStartUpTimer ()//
	{
		actualTime = Time.realtimeSinceStartup;
		curTimeState = TimerState.actualTime;
	}
*/