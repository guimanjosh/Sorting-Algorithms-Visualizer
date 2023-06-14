import bubbleSort from "./algorithms/bubbleSort.js"
import selectionSort from "./algorithms/selectionSort.js"
import insertionSort from "./algorithms/insertionSort.js"
import mergeSort from "./algorithms/mergeSort.js";

//Initial Setup
export let canvas = document.getElementById("joshsCanvas");
export let ctx = canvas.getContext("2d");
ctx.fillStyle = "#658CBB";
export let rangeInput = document.getElementById('ScrollBar').value;
export let time = 1000;
export let xCoord = 0;
export let interval = 0;

export let array = [];
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
export function changeColor(color, x, h)
{
    ctx.fillStyle = color;
    ctx.fillRect(x, canvas.height, interval, h);
}

export function delay (ms) {
    return new Promise((resolve,reject) => setTimeout(resolve,ms));
}


export async function sorted()
{
    for(let i = 0; i < array.length; i++){
        changeColor("#02f727", interval*i, array[i]);
        await delay(1000/array.length);
    }

    for(let i = 0; i < array.length; i++){
        changeColor("green", interval*i, array[i]);
    }    
}



async function sort()
{
    let choice = document.querySelector('input[name="SortAlgo"]:checked').value;
    if(choice == "SelectionSort")
    {
        selectionSort();
    }
    
    else if(choice == "BubbleSort")
    {
        bubbleSort();
    }

    else if(choice == "InsertionSort")
    {
        insertionSort();
    }
    else if(choice == "MergeSort")
    {
        mergeSort(array);
    }
}

//Event listeners.
document.getElementById("ScrollBar").addEventListener("input", generateArray);
document.getElementById("newArray").addEventListener("click",generateArray);
document.getElementById("sortButton").addEventListener("click",sort);