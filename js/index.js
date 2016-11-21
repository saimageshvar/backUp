function myFunction(arr)
{
	var out="";out+='<div class="row filter-elements">';
	var i;
	for(i=0;i<7;i++)
	{out+='<div class="col-xs-12 col-sm-6 col-md-3 events"><a href="#" class="work" data-id="128" data-link="" data-appear-animation="fadeInDown" data-appear-animation-delay="200" data-toggle="modal"><div class="image"><img width="270" height="167" src="wp-content/uploads/2015/07/alcatraz.jpg" class="attachment-270x182 wp-post-image" alt="Laptop" /></div><h3 class="title">'+arr[0].categories[i].name+'</h3></a></div>';
	}
	for(i=0;i<6;i++)
	{out+='<div class="col-xs-12 col-sm-6 col-md-3 workshops"><a href="#" class="work" data-id="128" data-link="" data-appear-animation="fadeInDown" data-appear-animation-delay="200" data-toggle="modal"><div class="image"><img width="270" height="167" src="wp-content/uploads/2015/07/alcatraz.jpg" class="attachment-270x182 wp-post-image" alt="Laptop" /></div><h3 class="title">'+arr[0].categories[i].name+'</h3></a></div>';
	}
	out+='</div>';
	document.getElementById("domains").innerHTML = out;
}