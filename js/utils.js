 
// handle login
$("#login_form").submit(function(e) { 
    $.ajax
    ({ 
        url: 'login.php',
        data: $("#login_form").serialize(),
        type: 'post',
        success: function(result)
        {
            if(result==1)
            {
                $('#login_link').remove();
                $('.login').modal('toggle');
                BootstrapDialog.show({
                    title: 'Hey!',
                    message: 'Successfully logged in!',
                    type: BootstrapDialog.TYPE_SUCCESS,
                    closable: true,
                    draggable: true
                });
                var li = document.createElement('li');
                li.className = "menu-item menu-item-type-post_type menu-item-object-page";
                var link = document.createElement('a');
                link.href = "logout.php";
                label = document.createElement('span');
                label.textContent = "Logout";
                $(link).append(label);
                $(li).append(link);
                $('#menu-main-menu').append(li);


            }
            else if(result==0)
            {
                $('.login').modal('toggle');
                BootstrapDialog.show({
                    title: 'Oops',
                    message: 'Login Failed',
                    type: BootstrapDialog.TYPE_DANGER,
                    closable: true,
                    draggable: true
                });
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
         alert("some error");
     }
 });
    e.preventDefault();
});


// handle new registration
$("#registration_form").submit(function(e) { 
    $.ajax
    ({ 
        url: 'register.php',
        data: $("#registration_form").serialize(),
        type: 'post',
        success: function(result)
        {
            if(result==1)
            {
                $('.login').modal('toggle');
                BootstrapDialog.show({
                    title: 'Hey!',
                    message: 'Registered Successfully. Please login to continue.<br/>Dont forget to check your mail :D',
                    type: BootstrapDialog.TYPE_SUCCESS,
                    closable: true,
                    draggable: true
                });
                // var li = document.createElement('li');
                // li.className = "menu-item menu-item-type-post_type menu-item-object-page";
                // var link = document.createElement('a');
                // link.href = "logout.php";
                // label = document.createElement('span');
                // label.textContent = "Logout";
                // $(link).append(label);
                // $(li).append(link);
                // $('#menu-main-menu').append(li);


            }
            else if(result==0)
            {
                $('.login').modal('toggle');
                BootstrapDialog.show({
                    title: 'Oops!',
                    message: 'Registration Failed',
                    type: BootstrapDialog.TYPE_DANGER,
                    closable: true,
                    draggable: true
                });
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
         alert("some error");
     }
 });
    e.preventDefault();
});

