function myFunction(arr)
{
	var icons = ["fa fa-gear", "fa fa-laptop", "fa fa-terminal", "fa fa-money", "fa fa-android", "fa fa-archive", "fa fa-puzzle-piece"]
	
	
	//hospitality
	
	var outer = document.createElement("ul");
	outer.className = "nav nav-tabs nav-justified";
	outer.style = "background-color:transparent;"
	var i;	
	for(i=0;i<6;i++)
	{
		var parent = document.createElement("li");
		if(i==0)
			parent.className = "active";
		
		var child = document.createElement("a");
		child.href="#hospi"+i;		
		$(child).attr('data-toggle', 'tab');
		
		var child2 = document.createElement("h6");
		
		var innerchild = document.createElement("i");
		innerchild.className=icons[i];
		child2.append(innerchild);
		child2.textContent=arr[0].hospitalities[i].title;	
		child.append(child2);
		parent.append(child);
		outer.append(parent);
	}
	document.getElementsByClassName("hospi-header")[0].append(outer);
	
	outer = document.createElement("div");	
	outer.className = "hospi";
	for(i=0;i<6;i++)
	{
		var parent = document.createElement("div");
		if(i==0)
		parent.className = "tab-pane fade in active";
		else
		parent.className = "tab-pane fade";
		parent.id="hospi"+i;
		
		var child = document.createElement("p")
		child.style="color:#fff"
		child.innerHTML = arr[0].hospitalities[i].desc;
		parent.append(child);
		document.getElementsByClassName("hospi-details")[0].append(parent);
	}
	//document.getElementsByClassName("hospi-details")[0].append(outer);
	
}