function myFunction()
{
	//degree-names
	var degrees=["Select degree", "B.E ","B.A","B.Arch","B.Com","B.Sc","B.Tech","BBA","BCA","DEEE","Diploma","Dual Degree","Intermediate","M.A","M.E","M.Sc","M.Sc(Integrated)","M.Tech","MBA","MCA","MS","Ph.D","Other"]
	var i;
	var outer = document.createElement("select");
	outer.className="form-control";
	outer.id="degree";
	outer.name="degree";
	for(i=0;i<degrees.length;i++)
	{
		var child=document.createElement("option");
		if(i==0)
		{
			child.value="";
			$(child).attr('selected', 'true');
			$(child).attr('disabled', 'true');
		}
		child.textContent = degrees[i];
		outer.append(child);
	}
	document.getElementsByClassName("degree")[0].append(outer);
	document.getElementsByClassName("sadegree")[0].append(outer);
	
	//course-names
	var courses=["Select department","Aeronautical Engineering","Aerospace Engineering","Agricultural & Irrigation Engineering","Aircraft Maintenance Engineering","Animation","Apparel technology","Applied electronics","Applied Mathematics","Architecture","Automobile Engineering","Avionics","Bio Informatics","Bio Medical Engineering","Biotechnology","Ceramic Technology","Charted Accountancy","Chemical Engineering","Chemistry","Civil Engineering","Communication Systems","Computer Science & Engineering","Cryogenic Engineering","Elecrical Engineering","Electrical & Electronics Engineering","Electronic media","Electronics & Communication Engineering","Electronics & Instrumentation","Embedded Systems","Energy Engineering","Engineering Design","Engineering Physics","English Literature","Finance","Fluid Mechanics","Food Technology","Geo Informatics","Harbour Engineering ","High Voltage Engineering","Hospitality Administration","HR","Humanities & Social Sciences","Industrial Engineering","Information & Communications Technology","Information Technology","Internal Combustion Engineering","Logistics","M.Sc. CS-IT","M.Sc. E-Media","Manufacturing Engineering","Marine Engineering","Marketing","Material Science ","Mathematics","Mechanical Engineering","Mechatronics","Media Sciences","Metallurgy","Mining Engineering","Nano Science and Technology","Other","Photonics ","Physics","Printing Technology","Production Engineering","Remote Sensing","Software Engineering","Systems Engineering & Operations Research","Technology Managment","Telecommunication Engineering","Textile Technology","Theoretical Computer Science","Thermal","Transportation Engineering","VLSI Design","Other"]
	var outer2 = document.createElement("select");
	outer2.className="form-control";
	outer2.id="dept";
	outer2.name="dept";
	for(i=0;i<courses.length;i++)
	{
		var child=document.createElement("option");
		if(i==0)
		{
			child.value="";
			$(child).attr('selected', 'true');
			$(child).attr('disabled', 'true');
		}
		child.textContent = courses[i];
		outer2.append(child);
	}
	document.getElementsByClassName("courses")[0].append(outer2);
	document.getElementsByClassName("sacourses")[0].append(outer2);
	
	//year
	var year=["Select year of study","1","2","3","4","5"]
	var outer3 = document.createElement("select");
	outer3.className="form-control";
	outer3.id="year";
	outer3.name="year";
	for(i=0;i<year.length;i++)
	{
		var child=document.createElement("option");
		if(i==0)
		{
			child.value="";
			$(child).attr('selected', 'true');
			$(child).attr('disabled', 'true');
		}
		child.textContent = year[i];
		outer3.append(child);
	}
	document.getElementsByClassName("year")[0].append(outer3);
	document.getElementsByClassName("sayear")[0].append(outer3);
	
	//college
	var college=["Select college","1","2","3","4","5"]
	var outer4 = document.createElement("select");
	outer4.className="form-control";
	outer4.id="college";
	outer4.name="college";
	for(i=0;i<college.length;i++)
	{
		var child=document.createElement("option");
		if(i==0)
		{
			child.value="";
			$(child).attr('selected', 'true');
			$(child).attr('disabled', 'true');
		}
		child.textContent = college[i];
		outer4.append(child);
	}
	document.getElementsByClassName("college")[0].append(outer4);
	document.getElementsByClassName("sacollege")[0].append(outer4);
}
