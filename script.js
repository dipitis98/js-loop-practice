console.log("1. বেসিক লুপিং : একটা while loop বানাও যা ১ থেকে ১০ পর্যন্ত নাম্বার প্রিন্ট করবে ।")

let i = 1
while ( i <= 10 ) {
    console.log(i);
    i++;
}

console.log("2. উল্টো গোনা : একটা while loop বানাও যা ২০ থেকে ১ পর্যন্ত উল্টো গুনবে ।")

let j = 20
while ( j > 0 ) {
    console.log(j);
    j--;
}

console.log("3. জোড় সংখ্যা প্রিন্ট : একটা while loop বানাও যা ১ থেকে ৫০ পর্যন্ত শুধুমাত্র জোড় সংখ্যা দেখাবে।");

let k = 1
while ( k <= 50 ) {
    if ( k % 2 == 0 ) {
        console.log(k);
    }
    k++
}

console.log("4. যোগফল বের করা : while loop দিয়ে ১ থেকে ১০ পর্যন্ত সব সংখ্যার যোগফল বের করো।");

let counter = 1 // কোন সংখ্যা থেকে শুরু করব (শুরু ১)
let sum = 0 // এখন পর্যন্ত যোগফল (শুরু ০)
while (counter <= 10) {
    sum = sum + counter; // sum এ counter যোগ করো
    counter++ // counter ১ বাড়াও
}
console.log("-> ১ থেকে ১০ পর্যন্ত সব সংখ্যার যোগফল : ", sum);


