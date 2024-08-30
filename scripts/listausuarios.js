$(document).ready(function(){
    $.ajax({
        url: 'https://localhost:7100/Users',
        type: 'GET',
        success: function(user) {
            debugger;
            $("#usuarios-lista").append("<li>" + user + "</li>");            
        },
        error: function(error) {
            console.log("Error:", error);
        }
    });
});
