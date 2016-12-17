
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
                $('#sa_registration_form')[0].reset();
                BootstrapDialog.show({
                    title: 'Hey!',
                    message: 'Registered Successfully. We will contact you soon.<br/>Dont forget to check your mail :D',
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
            else if(result==2)
            {
                BootstrapDialog.show({
                    title: 'Hey!',
                    message: 'This email id seems to exist already!',
                    type: BootstrapDialog.TYPE_WARNING,
                    closable: true,
                    draggable: true
                });
            }
            else
            {
                BootstrapDialog.show({
                    title: 'Oops!',
                    message: 'Registration failed!',
                    type: BootstrapDialog.TYPE_DANGER,
                    closable: true,
                    draggable: true
                });
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
         BootstrapDialog.show({
            title: 'Oops!',
            message: 'Some error occured. Please try later',
            type: BootstrapDialog.TYPE_DANGER,
            closable: true,
            draggable: true
        });
     }
 });
    e.preventDefault();
});

