// n бутархай тооны хамгийн ойрын бүхэл тоог ол.

let a = 10.909090;
let b = 279.1234;
console.log(Math.ceil(a));
console.log(Math.floor(b));

// 3 оронтой той ( n ) ороход тухайн 3 оронтой тооны цифрүүдийн нийлбэрийг ол.

let i = Number(prompt("3 orontoi too oruulna uu"));

rem = i % 10 ;
rem1 = Math.floor((i % 100)/10) ;
rem2 = Math.floor((i/100));
let sum = (rem+rem1+rem2);
    
console.log(sum);

// 4 оронтой той ( n ) ороход тухайн 3 оронтой тооны цифрүүдийн нийлбэрийг ол.
let r = Number(prompt("4 orontoi too oruulna uu"));

d = r % 10;
t = Math.floor((r % 100)/10);
s =Math.floor((r % 1000)/100);
g = Math.floor((r / 1000));

let sum1 = (d+t+s+g);
console.log(sum1);