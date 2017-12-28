var column : int;	 //u
var row : int;		 //v
var framesPerSecond = 8; //speed of animation

function Update ()
{
	var index : int = Time.time * framesPerSecond;	//time control fps
	index = index % (column * row);					//modulo for repeating
	var size = Vector2 ( 1.0 / column, 1.0 / row ); //scale

	var u : int = index % column;
	var v : int = index / column;
	var offset = Vector2 (u * size.x, (1 - size.y) - (v * size.y));		//offset
	
	GetComponent(Renderer).material.mainTextureScale = size;
	GetComponent(Renderer).material.mainTextureOffset = offset;

}

