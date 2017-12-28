//Astroid Script

//Inspector Variable
var height : float = 8.0;
var horMin : float = -6.0;
var horMax : float = 7.0;
var explosion: Transform;
var sceneManager : GameObject; //loads sceneManager
var shieldExplosionAudio : AudioClip;
var playerDamageAudio : AudioClip;

//Private Variable
private var astroidSpeed : float;
private var astroidSize : float;

function Start(){
	astroidSpeed = Random.Range(6.0, 10.0);
	astroidSize = Random.Range(0.5, 2.0);
	var randomSize : Vector3 = new Vector3(astroidSize, astroidSize,astroidSize);
	transform.localScale = randomSize;
}

//Game Loop
function Update () {
	transform.Translate(Vector3.down * astroidSpeed * Time.deltaTime); //(0,-astroidSpeed, 0)

	//Check for the bottom of the screen
	if(transform.position.y <= -6){
		resetEnemy();
	}
}

function OnTriggerEnter(other : Collider){
	var audio: AudioSource = GetComponent.<AudioSource>();
	if(other.gameObject.tag == "Player"){
		other.GetComponent("script player").lives -= 1;
		//set lives in scene manager
		sceneManager.transform.GetComponent("scriptSceneManager").SubtractLife();

		if(explosion){
			Instantiate(explosion, transform.position, transform.rotation);
			audio.clip = playerDamageAudio;
			audio.Play();
		}

		resetEnemy();
	}
	if(other.gameObject.tag == "Shield"){
		if(explosion)
			Instantiate(explosion, transform.position, transform.rotation);
		audio.clip = shieldExplosionAudio;
		audio.Play();

		resetEnemy();
	}
}

//reset the position of the enemy
function resetEnemy (){
	transform.position.y = height;
	transform.position.x = Random.Range(horMin, horMax);
	astroidSize = Random.Range(0.5, 2.0);
	astroidSpeed = Random.Range(6.0, 10.0);
	var randomSize : Vector3 = new Vector3(astroidSize, astroidSize,astroidSize);
	transform.localScale = randomSize;
}