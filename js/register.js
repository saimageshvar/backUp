var check;
function validatename(key)
{
	var name=key.value;
	if (!name.match(/^[a-zA-Z. ]*$/))
	{
		key.style.borderColor="red";
		check = false;
	}
	else
	{
		key.style.borderColor="green";
		check = true;
	}
	key.style.borderWidth="1px";
}
function validatephone(key) {      
        var phone = key.value;				
        if((phone.match(/^[0-9]+$/) == null) || phone.length != 10)
		{
			check = false;
			key.style.borderColor="red";
		}	
		else
		{
			key.style.borderColor="green";
			check =true;
		}
		key.style.borderWidth="1px";
} 
function validatepass(key) {      
		var pass = key.value;
        if(pass.length<8)
		{
			check = false;
			key.style.borderColor="red";
		}	
		else
		{
			key.style.borderColor="green";
			check = true;
		}
		key.style.borderWidth="1px";
}
function validatemail(key) { 
		var x = key.value;
		var atpos = x.indexOf("@");
		var dotpos = x.lastIndexOf(".");
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) 
		{
			check = false;
			key.style.borderColor="red";
		}
		else
		{
			key.style.borderColor="green";
			check = true;
		}			
		key.style.borderWidth="1px";		
}
function Validate(formid)
{
	if(check)
	{
		formid.method = "post";
		formid.action = "register.php";
	}
	else
		alert("Invalid")
}
function Validatesa(formid)
{
	if(check)
	{
		formid.method = "post";
		formid.action = "register.php";
	}
	else
		alert("Invalid")
}