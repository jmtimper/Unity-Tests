var column : int;	 //u
var row : int;		 //v
//var index : int = 1;
var framesPerSecond = 8; //speed of animation

function Update ()
{
	var index : int = Time.time * framesPerSecond;	//time control fps
	index = index % (column * row);					//modulo for repeating
	var size = Vector2 ( 1.0 / column, 1.0 / row ); //scale
	var offset = Vector2 (index * size.x, row);		//offset
	
	GetComponent(Renderer).material.mainTextureScale = size;
	GetComponent(Renderer).material.mainTextureOffset = offset;

}

