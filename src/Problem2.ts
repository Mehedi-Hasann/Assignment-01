const getLength = (arr : string|number[]): number => {

    let len = 0;
    if(typeof arr==='string'){
        len =  arr.length;
    }
    else if(Array.isArray(arr)){
        len =  arr.length;
    }
    return len;
}


console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));