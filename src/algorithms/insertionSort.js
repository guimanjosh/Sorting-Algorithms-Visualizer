import {canvas} from "../script.js"
import {ctx} from "../script.js"
import {interval} from "../script.js"
import {delay} from "../script.js"
import {changeColor} from "../script.js"
import {sorted} from "../script.js"
import {array} from "../script.js"

export default async function insertionSort()
{
    for(let i = 1; i < array.length; i++)
    {
        let curr = array[i];
        changeColor("orange", i*interval, array[i]);
        let j = i - 1;
        while(j >= 0 && Math.abs(array[j]) > Math.abs(curr))
        {
            await delay(1000/array.length);
            let temp = array[j];
            ctx.clearRect(j*interval, canvas.height, interval, array[j]);
            ctx.clearRect((j+1)*interval, canvas.height, interval, array[j+1]);
            array[j] = array[j+1];
            array[j+1] = temp;
            changeColor("blue", (j+1) * interval, array[j+1]);
            changeColor("orange", j * interval, array[j]);
            await delay(1000/array.length);
            j = j - 1;
        }
        //await delay(1000/array.length);
        //changeColor("#white", (j+1)*interval, array[j+1])
        await delay(1000/array.length);
        changeColor("blue",(j+1)*interval, array[j+1])
    }
    sorted();
}