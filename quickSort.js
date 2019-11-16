//Write a JavaScript program to sort a list of elements using Quick sort.

function quickSort(quickArr){
    if(quickArr.length <=1){
        return quickArr;
    }
    else{
        var leftArr=[];
        var rightArr=[];
        var newArray = [];
        var pivot = quickArr.pop();
     
        for(var i=0;i<quickArr.length;i++){
            if(quickArr[i] <=pivot){
                leftArr.push(quickArr[i]);
            }
            else{
                rightArr.push(quickArr[i]);
            }
        }
        return newArray.concat(quickSort(leftArr),pivot,quickSort(rightArr));
    }
}

var arr = [3,0,2,5,-1,4,1];

console.log("Original Array: "+arr);

var sortArr = quickSort(arr);
console.log("Sorted Array: "+ sortArr);