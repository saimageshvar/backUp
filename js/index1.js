function myFunction(arr)
{
	var icons = ["hi-icon-cog", "hi-icon-clock", "hi-icon-videos", "hi-icon-list", "hi-icon-refresh", "hi-icon-clock", "hi-icon-cog"]
	
	//events
	var outer = document.createElement("div");
	outer.className = "events";
	var i;
	for(i=0;i<7;i++)
	{
		var link = document.createElement("a");
		link.href = "#set7";
		link.className = "hi-icon " + icons[i];
		outer.append(link);
		var child = document.createElement("span");
		child.style="";
		child.textContent=arr[0].categories[i].name;
		outer.append(child);
	}
	document.getElementsByClassName("events-details")[0].append(outer);
	
	//workshops
	outer = document.createElement("div");
	outer.className = "events";
	var i;
	for(i=0;i<6;i++)
	{
		var link = document.createElement("a");
		link.href = "#set7";
		link.className = "hi-icon " + icons[i];
		outer.append(link);
		var child = document.createElement("span");
		child.style="";
		child.textContent=arr[0].categories[i].name;
		outer.append(child);
	}
	document.getElementsByClassName("workshops-details")[0].append(outer);
}