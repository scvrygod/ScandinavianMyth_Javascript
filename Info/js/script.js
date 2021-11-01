let inputName = document.querySelector('.name');
let inputSurname = document.querySelector('.surname')

inputName.value = localStorage.getItem('name');

let button = document.querySelector('.button1');
let button2 = document.querySelector('.button2');


var radios = document.getElementsByName('yesno');

var checkboxes = document.getElementsByName('doulike');

var rec = document.querySelector('.textarea');







let attemp=1;
button.onclick = function()
{
    console.log(`---------Attemp №${attemp}---------`);
    console.log(`Name: ${inputName.value}`);
    inputName.value="";
    console.log(`Surname: ${inputSurname.value}`);
    inputSurname.value="";
    
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
    
            console.log(`Do you like this website:${radios[i].value}`);
    
            break;
        }
    }

    console.log("Which pages do you like the most?");

     for (var i = 0, length = checkboxes.length; i < length; i++) {
         
     if (checkboxes[i].checked) {
    
        console.log(`${i+1}) ${checkboxes[i].value}`);
    } 
    else {
        console.log(`${i+1}) ----`);
    }
    
    }

    console.log("Your reccomendation: ");
    
    if(rec.value=="")
    {
        console.log("I don't have reccomendation");
        
    }
    else
    {
        console.log(rec.value);
    }

    console.log("Your mark to us:");
 
        var sel = document.getElementById('val').selectedIndex;
        var options = document.getElementById('val').options;
        console.log(options[sel].text);
    

    attemp++;
    
}

button2.onclick = function()
{
    
}