const arr1 = [4, 3, 8, 4,];
const arr2 = [11, 7, 9, 1,];

function array(arr1, arr2) {

    if (arr1.length !== arr2.length) {
        console.error("Xəta: Arraylarin uzunluqlari ferqlidir.");
        return null;
    }
    
    let resultArray = [];
    for (let i = 0; i < arr1.length; i++) {
        resultArray.push(arr1[i] * arr2[i]);
    }
    return resultArray;
}

const netice = array(arr1, arr2);
if (netice !== null) {
    console.log("Netice:", netice);
}
