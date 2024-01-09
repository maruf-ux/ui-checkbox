$(document).ready(function(){
    $("#checkbox").on("click", function(){
         if (this.checked) { 
                $("#ParFirstAddr").val($("#PreFirstAddr").val());                         
    }
    else {
        $("#PreFirstAddr").val('');          
    }
    });
});

