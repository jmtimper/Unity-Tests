var columnSize : int;	 //u
var rowSize : int;		 //v
var framesPerSecond = 8; //speed of animation

var rowFrameStart : int = 0;
var colFrameStart : int = 0;
var totalFrames : int = 1;

function Update ()
{
	var index : int = Time.time * framesPerSecond;			//time control fps
	//index = index % (columnSize * rowSize);					//modulo for repeating
	index = index % totalFrames;
	var size = Vector2 ( 1.0 / columnSize, 1.0 / rowSize ); //scale

	var u : int = index % columnSize;
	var v : int = index / columnSize;
	//var offset = Vector2 (u * size.x, (1 - size.y) - (v * size.y));		//offset
	var offset = Vector2 ((u + colFrameStart) * size.x, (1 - size.y) - ((v + rowFrameStart) * size.y));
	
	GetComponent(Renderer).material.mainTextureScale = size;
	GetComponent(Renderer).material.mainTextureOffset = offset;

}

