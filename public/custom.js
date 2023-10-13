$(document).ready(function(){
    importCSSL: true,
    $('#printt').click(function(){
        
        $('#editForm').printThis()
        loadCSS: "editStudent/css";
    });
});