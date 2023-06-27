import {canvas} from "../script.js"
import {ctx} from "../script.js"
import {interval} from "../script.js"
import {delay} from "../script.js"
import {changeColor} from "../script.js"
import {sorted} from "../script.js"
import {array} from "../script.js"
import {enable} from "../script.js"

//Light blue (#00f7ff) & red
let colors = ['#00f7ff', 'red'];

export default async function insertionSort()
{
    changeColor("blue",0,array[0]);
    for(let i = 1; i < array.length; i++)
    {
        let curr = array[i];
        let j = i - 1;
        while(j >= 0 && Math.abs(array[j]) > Math.abs(curr))
        {
            //Before Swap
            changeColor(colors[1], (j+1) * interval, array[j+1]);
            changeColor(colors[1], j * interval, array[j]);
            await delay(1000/array.length);
            
            //Swapping
            let temp = array[j];
            ctx.clearRect(j*interval, canvas.height, interval, array[j]);
            ctx.clearRect((j+1)*interval, canvas.height, interval, array[j+1]);
            array[j] = array[j+1];
            array[j+1] = temp;
            changeColor(colors[0], (j+1) * interval, array[j+1]);
            changeColor(colors[0], j * interval, array[j]);
            await delay(1000/array.length);
            changeColor('blue', (j+1) * interval, array[j+1]);
            j = j - 1;
        }
        
        await delay(1000/array.length);
        changeColor("blue",(j+1)*interval, array[j+1])
    }
    sorted();
    await delay(1000);
    enable();
}