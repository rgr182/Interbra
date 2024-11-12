$(document).ready(function() 
{
    $.get("https://localhost:7100/GetProducts?amount=3", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
      });
});
