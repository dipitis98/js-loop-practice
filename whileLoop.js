// Easy //

// // ১ থেকে ১০ পর্যন্ত সংখ্যা প্রিন্ট করো।

// let i = 1
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// ০ থেকে ২০ পর্যন্ত ৫ করে বাড়াতে বাড়াতে সংখ্যা প্রিন্ট করো।

// let i = 0
// while (i <= 20) {
//     console.log(i);
//     i+=5;
// }

// ১ থেকে ২০ পর্যন্ত সব বেজোড় সংখ্যা প্রিন্ট করো।

// let i = 1
// while (i<=20){
//     if (i % 2 !== 0){
//         console.log(i);
//     }
//     i++
// }

// ১ থেকে ৫০ পর্যন্ত এমন সংখ্যা প্রিন্ট করো যেগুলো ৪ দিয়ে বিভাজ্য।

// let i = 1
// while (i <= 50) {
//     if (i % 4 == 0){
//         console.log(i)
//     }
//     i++
// }

// Medium //

// ইউজারের কাছ থেকে পাসওয়ার্ড নিতে থাকো যতক্ষণ না সঠিক পাসওয়ার্ড "1234" হয়।

// let password = Number(prompt("Enter your password: "))
// const correctPass = 1234
// while (password !== correctPass) {
//     password = Number(prompt("Wrong ! Enter the correct password: "))
// }
// alert("Welcome to the website.")

// ১ থেকে ১০ এর মধ্যে র‍্যান্ডম সংখ্যা জেনারেট করো, যতক্ষণ না ৭ আসে।

// let rand = Math.round(Math.random() * 10);
// while (rand !== 7) {
//     console.log( rand + " ! Try again." );
//     rand = Math.round(Math.random() * 10);
// }
// console.log("7 is found.")

// Cumulative Sum

// ১ থেকে ১০ পর্যন্ত সংখ্যা যোগ করো এবং প্রতিটা ধাপে মোট যোগফল দেখাও।
// (এখানে শুধু সংখ্যা প্রিন্ট না করে, মোট যোগফল ট্র্যাক করতে হবে)

// let i = 1
// let sum = 0
// while (i <= 10) {
//     console.log(`${sum} + ${i} = ${sum + i}`);
//     sum += i
//     i++
// }