import {canvas} from "../script.js"
import {ctx} from "../script.js"
import {interval} from "../script.js"
import {delay} from "../script.js"
import {changeColor} from "../script.js"
import {sorted} from "../script.js"
import {array} from "../script.js"

let colors = [];

async function merge(leftArray, rightArray, arr)
{
    let leftSize = Math.floor(arr.length/2);
    let rightSize = arr.length - leftSize;
    let i = 0;
    let left = 0;
    let right = 0;

    while(left < leftSize && right < rightSize)
    {
        if(leftArray[left] < rightArray[right])
        {
            arr[i] = leftArray[left];
            i = i + 1;
            left = left + 1;
        }
        else
        {
            arr[i] = rightArray[right];
            i = i + 1;
            right = right + 1;
        }
    }

    while(left < leftSize)
    {
        arr[i] = leftArray[left];
        i = i + 1;
        left = left + 1;
    }

    while(right < rightSize)
    {

    }

}

export default async function mergeSort(arr)
{
    let lenArr = arr.length;
    if(lenArr <= 1)
    {
        return;
    }

    let mid = Math.floor(lenArr/2);
    let leftArray = new Array(mid);
    let rightArray = new Array(lenArr - mid);

    let i = 0;
    let j = 0;
    for(; i < lenArr; i++)
    {
        if(i < mid)
        {
            leftArray[i] = arr[i];
        }
        else
        {
            rightArray[j] = arr[i];
            j = j + 1;
        }
    }

    mergeSort(leftArray);
    mergeSort(rightArray);
    merge(leftArray, rightArray, arr);
}