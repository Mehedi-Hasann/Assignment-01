type valueType = string | number | boolean;

const formatValue = (value : valueType) : valueType => {
    if(typeof value==='string'){
        return value.toUpperCase();
    }
    else if(typeof value==='number'){
        return value*10;
    }
    else if(typeof value==='boolean'){
        return false;
    }
    else{
        return true;
    }
}

console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));