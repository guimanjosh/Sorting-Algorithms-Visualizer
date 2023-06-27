import {canvas} from "../script.js"
import {ctx} from "../script.js"
import {interval} from "../script.js"
import {delay} from "../script.js"
import {changeColor} from "../script.js"
import {sorted} from "../script.js"
import {array} from "../script.js"
import {enable} from "../script.js"

//colors = ['yellow', 'purple'];
var colors = ['white', '#00f7ff'];

export default async function bubbleSort()
{
    for(let i = 0; i < array.length - 1; i++){
        for(let j = 0; j < array.length - i - 1; j++){
            if(Math.abs(array[j]) > Math.abs(array[j + 1]))
            {
                await delay(1000/array.length);
                changeColor(colors[0],j * interval, array[j]);
                changeColor(colors[0], (j+1) * interval, array[j+1]);
                await delay(1000/array.length);
                //bsWaitTime += 1000/array.length;
                ctx.clearRect(j * interval, canvas.height, interval, array[j]);
                ctx.clearRect((j + 1) * interval, canvas.height, interval, array[j+1]);
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                changeColor(colors[1],j * interval, array[j]);
                changeColor(colors[1], (j+1)*interval,array[j+1]);
                await delay(1000/array.length);
                //bsWaitTime += 1000/array.length;
                changeColor("#658CBB", j * interval, array[j]);
                changeColor("#658CBB", (j+1) * interval, array[j+1]);
            }
        }
        changeColor("blue",((array.length-1)-i) * interval, array[(array.length-1)-i])
    }
    sorted();
    await delay(1000);
    enable();
}