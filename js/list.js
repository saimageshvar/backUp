function populateForm()
{

	//degree-names
	var degrees=["B.E ","B.A","B.Arch","B.Com","B.Sc","B.Tech","BBA","BCA","DEEE","Diploma","Dual Degree","Intermediate","M.A","M.E","M.Sc","M.Sc(Integrated)","M.Tech","MBA","MCA","MS","Ph.D","Other"]
	var i;
	var outer = document.createElement("select");
	outer.className="form-control degree-select";
	outer.style = "width: 100%";
	outer.id="degree";
	outer.name="degree";
	var child=document.createElement("option");
	child.textContent ="";
	child.value ="";
	outer.append(child);
	for(i=0;i<degrees.length;i++)
	{
		child=document.createElement("option");
		child.value = degrees[i];
		child.textContent = degrees[i];
		outer.append(child);
	}
	document.getElementsByClassName("degree")[0].append(outer);
	$(outer).clone().appendTo($('.degree')[1]);
	
	// init select2
	$('.degree-select').first().select2({
		placeholder: 'Select your degree',
		theme: 'bootstrap',
	});
	$('.degree-select').select2({
		placeholder: 'Select your degree',
		theme: 'bootstrap',
	});	
	//department-names
	var departments=["Aeronautical Engineering","Aerospace Engineering","Agricultural & Irrigation Engineering","Aircraft Maintenance Engineering","Animation","Apparel technology","Applied electronics","Applied Mathematics","Architecture","Automobile Engineering","Avionics","Bio Informatics","Bio Medical Engineering","Biotechnology","Ceramic Technology","Charted Accountancy","Chemical Engineering","Chemistry","Civil Engineering","Communication Systems","Computer Science & Engineering","Cryogenic Engineering","Elecrical Engineering","Electrical & Electronics Engineering","Electronic media","Electronics & Communication Engineering","Electronics & Instrumentation","Embedded Systems","Energy Engineering","Engineering Design","Engineering Physics","English Literature","Finance","Fluid Mechanics","Food Technology","Geo Informatics","Harbour Engineering ","High Voltage Engineering","Hospitality Administration","HR","Humanities & Social Sciences","Industrial Engineering","Information & Communications Technology","Information Technology","Internal Combustion Engineering","Logistics","M.Sc. CS-IT","M.Sc. E-Media","Manufacturing Engineering","Marine Engineering","Marketing","Material Science ","Mathematics","Mechanical Engineering","Mechatronics","Media Sciences","Metallurgy","Mining Engineering","Nano Science and Technology","Other","Photonics ","Physics","Printing Technology","Production Engineering","Remote Sensing","Software Engineering","Systems Engineering & Operations Research","Technology Managment","Telecommunication Engineering","Textile Technology","Theoretical Computer Science","Thermal","Transportation Engineering","VLSI Design","Other"]
	var outer2 = document.createElement("select");
	outer2.className="form-control department-select";
	outer2.id="department";
	outer2.name="department";
	outer2.style = "width: 100%;height:40px";
	var child=document.createElement("option");
	child.textContent ="";
	child.value ="";
	outer2.append(child);
	for(i=0;i<departments.length;i++)
	{
		child=document.createElement("option");
		child.value = departments[i];
		child.textContent = departments[i];
		outer2.append(child);
	}
	document.getElementsByClassName("courses")[0].append(outer2);
	$(outer2).clone().appendTo($('.courses')[1]);

// init select2
$('.department-select').first().select2({
	placeholder: 'Select your degree',
	theme: 'bootstrap',
});
$('.department-select').select2({
	placeholder: 'Select your department',
	theme: 'bootstrap',
});	
	//year
	var year=["1","2","3","4","5"]
	var outer3 = document.createElement("select");
	outer3.className="form-control year-select";
	outer3.id="year";
	outer3.name="year";
	outer3.style = "width: 100%";
	var child=document.createElement("option");
	child.textContent ="";
	child.value ="";
	outer3.append(child);
	for(i=0;i<year.length;i++)
	{
		child=document.createElement("option");
		child.textContent = year[i];
		child.value = year[i];
		outer3.append(child);
	}
	document.getElementsByClassName("year")[0].append(outer3);
	$(outer3).clone().appendTo($('.year')[1]);

	// init select2
	$('.year-select').first().select2({
		placeholder: 'Select your year',
		theme: 'bootstrap',
	});
	$('.year-select').select2({
		placeholder: 'Select your year',
		theme: 'bootstrap',
	});	
	$.fn.modal.Constructor.prototype.enforceFocus = function() {};


}
//colleges list
function displaycolleges(collegesArray)
{
	var outer4 = document.createElement("select");
	outer4.className="form-control college-select";
	outer4.id="college";
	outer4.name="college";
	outer4.style = "width: 100%";
	var child=document.createElement("option");
	child.textContent ="";
	child.value ="";
	outer4.append(child);
	child=document.createElement("option");
	child.textContent ="Other";
	child.value ="Other";
	outer4.append(child);
	for(i=0;i<collegesArray[0].colleges.length;i++)
	{
		child=document.createElement("option");
		child.textContent = collegesArray[0].colleges[i];
		child.value = collegesArray[0].colleges[i];
		outer4.append(child);
	}
	document.getElementsByClassName("college")[0].append(outer4);
	$(outer4).clone().appendTo($('.college')[1]);

	// init select2
	$('.college-select').first().select2({
		placeholder: 'Select your college',
		theme: 'bootstrap',
	});
	$('.college-select').select2({
		placeholder: 'Select your college',
		theme: 'bootstrap',
	});	
}