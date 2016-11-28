function myFunction(arr)
{
	/*var icons = ["fa fa-gear", "fa fa-laptop", "fa fa-terminal", "fa fa-money", "fa fa-android", "fa fa-archive", "fa fa-puzzle-piece"]
	
	//events
	var outer = document.createElement("div");
	outer.className = "events";
	var i;
	for(i=0;i<7;i++)
	{
		var parent = document.createElement("div");
		parent.className = "col-sm-2";
		outer.append(parent);
		var link = document.createElement("a");
		link.href = "#set7";
		link.className = "hi-icon " + icons[i];
		parent.append(link);
		var child = document.createElement("p");
		child.style="";
		child.textContent=arr[0].categories[i].name;
		parent.append(child);
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
	*/
	//hospitality
	var outer = document.createElement("div");
	
	outer.className = "hospi";
	var i;	
	for(i=0;i<6;i++)
	{
		var parent = document.createElement("div");
		parent.className = "tab-pane fade";
		
		
		//parent.id=arr[0].hospitalities[i].title;
		outer.append(parent);		
		var child = document.createElement("p")
		child.append("<html>");
		child.style="color:#fff"
		child.textContent=arr[0].hospitalities[i].desc;
		child.append("</html>");
		parent.append(child);
	}
	document.getElementsByClassName("hospi-details")[0].append(outer);
	
}