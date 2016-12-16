function myFunction(arr)
{
	var icons = ["hi-icon-cog", "hi-icon-clock", "hi-icon-videos", "hi-icon-list", "hi-icon-refresh", "hi-icon-clock", "hi-icon-cog"]
	
	//events
	var domains;
	for(domains=0; domains < arr[0].workshops.length; domains++)
	{
		var outer = document.createElement("div");
		if(domains != 0)
			outer.style="display:none";
		outer.className = "events-"+arr[0].workshops[domains].name;
		var i;
		for(i=0; i<arr[0].workshops[domains].workshops.length; i++)
		{
			var column = document.createElement("div");
			column.id = i;
			$(column).data('name',arr[0].workshops[domains].workshops[i].name);
			$(column).data('tabs',arr[0].workshops[domains].workshops[i].tabs);
			column.className = "col-sm-3";
			column.addEventListener("click", function() { displayDetails(this); });
			var link = document.createElement("a");
			link.href = "#";
			link.className = "hi-icon fa fa-twitter";
			var content = document.createElement("p");
			content.textContent = arr[0].workshops[domains].workshops[i].name;
			
			column.append(link);
			column.append(content);
			outer.append(column);
		}
		document.getElementsByClassName("events")[0].append(outer);
	}

	$('.workshops-loader').hide();
	//$('.main').show();

	// changing domain by url
	if($(window.location.hash).length==1)
	{
		swapDomains($(window.location.hash)[0]);
		// $('#Engineering').removeClass('active');
	}
	
	
	
}

function swapDomains(ele)
{
	$('.events div').not(".events-"+ele.id).hide();		
	$(".events-"+ele.id).show();
	$(".events-"+ele.id+" div").show();			
	
}

function displayDetails(e)
{
	//alert($(e).data('name'));
	$('#eventsDetails .modal-title')[0].innerHTML = $(e).data('name');
	//$('#eventsDetails .modal-body')[0].innerHTML = $(e).data('tabs').length;
	var outerDiv = document.createElement('div');
	outerDiv.className = 'eventModalBodyDiv';
	var i;
	var noOfTabs = $(e).data('tabs').length;
	for(i=0; i<noOfTabs; i++)
	{
		var tabHeading = document.createElement('h6');
		tabHeading.innerHTML = $(e).data('tabs')[i].title;
		var tabContent = document.createElement('p');
		tabContent.innerHTML = $(e).data('tabs')[i].content;
		$(outerDiv).append(tabHeading);
		$(outerDiv).append(tabContent);		
	}
	$('#eventsDetails .modal-body').html(outerDiv);
	$('#eventsDetails').modal('show');
}


$(window).load(function(){

	if($(window.location.hash).length==1)
	{
		$(window.location.hash).addClass('active');
		$('#General').removeClass('active');

	}

});