$(document).ready(function(){
    $.ajax({
        url: 'https://localhost:7100/Users/Division?a=7&b=25',
        type: 'GET',
        success: function (data) {
            alert(data);
        },
        error: function(error) {
            console.log("Error:", error);
        }
    });
});