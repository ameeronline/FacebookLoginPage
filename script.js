$(document).ready(function(){
    $("#signupform").validate({
        rules:{
            email:{
                required:true,
                email:true
            },
            psswd:{
                required:true,
                minlength:8,
                maxlength:16
            }
        }
    })
})