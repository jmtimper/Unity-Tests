// Shield script

//Inspector Variables
var shieldStrength : int = 3;

//
function OnTriggerEnter (other : Collider) {
	if(other.tag == "astroid"){
		shieldStrength--;
	}
}

function Update(){
	if(shieldStrength == 0){
		Destroy(gameObject);
		shieldStrength = 3;
	}
}
