 
// handle login
$("#login_form").submit(function(e) { 
    var flag = returnCheckForLogin();
    if(flag)
    {
        $.ajax
        ({ 
            url: 'login.php',
            data: $("#login_form").serialize(),
            type: 'post',
            dataType: "json",
            async: false,
            success: function(result)
            {
                if(result.response!=0)
                {
                    $('#login_link').remove();
                    $('#register_as_new_sa').remove();
                    $('.login').modal('toggle');
                    BootstrapDialog.show({
                        title: 'Hey '+result.name+' 😁',
                        message: 'Successfully logged in!',
                        type: BootstrapDialog.TYPE_SUCCESS,
                        closable: true,
                        draggable: true
                    });

                    if(result.response==2)
                    {
                        var li2 = document.createElement('li');
                        li2.className = "menu-item menu-item-type-post_type menu-item-object-page";
                        var link2 = document.createElement('a');
                        link2.href = "#";
                        label2 = document.createElement('span');
                        label2.textContent = "Register as SA";
                        $(link2).append(label2);
                        $(li2).append(link2);
                        li2.addEventListener("click", function() { 
                            $('.registersa').modal('toggle');
                        });
                        $('#menu-main-menu').append(li2);

                    }
                // adding dashboard
                var li1 = document.createElement('li');
                li1.className = "menu-item menu-item-type-post_type menu-item-object-page";
                var link1 = document.createElement('a');
                link1.href = "#"
                label1 = document.createElement('span');
                label1.textContent = "Hey, "+result.name;
                $(link1).append(label1);
                $(li1).append(link1);
                li1.addEventListener("click", function() { BootstrapDialog.show({
                    title: 'Hey!',
                    message: 'Currently working on your dashboard. 🙈 <br/>Please refresh to take a look at it. ',
                    type: BootstrapDialog.TYPE_SUCCESS,
                    closable: true,
                    draggable: true
                });
            });
                $('#menu-main-menu').append(li1);


                // adding logout
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
            else if(result.response==0)
            {
                $('.login').modal('toggle');
                BootstrapDialog.show({
                    title: 'Oops',
                    message: 'Login Failed 😯',
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
    }
    else
    {
        BootstrapDialog.show({
            title: 'Hey!',
            message: 'Please enter valid credentials 😒',
            type: BootstrapDialog.TYPE_WARNING,
            closable: true,
            draggable: true
        });
    }
    e.preventDefault();
});


// handle new registration
$("#registration_form").submit(function(e) { 
    var flag = returnCheck();
    if(flag)
    {

        $.ajax
        ({ 
            url: 'register.php',
            data: $("#registration_form").serialize(),
            type: 'post',
            success: function(result)
            {
                if(result==1)
                {
                    $('#registration_form')[0].reset();
                    $("#city").empty().trigger('change');
                    $("#department").empty().trigger('change');
                    $("#degree").empty().trigger('change');
                    $("#year").empty().trigger('change');
                    $("#college").empty().trigger('change');


                    BootstrapDialog.show({
                        title: 'Hey!',
                        message: 'Registered Successfully. You are a k! warrior now 😎 <br/> Dont forget to check your mail',
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
                    message: 'This email id seems to exist already 😧',
                    type: BootstrapDialog.TYPE_WARNING,
                    closable: true,
                    draggable: true
                });
            }
            else
            {
                BootstrapDialog.show({
                    title: 'Oops!',
                    message: 'Registration failed 😯',
                    type: BootstrapDialog.TYPE_DANGER,
                    closable: true,
                    draggable: true
                });
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
           BootstrapDialog.show({
            title: 'Oops!',
            message: 'Some error occured 😪 <br/> Please try after refreshing',
            type: BootstrapDialog.TYPE_DANGER,
            closable: true,
            draggable: true
        });
       }
   });
    }
    else
    {
        BootstrapDialog.show({
            title: 'Hey!',
            message: 'We won\'t spam you 😒 <br/> Please enter valid details',
            type: BootstrapDialog.TYPE_WARNING,
            closable: true,
            draggable: true
        });
    }
    e.preventDefault();
});


// event subscription
$("#subscribe_event").click(function(e) { 
    $.ajax
    ({ 
        url: 'subscribe.php',
        data:'eventName=' + $('#eventsDetails .modal-title')[0].innerHTML,
        type: 'post',
        success: function(result)
        {
            if(result==1)
            {
                BootstrapDialog.show({
                    title: 'Hey!',
                    message: 'Event Subscribed 😀 <br/> We will update you on this',
                    type: BootstrapDialog.TYPE_SUCCESS,
                    closable: true,
                    draggable: true
                });
            }
            else if(result==0)
            {
                BootstrapDialog.show({
                    title: 'Oops!',
                    message: 'Your session ended 😶 <br/> Please login again to subscribe',
                    type: BootstrapDialog.TYPE_DANGER,
                    closable: true,
                    draggable: true
                });
            }
            else
            {
                BootstrapDialog.show({
                    title: 'Oops!',
                    message: 'You should login before you subscribe 😕',
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
