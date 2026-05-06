
# TypeScript প্রজেক্টে OOP-এর চারটি পিলারের গুরুত্ব

কোনো পেজেক্ট যদি ছোট হয় তাহলে সেটা যেকোনো ভাবে ম্যানেজ করা যায়। কোড যেভাবে খুশি লেখা যায়, কিন্তু প্রজেক্ট যখন বড় হতে থাকে তখন কোড মেইনটেইন করা কঠিন হয় বা কোনো টিমের সাথে কাজ করতে গেলে যদি কোড অর্গানাইজ না থাকে তাহলে বিভিন্ন সমস্যার সম্মুখিন হতে হয়। আর এই সমস্যার সমাধান দিতেই আছে **Object-Oriented Programming (OOP)**। আর এর ৪টি মেইন পিলার জানলে আপনার কোডিং লাইফ অনেক সহজ হয়ে যাবে।

### ১. ইনহেরিটেন্স (Inheritance) - কোড বারবার না লেখা
এক ক্লাসের জিনিস অন্য ক্লাসে নিয়ে আসা। সহজ ভাবে বললে পৈতৃক ভাবে বাবা থেকে সন্তান যেভাবে সম্পত্তির ভাগ পায় সেভাবেই । যেমন ধরেন, একটা `Person` ক্লাস আছে সেখানে নাম আর বয়স আছে। এখন `Student` ক্লাসের জন্য আবার সেগুলো লেখার দরকার নেই, জাস্ট ইনহেরিট করলেই হলো। এতে কোড ডুপ্লিকেশন কমে।

### ১. ইনহেরিটেন্স (Inheritance) - উত্তরাধিকার

```typescript
class Animal {
  eat() { console.log("Eating..."); }
}

class Dog extends Animal {
  bark() { console.log("Barking..."); }
}

const myDog = new Dog();
myDog.eat();  // Parent থেকে পেয়েছে
myDog.bark(); // নিজের তৈরি মেথড
```

### ২. পলিমরফিজম (Polymorphism) - এক নামে অনেক রূপ
বহুরূপী। নাম এক কিন্তু কাজ আলাদা। ধরেন, একটা মেথড আছে `getDetails()`। এটি স্টুডেন্টের জন্য তার গ্রেড দেখাবে, আবার একই মেথড টিচারের জন্য তার স্যালারি দেখাবে। একই মেথড নাম কিন্তু সিচুয়েশন অনুযায়ী আলাদা কাজ করছে।

```typescript
class Animal {
  makeSound() { console.log("Some sound"); }
}

class Cat extends Animal {
  makeSound() { console.log("Meow Meow"); } // মেথড ওভাররাইড
}

class Dog extends Animal {
  makeSound() { console.log("Ghew Ghew"); } // মেথড ওভাররাইড
}
```
### ৩. অ্যাবস্ট্রাকশন (Abstraction) - অপ্রয়োজনীয় জিনিস হাইড করা
ইউজারকে শুধু অতটুকুই দেখান যতটুকু তার দরকার। ভেতরের কঠিন লজিকগুলো আড়ালে রাখা। সহজ ভাষায় বলতে গেলে আপনি যখন টিভি তে রিমোট ইউজ করেন আপনি জানেন power বাটনে ক্লিক করলে টিভি অন-অফ হবে কিন্তু এটা কেন এবং কিভাবে তা জানেন না বা জানার দরকার হয় না। এটাই অ্যাবস্ট্রাকশন। আমরা টাইপস্ক্রিপ্টে ইন্টারফেস বা অ্যাবস্ট্রাক্ট ক্লাস দিয়ে এটা করি।

```typescript
abstract class Shape {
  abstract getArea(): number;
}

class Circle extends Shape {
  constructor(public radius: number) { super(); }
  getArea() { return Math.PI * this.radius * this.radius; }
}
```

### ৪. এনক্যাপসুলেশন (Encapsulation) - ডেটা সিকিউরিটি
ডাটা প্রটেক্ট করা। র্আথাৎ ক্লাসের ভেতরের দরকারি ডেটা যেন বাইরের কেউ চাইলেই এক্সেস বা  উল্টাপাল্টা করে না দেয়, সেজন্য `private` কীওয়ার্ড ব্যবহার করি। কিন্তু যদি এমন দরকার হয় যে ` child class` এ `parent class` এর ডাটা এক্সেস করবে সেক্ষেত্রে `protected`  কীওয়ার্ড ব্যবহার করা হয়। এরপর `getter` আর `setter` দিয়ে মেপে মেপে এক্সেস দিই।

```typescript
class BankAccount {
  private _balance: number = 0; // বাইরে থেকে এক্সেস নেই

  deposit(amount: number) {
    if (amount > 0) this._balance += amount;
  }

  get balance() { return this._balance; } // শুধু দেখা যাবে
}

const myAccount = new BankAccount();
myAccount.deposit(500);
console.log(myAccount.balance); // ৫০০০
// myAccount._balance = 100000; // ❌ Error দিবে
```


**সহজ ভাষায়:**
এই চারটা জিনিস ফলো করলে আপনার কোড হবে ক্লিন, প্রফেশনাল আর অনেক বেশি অর্গানাইজড। যারা বড় স্কেলে কাজ করতে চান, তাদের জন্য এই কনসেপ্টগুলো মাস্ট!