// 6. Write a function rotate that rotates the elements of an array. 
//All elements should be moved one position to the left. 
//The 0th element should be placed at the end of the array. 
//The rotated array should be returned. ** Example: rotate(['a', 'b', 'c']) should return ['b', 'c', 'a'].

let array = ["cat", 12, true, "slip"];
let temp = 0;

function rotate(array) {
    temp = array[0];
    for(i = 0;  i < array.length; i++) {
        array[i - 1] = array[i];
    };
    
    array[array.length - 1] = temp;
    return array;
};

document.write(rotate(array));