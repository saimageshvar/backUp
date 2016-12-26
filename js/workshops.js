function myFunction(arr)
{
	
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

			var iconName = document.createElement('div');
			//console.log(arr[0].events[domains].events[i].name);
			iconName.innerHTML = arr[0].workshops[domains].workshops[i].tabs[arr[0].workshops[domains].workshops[i].tabs.length-2].content;

			var link = document.createElement("a");
			link.href = "#";
			link.className = "hi-icon fa " + iconName.textContent;
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
	for(i=0; i<noOfTabs-2; i++)
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
	$('#workshop_team_members_form').empty();

	var count=$(e).data('tabs')[noOfTabs-1].value;
	for(i=0; i<count;i++)
	{
		var formdiv = document.createElement('div');
		formdiv.className="input-group";
		formdiv.style = "padding-bottom:5px;"
		var spandiv = document.createElement('span');
		spandiv.className = 'input-group-addon';
		var idiv = document.createElement('i');
		idiv.className="reicon fa fa-envelope";
		idiv.style = "width:14px;"
		$(spandiv).append(idiv);
		var inputdiv = document.createElement('input');
		inputdiv.className = 'form-control';
		inputdiv.setAttribute("type","text");
		inputdiv.setAttribute("placeholder","Email");
		inputdiv.setAttribute("onblur","validatemail(this)");
		inputdiv.setAttribute("name","email[]");
		if(i==0)
			inputdiv.setAttribute("required","true");
		$(formdiv).append(spandiv);
		$(formdiv).append(inputdiv);

		var formdiv2 = document.createElement('div');
		formdiv2.className="input-group";
		formdiv2.style = "padding-bottom:5px;"
		var spandiv2 = document.createElement('span');
		spandiv2.className = 'input-group-addon';
		var idiv2 = document.createElement('i');
		idiv2.className="reicon fa fa-phone";
		$(spandiv2).append(idiv2);
		var inputdiv2 = document.createElement('input');
		inputdiv2.className = 'form-control';
		inputdiv2.setAttribute("type","phone");
		inputdiv2.setAttribute("placeholder","Contact Number");
		inputdiv2.setAttribute("onblur","validatephone(this)");
		inputdiv2.setAttribute("name","phone[]");
		inputdiv2.setAttribute("id","phone");
		if(i==0)
			inputdiv2.setAttribute("required","true");
		$(formdiv2).append(spandiv2);
		$(formdiv2).append(inputdiv2);

		$('#workshop_team_members_form').append(formdiv);
		$('#workshop_team_members_form').append(formdiv2);
		$('#workshop_team_members_form').append('<br/>');
	}

	var loader = document.createElement('div');
	loader.className = "progress_loader";
	loader.style = "display: none";

	var center = document.createElement('center');
	var submit = document.createElement('input');
	submit.setAttribute('type', 'submit');
	submit.className = "btn btn-success workshop_register_submit";
	submit.setAttribute('value', 'Register');

	center.append(submit);

	$('#workshop_team_members_form').append(loader);
	$('#workshop_team_members_form').append(center);

	
}

$(window).load(function(){

	if($(window.location.hash).length==1)
	{
		$(window.location.hash).addClass('active');
		$('#General').removeClass('active');

	}

});