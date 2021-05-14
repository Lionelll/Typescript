'use strict'

// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc: string[] = ['Arthur', 'Boe', 'Chloe'];

function swap(input: string[], index_A: number, index_B: number): void {

    let temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}
swap(abc, 0, 2);
console.log(abc);

export { }