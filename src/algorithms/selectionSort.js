import {canvas} from "../script.js"
import {ctx} from "../script.js"
import {interval} from "../script.js"
import {delay} from "../script.js"
import {changeColor} from "../script.js"
import {sorted} from "../script.js"
import {array} from "../script.js"

export default async function selectionSort()
{
    for(let i = 0; i < array.length; i++)
    {
        let minIndex = i;
        await delay(1000/array.length);
        //changeColor("orange", interval*i, array[i]);
        for(let j = i + 1; j < array.length; j++)
        {
            //await delay(1000);
            changeColor("yellow", interval*j, array[j]);
            
            if (Math.abs(array[j]) < Math.abs(array[minIndex]))
            {
                //Color the updated min
                changeColor("#658CBB", minIndex * interval, array[minIndex]);
                //changeColor("#orange", j * interval, array[j]);
                minIndex = j;
            }

            else
            {
                //Change back to original color
                changeColor("#658CBB", interval * j , array[j]);
            }
        }
        //Swap
        await delay(1000/array.length);
        changeColor("red", interval * i, array[i]);
        changeColor("red", interval * minIndex, array[minIndex]);
        await delay(1000/array.length);
        ctx.clearRect(interval * i, canvas.height, interval, array[i]);
        ctx.clearRect(interval * minIndex, canvas.height, interval, array[minIndex]);
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
        changeColor("green", minIndex * interval,array[minIndex]);
        changeColor("green",i * interval,array[i]);

        await delay(1000/array.length);
        changeColor("#658CBB", minIndex * interval, array[minIndex]);
        changeColor("blue", i * interval, array[i]);
        
    }
    sorted();
}