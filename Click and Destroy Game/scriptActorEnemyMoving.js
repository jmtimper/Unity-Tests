
function Update () {
	var position = Random.Range(0,4); //new Random object position
	if(position == 0){
		transform.position += Vector3.up * Time.deltaTime * 3;
	} else if (position == 1){
		transform.position += Vector3.down * Time.deltaTime * 3;
	} else if (position == 2){
		transform.position += Vector3.left * Time.deltaTime * 3;
	} else {
		transform.position += Vector3.right * Time.deltaTime * 3;
	}
}
