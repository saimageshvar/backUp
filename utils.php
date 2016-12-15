<?php

	//check valid registration
function checkRegistration()
{
	if(isset($_SESSION['registration']))
	{
		if($_SESSION['registration'] == "failure")
		{
			?>
			<script>
				BootstrapDialog.show({
					title: 'Oops!',
					message: 'Registration Failed',
					type: BootstrapDialog.TYPE_DANGER,
					closable: true,
					draggable: true
				});
			</script>
			<?php
		}
		else if($_SESSION['registration'] == "success")
		{
			?>
			<script>
				BootstrapDialog.show({
					title: 'Hey!',
					message: 'Registered Successfully. Please login to continue.<br/>Dont forget to check your mail :D',
					type: BootstrapDialog.TYPE_SUCCESS,
					closable: true,
					draggable: true
				});
			</script>
			<?php
		}
		unset($_SESSION['registration']);
	}
}

	//check login
function checkLogin()
{
	if(isset($_SESSION['login']))
	{
		if($_SESSION['login'] == "success")
		{
			?>
			<script>
				BootstrapDialog.show({
					title: 'Hey <?php echo $_SESSION['user']['name'] ?> !',
					message: 'Welcome back to Kurukshetra 2017',
					type: BootstrapDialog.TYPE_SUCCESS,
					closable: true,
					draggable: true
				});
			</script>
			<?php
		}
	}

}

	//checkSA
function checkSA()
{
	if(isset($_SESSION['SARegistration']))
	{
		if($_SESSION['SARegistration'] == "failure")
		{
			?>
			<script>
				BootstrapDialog.show({
					title: 'Dai Loosu',
					message: 'Login as SA Failed',
					type: BootstrapDialog.TYPE_DANGER,
					closable: true,
					draggable: true
				});
			</script>			
			<?php
		}
		else if($_SESSION['SARegistration'] == "success")
		{
			?>
			<script>
				BootstrapDialog.show({
					title: 'Hey!',
					message: 'Successfully logged in as SA !Your k! id is <?php echo $_SESSION['user']['userId'] ?>',
					type: BootstrapDialog.TYPE_SUCCESS,
					closable: true,
					draggable: true
				});
			</script>
			<?php
		}
		unset($_SESSION['SARegistration']);
	}

}


?>