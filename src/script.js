
//Initial Setup
let canvas = document.getElementById("joshsCanvas");
console.log(canvas.width);
console.log(canvas.height);
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#658CBB";
let rangeInput = document.getElementById('ScrollBar').value;
let time = 8000;

let array = [];
for(let i = 0; i < rangeInput * 4; i++)
{
    array.push(Math.floor(Math.random()*-(canvas.height-1)) - 1);
}


function generateArray()
{
    rangeInput = document.getElementById('ScrollBar').value;
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = "#658CBB";
    xCoord = 0;
    array = [];

    for(let i = 0; i < rangeInput * 4; i++)
    {
        array.push(Math.floor(Math.random()*-(canvas.height-1)) - 1);
    }
    
    interval = Math.floor(canvas.width/array.length);

    for(let i = 0; i < array.length; i++)
    {
        ctx.fillRect(xCoord, canvas.height, interval, array[i]);
        xCoord = xCoord + interval;
    }

    time = (8000/(array.length));
}

generateArray();

//Helper Methods to update the board
function changeColor(color, x, h)
{
    ctx.fillStyle = color;
    ctx.fillRect(x, canvas.height, interval, h);
}

function delay (ms) {
    return new Promise((resolve,reject) => setTimeout(resolve,ms));
}

async function sorted()
{
    for(let i = 0; i < array.length; i++){
        changeColor("#02f727", interval*i, array[i]);
        await delay(1000/array.length);
    }

    for(let i = 0; i < array.length; i++){
        changeColor("green", interval*i, array[i]);
    }    
}

//sorted();


//Sorting Algorithms

async function selectionSort()
{
    for(let i = 0; i < array.length; i++)
    {
        let minIndex = i;
        await delay(1000);
        changeColor("orange", interval*i, array[i]);
        for(let j = i + 1; j < array.length; j++)
        {
            await delay(1000);
            changeColor("yellow", interval*j, array[j]);
            if (array[j] < array[minIndex])
            {
                //Color the updated min
                await delay(1000);
                changeColor("#658CBB", minIndex * interval, array[minIndex]);
                changeColor("#orange", j * interval, array[j]);
                minIndex = j;
            }

            else
            {
                //Change back to original color
                changeColor("#658CBB", interval * j , array[j]);
            }
        }
        //Swap
        await delay(1000);
        changeColor("red", interval * i, array[i]);
        changeColor("red", interval * minIndex, array[minIndex]);
        await delay(1000);
        ctx.clearRect(interval * i, canvas.height, interval, array[i]);
        ctx.clearRect(interval * minIndex, canvas.height, interval, array[minIndex]);
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
        changeColor("green", minIndex * interval,array[minIndex]);
        changeColor("green",i * interval,array[i]);

        await delay(1000);
        if(i != minIndex)
        {
            changeColor("#658CBB", i * interval, array[i]);
        }
    }
}

