
//Initial Setup
let canvas = document.getElementById("joshsCanvas");
console.log(canvas.width);
console.log(canvas.height);
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#658CBB";
let rangeInput = document.getElementById('ScrollBar').value;
let array = [];
for(let i = 0; i < rangeInput * 4; i++)
{
    array.push(Math.ceil(Math.random()*-canvas.height));
}


function generateArray()
{
    rangeInput = document.getElementById('ScrollBar').value;
    ctx.clearRect(0,0, canvas.width, canvas.height);
    xCoord = 0;
    array = [];

    for(let i = 0; i < rangeInput * 4; i++)
    {
        array.push(Math.ceil(Math.random()*-canvas.height));
    }
    
    interval = Math.floor(canvas.width/array.length);

    for(let i = 0; i < array.length; i++)
    {
        ctx.fillRect(xCoord, canvas.height, interval, array[i]);
        xCoord = xCoord + interval;
    }
}

generateArray();

//Sorting Algorithms

selectionSort()
{
    for(let i = 0; i < array.length; i++)
    {
        let minIndex = i;
        for(let j = i + 1; j < array.length; j++)
        {
            if (array[j] < array[minIndex])
            {
                minIndex = j;
            }
        }
        //Swap
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
}

