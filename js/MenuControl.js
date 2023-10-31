function Display(target, source, callback)
{
    var args = Object.values(arguments); 
    args.shift(); 
    args.shift(); 
    args.shift(); 

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
            if(callback != null)
            {
                callback(...args);
            }
        }
    }
    client.send();
}

function SwitchHeader(currentElement)
{
    var children = document.getElementById('navbar').childNodes;
    children.forEach(function(item)
    {
        if(item.classList != null)
        item.classList.remove('active');
    });
    currentElement.classList.add("active");
}