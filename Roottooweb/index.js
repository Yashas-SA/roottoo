function opennavlink() {
var navigtion=document.getElementById("navigtion");
if(navigtion.style.display === "none")
{
    navigtion.style.display = "block";
}
else{
    navigtion.style.display = "none";
}
}

function closenavlink() {
    var navigtion=document.getElementById("navigtion");
    if(navigtion.style.display === "block")
    {
        navigtion.style.display = "none";
    }
    else{
        navigtion.style.display = "block";
    }
    }