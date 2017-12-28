//player script

//inspector variables
var lives                 : int = 3; //Player lives
var playerSpeedVertical   : float = 10.0; // speed of the player along the Vertical axis
var playerSpeedHorizontal : float = 10.0; //speed of the player along the Horizontal axis
var horMin                : float = -6.0; //limits for player movement left
var horMax                : float = 6.0; //limits for player movement right
var verMin                : float = -4.0; //limits for Player movement down
var verMax                : float = 4.0; //limits for player movement up
var bullet                : Transform;
var projectileSocket      : Transform;
var numberOfShields       : int = 4; // Set number of shields the player gets to use
var shieldMesh            : Transform;
var shieldKey             : KeyCode;
var DoubleShotSocket      : Transform;

//private variables
private var shieldOn : boolean = false;
private var dsOn : boolean = false;

//Game loop
function Update () {
	//Store Input variables
	var transV : float = Input.GetAxis("Vertical") * playerSpeedVertical * Time.deltaTime;			//use to store variable for Vertical
	var transH : float = Input.GetAxis("Horizontal") * playerSpeedHorizontal * Time.deltaTime;		//use to store variable for Horizontal
	
	//Move Player based on input
	transform.Translate(transH, transV, 0);															// here we use the x to move left and right and y to move up and down

	//Create out limits for the player world
	transform.position.x = Mathf.Clamp(transform.position.x,horMin,horMax);
	transform.position.y = Mathf.Clamp(transform.position.y,verMin,verMax);

	//Create a bullet
	if(Input.GetKeyDown("space")){
		Instantiate(bullet, projectileSocket.position, projectileSocket.rotation);
		var audio: AudioSource = GetComponent.<AudioSource>();
		audio.Play();
		if(dsOn){
			Instantiate(bullet, DoubleShotSocket.position, DoubleShotSocket.rotation);
			audio.Play();
		}
	}

	// Create shield 
	if(Input.GetKeyDown(shieldKey) && numberOfShields > 0){
		if(!shieldOn){
			var clone = Instantiate(shieldMesh, transform.position, transform.rotation);
			clone.transform.parent = gameObject.transform;
			numberOfShields--;
			shieldOn = true;
		}
	}
}

function OnTriggerEnter (other : Collider) {
	if(other.tag == "Item"){
		dsOn = true;
		Destroy(other.gameObject);
	}
}

function getDSOn(){
	return dsOn;
}
