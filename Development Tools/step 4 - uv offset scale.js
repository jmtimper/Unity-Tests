var column : int; //u
var row : int; //v
var index : int = 1;

function Update ()
{
	index = index % (column * row);
	var size = Vector2 ( 1.0 / column, 1.0 / row );
	var offset = Vector2 (index * size.x, row);
	
	GetComponent(Renderer).material.mainTextureScale = size;
	GetComponent(Renderer).material.mainTextureOffset = offset;

}

