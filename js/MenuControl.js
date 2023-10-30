function Display(target, source)
{
    var client = new XMLHttpRequest();
    client.open('GET', '/html/' + source + '.html');
    client.onreadystatechange = function() 
    {
        if(client.readyState == 3) 
        {
        }
        else if(client.readyState = 4)
        {
            var targetArea = document.getElementById(target);
            targetArea.innerHTML = client.responseText;
        }
    }
    client.send();
}