 
// handle login
$("#login_form").submit(function(e) { 
    $('.progress_loader').show();
    $('.login_submit').hide();
    var flag = returnCheckForLogin();
    if(flag)
    {
        $.ajax
        ({ 
            url: 'login.php',
            data: $("#login_form").serialize(),
            type: 'post',
            dataType: "json",
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
                $('#password').val('');
                $('#password').focus();
            }
            $('#login_form')[0].reset();
            $('.progress_loader').hide();
            $('.login_submit').show();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
           BootstrapDialog.show({
            title: 'Oops!',
            message: 'Some error occured 😪 <br/> Please try after refreshing',
            type: BootstrapDialog.TYPE_DANGER,
            closable: true,
            draggable: true
        });
           $('.progress_loader').hide();
           $('.login_submit').show();
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
        $('.progress_loader').hide();
        $('.login_submit').show();
    }
    e.preventDefault();
});


// handle new registration
$("#registration_form").submit(function(e) { 
	$('.progress_loader').show();
	$('.reg_submit').hide();
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
            $('.progress_loader').hide();
            $('.reg_submit').show();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
           BootstrapDialog.show({
            title: 'Oops!',
            message: 'Some error occured 😪 <br/> Please try after refreshing',
            type: BootstrapDialog.TYPE_DANGER,
            closable: true,
            draggable: true
        });
           $('.progress_loader').hide();
           $('.reg_submit').show();
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
        $('.progress_loader').hide();
        $('.reg_submit').show();
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
                    message: 'You should <a href=\'index.php#login\'>login</a> before you subscribe 😕',
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

// workshop subscription
$("#subscribe_workshop").click(function(e) { 
    $.ajax
    ({ 
        url: 'workshopSubscribe.php',
        data:'workshopName=' + $('#eventsDetails .modal-title')[0].innerHTML,
        type: 'post',
        success: function(result)
        {
            if(result==1)
            {
                BootstrapDialog.show({
                    title: 'Hey!',
                    message: 'Workshop Subscribed 😀 <br/> We will update you on this',
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
                    message: 'You should <a href=\'index.php#login\'>login</a> before you subscribe 😕',
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

// send reset instructions
$("#send_reset_instructions").click(function(e) { 
    $('.progress_loader').show();
    $('#send_reset_instructions').hide();
    var flag = returnEmail();
    if(flag)
    {

        $.ajax
        ({ 
            url: 'sendResetInstructions.php',
            data:'emailId=' + $('#send_reset_email')[0].value,
            type: 'post',
            success: function(result)
            {
                if(result==1)
                {
                 $('.forgot_password').modal('hide');
                 $('.resetpassword').modal('show');					
                 BootstrapDialog.show({
                    title: 'Hey!',
                    message: 'Please check your email for further instructions 🙂',
                    type: BootstrapDialog.TYPE_SUCCESS,
                    closable: true,
                    draggable: true
                });
                 $('#send_reset_email')[0].value="";

             }
             else if(result==0)
             {
                BootstrapDialog.show({
                    title: 'Oops!',
                    message: 'This email id is not registered with Kurukshetra 2017 😦',
                    type: BootstrapDialog.TYPE_WARNING,
                    closable: true,
                    draggable: true
                });
            }
            $('.progress_loader').hide();
            $('#send_reset_instructions').show();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
           BootstrapDialog.show({
            title: 'Oops!',
            message: 'Some error occured 😪 <br/> Please try after refreshing',
            type: BootstrapDialog.TYPE_DANGER,
            closable: true,
            draggable: true
        });
           $('.progress_loader').hide();
           $('#send_reset_instructions').show();
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
        $('.progress_loader').hide();
        $('#send_reset_instructions').show();
    }   
    e.preventDefault();
});

// reset password
$("#reset_password_form").submit(function(e) { 
    $('.progress_loader').show();
    $('.password_reset_submit').hide();
    var flag = returnPasswordReset();
    if(flag)
    {

        $.ajax
        ({ 
            url: 'resetPassword.php',
            data: $("#reset_password_form").serialize(),
            type: 'post',
            success: function(result)
            {
                if(result==1)
                {
                 $('.resetpassword').modal('hide');
                 BootstrapDialog.show({
                    title: 'Hey!',
                    message: 'Your password has been reset.<br/>Please login to continue. 😀',
                    type: BootstrapDialog.TYPE_SUCCESS,
                    closable: true,
                    draggable: true
                });
                 $("#reset_password_form")[0].reset();
                 $("#login_form")[0].reset();
                 $('#registration').modal('show');
             }
             else if(result==0)
             {
                BootstrapDialog.show({
                    title: 'Oops!',
                    message: 'Enter appropriate access token. 😕',
                    type: BootstrapDialog.TYPE_WARNING,
                    closable: true,
                    draggable: true
                });
            }
            $('.progress_loader').hide();
            $('.password_reset_submit').show();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
           BootstrapDialog.show({
            title: 'Oops!',
            message: 'Some error occured 😪 <br/> Please try after refreshing',
            type: BootstrapDialog.TYPE_DANGER,
            closable: true,
            draggable: true
        });
           $('.progress_loader').hide();
           $('.password_reset_submit').show();
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
        $('.progress_loader').hide();
        $('.password_reset_submit').show();
    }   
    e.preventDefault();
});

// register for workshop
$("#workshop_team_members_form").submit(function(e) { 
    $('.progress_loader').show();
    $('.workshop_register_submit').hide();
    var flag = returnWorkshopRegistration();
    if(flag)
    {
        var formData = $("#workshop_team_members_form").serializeArray();
        formData.push({name: "workshopName", value: $('.workshop-name')[0].innerHTML});

        $.ajax
        ({ 
            url: 'registerWorkshop.php',
            data: formData,
            type: 'post',
            dataType: "json",
            success: function(result)
            {
                if(result.response==1)
                {
                    BootstrapDialog.show({
                        title: 'Hey!',
                        message: 'Registration is successful 😀 <br/> Your transaction id is <strong>'
                        + result.t_id + '</strong>. Proceed to payment <a href=\'https://www.onlinesbi.com/prelogin/icollecthome.htm?corpID=607468\' target=\'_blank\'>here</a><br/> Please check your email for futher instructions',
                        type: BootstrapDialog.TYPE_SUCCESS,
                        closable: true,
                        draggable: true
                    });
                    $("#workshop_team_members_form")[0].reset();
                }
                else if(result.response==3)
                {
                    BootstrapDialog.show({
                        title: 'Oops!',
                        message: 'One/Some of the email ids given are not registered 😕',
                        type: BootstrapDialog.TYPE_WARNING,
                        closable: true,
                        draggable: true
                    });
                }
                else if(result.response==0)
                {
                    BootstrapDialog.show({
                        title: 'Oops!',
                        message: 'Registration failed 😯',
                        type: BootstrapDialog.TYPE_DANGER,
                        closable: true,
                        draggable: true
                    });
                }
                else if(result.response==2)
                {
                    BootstrapDialog.show({
                        title: 'Oops!',
                        message: 'You should <a href=\'index.php#login\'>login</a> before you register 😕',
                        type: BootstrapDialog.TYPE_DANGER,
                        closable: true,
                        draggable: true
                    });
                }
                $('.progress_loader').hide();
                $('.workshop_register_submit').show();
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
               BootstrapDialog.show({
                title: 'Oops!',
                message: 'Some error occured 😪 <br/> Please try after refreshing',
                type: BootstrapDialog.TYPE_DANGER,
                closable: true,
                draggable: true
            });
               $('.progress_loader').hide();
               $('.workshop_register_submit').show();
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
        $('.progress_loader').hide();
        $('.workshop_register_submit').show();
    }   
    e.preventDefault();
});
