function Update ()
{
	aniSprite (8,2,0,0,16,12);
}

function aniSprite (columnSize, rowSize, colFrameStart, rowFrameStart, totalFrames, framesPerSecond) {
	var index : int = Time.time * framesPerSecond;
	index = index % totalFrames;
	
	var size = Vector2 ( 1.0 / columnSize, 1.0 / rowSize); 
	
	var u = index % columnSize;
	var v = index / columnSize;
	
	var offset = Vector2 ((u + colFrameStart) * size.x,(1.0 - size.y) - (v + rowFrameStart) * size.y);
	
	GetComponent(Renderer).material.mainTextureOffset = offset;	// texture offset
	GetComponent(Renderer).material.mainTextureScale  = size;	// texture scale
	
	GetComponent(Renderer).material.SetTextureOffset ("_BumpMap", offset);
	GetComponent(Renderer).material.SetTextureScale ("_BumpMap", size);
}