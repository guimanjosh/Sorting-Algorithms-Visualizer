import {canvas} from "../script.js"
import {ctx} from "../script.js"
import {interval} from "../script.js"
import {delay} from "../script.js"
import {changeColor} from "../script.js"
import {sorted} from "../script.js"
import {array} from "../script.js"
import {enable} from "../script.js"

export default async function cocktailSort(){
    var n = array.length;
    var swapped = true;
    let start = 0;
    let end = n - 1;

    while(swapped){
        for(let i = start; i < end; i++){
            if(Math.abs(array[i]) > Math.abs(array[i+1])){
                changeColor('red', (i+1) * interval, array[i+1]);
                changeColor('red', i * interval, array[i]);
                await delay(1000/array.length);

                ctx.clearRect(i*interval, canvas.height, interval, array[i]);
                ctx.clearRect((i+1)*interval, canvas.height, interval, array[i+1]);

                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;

                changeColor('#00f7ff', (i+1) * interval, array[i+1]);
                changeColor('#00f7ff', i * interval, array[i]);
                await delay(1000/array.length);

                changeColor("#658CBB", i * interval, array[i]);
                changeColor("#658CBB", (i+1) * interval, array[i+1]);

                swapped = true;
            }
        }

        changeColor('blue', end * interval, array[end]);

        if (swapped == false)
        {
            break;
        }

        swapped = false;

        end = end - 1;

        for(let i = end - 1; i > start - 1; i--)
        {
            if(Math.abs(array[i]) > Math.abs(array[i+1]))
            {
                changeColor('purple', (i+1) * interval, array[i+1]);
                changeColor('purple', i * interval, array[i]);
                await delay(1000/array.length);

                ctx.clearRect(i*interval, canvas.height, interval, array[i]);
                ctx.clearRect((i+1)*interval, canvas.height, interval, array[i+1]);

                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;

                changeColor('yellow', (i+1) * interval, array[i+1]);
                changeColor('yellow', i * interval, array[i]);
                await delay(1000/array.length);

                changeColor("#658CBB", i * interval, array[i]);
                changeColor("#658CBB", (i+1) * interval, array[i+1]);

                swapped = true;
            }   
        }
        changeColor('blue', start * interval, array[start]);
        start = start + 1;

    }
    for(let i = 0; i < Math.floor(array.length/2); i++)
    {
        await delay(1000/(array.length*array.length));
        changeColor('blue', i * interval, array[i]);
        changeColor('blue', (array.length - 1 - i) * interval, array[array.length - 1 - i]);
    }
    
    sorted();
    await delay(1000);
    enable();
}