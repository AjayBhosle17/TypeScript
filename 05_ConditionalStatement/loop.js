var num = [10, 20, 30, 40];
console.error("for loop");
for (var i_1 = 0; i_1 < num.length; i_1++) {
    console.log(num[i_1]);
}
console.log("While loop");
var i = 0;
while (i < num.length) {
    console.log(num[i]);
    i++;
}
console.log('do while loop');
i = 0;
do {
    console.log(num[i]);
    i++;
} while (i < num.length);
console.log('for  in loop');
for (var i_2 in num) {
    console.warn(i_2);
}
console.log('for of loop');
for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
    var i_3 = num_1[_i];
    console.warn(i_3);
}
