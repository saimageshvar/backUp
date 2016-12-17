var check = true;
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
		}			
		key.style.borderWidth="1px";		
}
function Validate(formid)
{
	if(check)
	{		
		var degree = $('#degree-select');
        if (degree.val() === '') 
		{
			alert("Invalid");
            //$('#selBooks').focus();
		}

		/*if($('#degree-select').val()=="")
		{
			alert("Invalid")
		}*/
		else
		{
			formid.method = "post";
			formid.action = "register.php";
		}
	}
	/*if(check)
	{
		formid.method = "post";
		formid.action = "register.php";
	}
	else
		alert("Invalid")*/
}

function returnCheck()
{
	return check;
}