
function generate()
{
    var myWindow = window.open("", "", "width=300,height=350"),
    photos = document.getElementsByName("photo"),
    text = document.getElementById("txt");
    myWindow.focus();
    for(var i=0 ; i<photos.length ; i++)
    {
        if(photos[i].checked)
            myWindow.document.write('<img src='+photos[i].value +' style="width: 250px; height: 250px; display:block; margin: auto; " ><br>');
    }
    myWindow.document.write(text.value,"<br><br>");
    text.value="";


    myWindow.document.write('<input type="button" value="Close Preview" onclick="self.close()" style= " display:block; margin: auto; width: 150px; height: 40px; border: 2px; border-radius: 2px; color: beige; background-color: crimson;" />');
 
}