const getUniqueValues = <T extends number | string>(arr1: T[], arr2: T[]): T[] => {
    const result = [...new Set([...arr1, ...arr2])];
    return result;
}


const array1  = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));