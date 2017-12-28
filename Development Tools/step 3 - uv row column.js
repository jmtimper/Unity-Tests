var tileX : int; //u
var tileY : int; //v

function Update ()
{
	GetComponent(Renderer).material.mainTextureOffset = Vector2(0.25,0);

	var size = Vector2 ( 1.0 / tileX, 1.0 / tileY );
	
	GetComponent(Renderer).material.mainTextureScale = size;
}

