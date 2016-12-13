function myFunction(arr)
{
	var icons = ["fa fa-gear", "fa fa-laptop", "fa fa-terminal", "fa fa-money", "fa fa-android", "fa fa-archive", "fa fa-puzzle-piece"]
	
	
	//hospitality
	
	var outer = document.createElement("ul");
	outer.className = "nav nav-tabs nav-justified";
	outer.style = "background-color:transparent;"
	var i;	
	for(i=0;i<arr[0].hospitalities.length;i++)
	{
		var parent = document.createElement("li");
		if(i==0)
			parent.className = "active";
		
		var child = document.createElement("a");
		child.href="#hospi"+i;		
		$(child).attr('data-toggle', 'tab');
		
		var child2 = document.createElement("h6");
		child2.style = "font-family: 'Aref Ruqaa', serif; font-size:18px; font-style: normal; text-transform: none;";
		
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
	for(i=0;i<arr[0].hospitalities.length;i++)
	{
		var parent = document.createElement("div");
		if(i==0)
			parent.className = "tab-pane fade in active";
		else
			parent.className = "tab-pane fade";
		parent.id="hospi"+i;
		
		var child = document.createElement("p")
		child.style="color:#fff;font-style:normal;";
		child.innerHTML = arr[0].hospitalities[i].desc;
		parent.append(child);
		document.getElementsByClassName("hospi-details")[0].append(parent);
	}
	//document.getElementsByClassName("hospi-details")[0].append(outer);
	
}

function typeUpdates(arr)
{
	var i;
	var updates = [];
	for(i=0; i<arr[0].length; i++)
	{
		updates[i] = arr[0][i].title;
	}
	$(".update").typed({
		strings: updates,
		typeSpeed: 0,
		loop: true,
		showCursor: false,
		typeSpeed: 10,
		backDelay: 1000,
		backSpeed: 10
	});
}

function displayGls(arr)
{

	var i;
	var baseURL = "http://enct29fa5ae.kurukshetra.org.in";
	for(i=0; i < arr[0].gls.length; i++)
	{
		var div = document.createElement('div');
		div.className = "avatar animated";
		div.style = "height:120px !important; width:120px !important;";

		var img = document.createElement('img');
		img.src = baseURL + arr[0].gls[i].avatar;
		img.className = "attachment-120x120 wp-post-image";
		img.style = "height:120px !important; width:120px !important;";

		$(div).append(img);
		$('.gls-avatar').append(div);




		var contentDiv = document.createElement('div');
		contentDiv.className = "story";
		blockQuote = document.createElement('blockquote');
		var title = document.createElement('p');
		title.textContent = arr[0].gls[i].title;
		var description = document.createElement('p');
		description.innerHTML = arr[0].gls[i].desc;

		$(blockQuote).append(title);
		$(blockQuote).append(description);

		$(contentDiv).append(blockQuote);
		$('.gls-content').append(contentDiv);
	}

	var success = $('.success-carousel');

		success.each(function(){
			var $this   = $(this),
					avatars = $this.find('.avatars-carousel'),
					content = $this.find('.content'),
					logo    = $this.find('.logo');

			avatars.carouFredSel({
				synchronise : ['.success-carousel .content', false],
				auto        : false,
				items       : {
					visible : 1
				},
				scroll      : {
					items    : 1,
					fx       : 'fade',
					duration : 0,
					onBefore : function(){
						avatars.find('.avatar').removeClass('flipInX').addClass('flipOutX');
						logo.removeClass('selected');
					},
					onAfter   : function(){
						var current = avatars.triggerHandler('currentVisible'),
								id = current.attr('id');

						current.removeClass('flipOutX').addClass('flipInX');
						$this.find('.logos a[href="#' + id + '"]').addClass('selected');
					}
				},
				next        : $this.find('.navigation .next'),
				prev        : $this.find('.navigation .prev'),
				pagination  : $this.find('.navigation .pager')
			}).addClass('loaded');

			content.carouFredSel({
						responsive : true,
						auto       : false,
						width      : '100%',
						items: {
							visible  : 1
						}
					})
					.addClass('loaded')
					.touchwipe({
						wipeLeft: function(){
							avatars.trigger('next', 1);
						},
						wipeRight: function(){
							avatars.trigger('prev', 1);
						},
						preventDefaultEvents: false
					});

			logo.click(function(){
				avatars.trigger('slideTo', '#' + this.href.split('#').pop() );
				logo.removeClass('selected');
				$(this).addClass('selected');
				return false;
			});
		});
	
	$('.stories').show();

}