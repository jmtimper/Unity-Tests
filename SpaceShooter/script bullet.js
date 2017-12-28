//Bullet Script

//Inspector Variables
var bulletSpeed : float = 15.0; //speed of Bullet
var deleteHeight : float = 10.0; //delete Bullet at this height
var explosion : Transform; //loads special effects
var sceneManager : GameObject; //loads sceneManager
var fxSound : AudioClip;

//Private Variables


//Game Loop
function Update () {
	transform.Translate(0, bulletSpeed*Time.deltaTime, 0);
	if(transform.position.y >= deleteHeight)
		Destroy(gameObject);
}

function OnTriggerEnter(other : Collider){
	//Check for the astroid
	if(other.gameObject.tag == "astroid"){
		other.transform.position.y = 8.0;
		other.transform.position.x = Random.Range(-7, 7);

		//Creates explosion on impact
		if(explosion){
			Instantiate(explosion, transform.position, transform.rotation);
			var audio: AudioSource = GetComponent.<AudioSource>();
			audio.PlayClipAtPoint(fxSound, transform.position);
		}

		//Tell scene manager to increment the score
		sceneManager.transform.GetComponent("scriptSceneManager").AddScore();

		//Get rid of the bullet
		Destroy(gameObject);
	}
}
