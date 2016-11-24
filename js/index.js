function myFunction(arr)
{
	var icons = ["hi-icon-cog", "hi-icon-clock", "hi-icon-videos", "hi-icon-list", "hi-icon-refresh", "hi-icon-clock", "hi-icon-cog"]
	
	//events
	var outer = document.createElement("div");
	outer.className = "events";
	var i;
	for(i=0;i<7;i++)
	{
		var icon = document.createElement("i");
		icon.className = "hi-icon fa fa-twitter";
		var child = document.createElement("a");
		child.href = "#";
		icon.append(child);
		outer.append(icon);
	}
	document.getElementsByClassName("domains")[0].append(outer);
	

	
	
}