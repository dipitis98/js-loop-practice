// Level 1 (Basic)

// একটা function বানাও greet() নামে, যেটা কল করলে শুধু "Hello World!" প্রিন্ট করবে।

function greet() {
    console.log(`Hello, World!`);
}
greet()


// addTwoNumbers(a, b) নামে একটা function লেখো, যেটা দুইটা সংখ্যা প্যারামিটার নিবে এবং যোগফল রিটার্ন করবে।

function addTwoNumbers(a, b) {
    console.log(result = a + b);
    return result
}
addTwoNumbers(3,5)
addTwoNumbers(30,500)


// sayMyName(name) নামে function বানাও, যেখানে name argument দিয়ে "Hello, <name>" প্রিন্ট করবে।

function sayMyName(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
sayMyName("Dip")