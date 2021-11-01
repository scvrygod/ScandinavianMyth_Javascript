
//Welcome to NAME
let username = localStorage.getItem('name');
if(!username)
{
let prompte = prompt("Who are u?");
console.log(prompte);

    localStorage.setItem('name',`${prompte}`);

    const textElement = document.querySelector('.welcome');

    textElement.insertAdjacentText(
    "afterbegin",

    `${localStorage.getItem('name')}, `
    )

    }
    else
    {
        const textElement = document.querySelector('.welcome');

    textElement.insertAdjacentText(
    "afterbegin",

    `${localStorage.getItem('name')}, `
    )
    }