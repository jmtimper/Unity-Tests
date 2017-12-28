//Double Shot item script

//Inspector Variables
var timeBeforeSpawn = 5;

//Private Variables

//Game Loop
function Start () {
	yield WaitForSeconds(timeBeforeSpawn);
	transform.position.x = Random.Range(-6.0, 6.0);
	transform.position.y = Random.Range(-4.0, 4.0);

}

function Update(){
var smooth = 2.0;
var tiltAngle = 30.0;
    var tiltAroundZ = Input.GetAxis("Horizontal") * tiltAngle;
    var tiltAroundX = Input.GetAxis("Vertical") * tiltAngle;
    var target = Quaternion.Euler (tiltAroundX, 0, tiltAroundZ);
    // Dampen towards the target rotation
    transform.rotation = Quaternion.Slerp(transform.rotation, target,  Time.deltaTime * smooth);
}

