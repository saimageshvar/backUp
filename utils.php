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
					title: 'Dai Loosu',
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
					message: 'Successfully logged in!Your k! id is <?php echo $_SESSION['user']['userId'] ?>',
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
			if($_SESSION['login'] == "failure")
			{
			?>
			<script>
				BootstrapDialog.show({
					title: 'Dai Loosu',
					message: 'Login Failed',
					type: BootstrapDialog.TYPE_DANGER,
					closable: true,
					draggable: true
				});
			</script>
			<?php
			}
			else if($_SESSION['login'] == "success")
			{
			?>
			<script>
				BootstrapDialog.show({
					title: 'Hey!',
					message: 'Successfully logged in!Your k! id is <?php echo $_SESSION['user']['userId'] ?>',
					type: BootstrapDialog.TYPE_SUCCESS,
					closable: true,
					draggable: true
				});
			</script>
			<?php
			}
			unset($_SESSION['login']);
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
			<script>alert('Your SA registration failed');</script>
			<?php
			}
			else if($_SESSION['SARegistration'] == "success")
			{
			?>
			<script>alert('Your SA registration is successful');</script>
			<?php
			}
			unset($_SESSION['SARegistration']);
		}
		
	}
	
	
?>