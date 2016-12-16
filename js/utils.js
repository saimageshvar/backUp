 
// handle login
$("#login_form").submit(function(e) { 
    $.ajax
    ({ 
        url: 'login.php',
        data: $("#login_form").serialize(),
        type: 'post',
        success: function(result)
        {
            if(result!=0)
            {
                $('#login_link').remove();
                $('#register_as_new_sa').remove();
               //  if(result==2)
               //  {
               //     var li = document.createElement('li');
               //     li.id = "register_as_sa";
               //     li.className = "menu-item menu-item-type-post_type menu-item-object-page";
               //     var link = document.createElement('a');
               //     link.href = "";
               //     label = document.createElement('span');
               //     label.textContent = "Register as SA";
               //     $(link).append(label);
               //     $(li).append(link);
               //     $('#menu-main-menu').append(li);
               // }
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
                $('#registration_form')[0].reset();
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

// handle new sa registration
$("#sa_registration_form").submit(function(e) { 
    $.ajax
    ({ 
        url: 'register.php',
        data: $("#sa_registration_form").serialize(),
        type: 'post',
        success: function(result)
        {
            if(result==1)
            {
                $('.registersa').modal('toggle');
                $('#sa_registration_form')[0].reset();
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
                $('.registersa').modal('toggle');
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


// handle sa registration for existing user
$("#register_as_sa").click(function(e) { 
    $.ajax
    ({ 
        url: 'registerAsSa.php',
        type: 'post',
        success: function(result)
        {
            if(result==1)
            {
                BootstrapDialog.show({
                    title: 'Hey!',
                    message: 'Registered Successfully as SA. Join us to make K17 a better one',
                    type: BootstrapDialog.TYPE_SUCCESS,
                    closable: true,
                    draggable: true
                });
                $('#register_as_sa').remove();

            }
            else if(result==0)
            {
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


$('#sa_registration_form_existing').submit(function(e){
    $.ajax
    ({ 
        url: 'registerAsSa.php',
        data: $("#sa_registration_form_existing").serialize(),
        type: 'post',
        success: function(result)
        {
            if(result==1)
            {
                $('.registersa').modal('toggle');
                BootstrapDialog.show({
                    title: 'Hey!',
                    message: 'Registered Successfully as SA. Join us to make K17 a better one',
                    type: BootstrapDialog.TYPE_SUCCESS,
                    closable: true,
                    draggable: true
                });
                $('#register_as_new_sa').remove();
                $('#login_link').remove();
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
