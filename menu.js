var  invisiblebuttion2 :GUIStyle ;
var selectrace : GameObject;
function OnGUI () 
{
   if (GUI.Button(Rect(70,330,165,32), "",invisiblebuttion2))
	{
		selectrace.active = true;
	}		
	
}
