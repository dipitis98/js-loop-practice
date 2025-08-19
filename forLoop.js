// // Structure:
// for (initialization; condition; increment/decrement) {
//     // code block
// }


// // Easy //

// // ১ থেকে ১০ পর্যন্ত সব সংখ্যা প্রিন্ট করো।

// for (let i = 1 ; i <= 10 ; i++) {
//     console.log(i);
// }

// // ১০ থেকে ১ পর্যন্ত উল্টোদিকে সংখ্যা প্রিন্ট করো।

// for (let i = 10 ; i > 0 ; i--) {
//     console.log(i);   
// }

// // ১ থেকে ১০ পর্যন্ত সব সংখ্যার যোগফল প্রিন্ট করো।
// let sum = 0
// for (let i = 1 ; i <= 10 ; i++) {
//     sum+=i
// }
// console.log(sum);

// // Medium //

// // ১ থেকে ৫০ পর্যন্ত যত জোড় সংখ্যা আছে, সেগুলো প্রিন্ট করো।
// for (let i = 1 ; i<=50 ; i++){
//     if (i % 2 == 0){
//         console.log(i);
//     }
// }

// // ৫ এর নামতা প্রিন্ট করো (৫ × ১ থেকে ৫ × ১০)।
// for (let i = 1 ; i <= 10 ; i++) {
//     console.log(`5 * ${i} = ${5 * i}`)
// }

// // Hard //

// // একটা প্রোডাক্ট লিস্ট থেকে ১০০ টাকার বেশি দামের আইটেমগুলো বের করো।

// let products = [
//     { name: "Shirt", price: 80 },
//     { name: "Shoes", price: 120 },
//     { name: "Bag", price: 200 }
// ];
// for (let i = 0 ; i < products.length ; i++) {
//     if (products[i].price > 100) {
//         console.log(products[i].name)
//     }
// }


// // ১ থেকে ১০০ এর মধ্যে যেসব সংখ্যা ৩ ও ৫ উভয় দিয়ে বিভাজ্য, সেগুলো প্রিন্ট করো।

// for (let i = 1 ; i <= 100 ; i++) {
//     if ( i % 3 == 0 && i % 5 == 0) {
//         console.log(i)
//     }
// }

// // ১ থেকে ১০০ পর্যন্ত প্রাইম নাম্বারগুলো বের করো।

// for (let num = 2 ; num <= 100 ; num++) { // ২ থেকে ১০০ পর্যন্ত প্রাইম নাম্বার নেওয়ার for loop
//     let count = 0                        // num -কে কতবার ভাগ যাবে, সেটা গণনা করার জন্য declared variable
//     for (let i = 2 ; i < num ; i++) {    // ভিতরের for loop, যা num এর চেয়ে ছোট সংখ্যাগুলো দিয়ে ভাগ করবে
//         if (num % i == 0) {              // যদি ভাগশেষ শূণ্য আসে / নিঃশেষে বিভাজ্য হয়
//             count++                      // count বাড়বে, অর্থাৎ ভাগ গেছে, সেটা হিসাব রাখবে
//         }
//     }
//     if (count === 0) {                   // যদি একবারও ভাগ না যায়, অর্থাৎ বিভাজ্যতার পরিমাণ শূণ্য
//         console.log(num)                 // num কে প্রিন্ট করবে
//     }
// }

// fizzBuzz problem
// for (let i = 1 ; i <= 100 ; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz")
//     } else if (i % 3 === 0) {
//         console.log("Fizz")
//     } else if (i % 5 === 0){
//         console.log("Buzz");
//     } else {
//         console.log(i)}
// }