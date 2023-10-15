/*
Object-Oriented Programming
Object-Oriented Programming (OOP) adalah salah satu paradigma dalam pemrograman yang berfokus pada pembuatan sebuah objek dan interaksi dengan objek-objek tersebut. Di OOP, objek merupakan sebuah entitas yang terdiri dari dua hal, yakni properties dan methods.

Properti merupakan nilai di dalam objek yang menyimpan informasi tentang objek tersebut.
Method merupakan fungsi yang menggambarkan aksi yang dapat dilakukan oleh objek tersebut.
Paradigma OOP kerap digambarkan dengan kehidupan dunia nyata. Objek di dalam OOP, bisa kita anggap seperti objek yang ada di dunia nyata. Kita ambil contoh, mobil. Dalam OOP, sebuah mobil dapat dilihat sebagai objek yang memiliki beberapa properti seperti merek, warna, kecepatan maksimal, dan nomor rangka. Objek tersebut memiliki kemampuan atau method seperti maju, mundur, dan belok.

*/

// OOP Tidak menggunakan class namun tidak direkomendasikan
const car = {
  // properties
  brand: "Ford",
  color: "red",
  maxSpeed: 200,
  chassisNumber: "f-1",
  // methods
  drive: () => {
    console.log("driving");
  },
  reverse: () => {
    console.log("reversing");
  },
  turn: () => {
    console.log("turning");
  },
};

console.log(car.brand); // Ford
console.log(car.color); // red
console.log(car.maxSpeed); // 200
console.log(car.chassisNumber); // f-1
car.drive(); // driving
car.reverse(); // reversing
car.turn(); // turning

//   syntax OOP sebelum menggunakan class menggunakan function karena sebelum ES6 Hadir JS belum engenal class

function Car(brand, color, maxSpeed, chassisNumber) {
  this.brand = brand;
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.chassisNumber = chassisNumber;
}

Car.prototype.drive = function () {
  console.log(`${this.brand} ${this.color} is driving`);
};

Car.prototype.reverse = function () {
  console.log(`${this.brand} ${this.color} is reversing`);
};

Car.prototype.turn = function () {
  console.log(`${this.brand} ${this.color} is turning`);
};

// Membuat objek mobil dengan constructor function Car
const car11 = new Car("Toyota", "Silver", 200, "to-1");
const car22 = new Car("Honda", "Black", 180, "ho-1");
const car33 = new Car("Suzuki", "Red", 220, "su-1");

console.log(car11);
console.log(car22);
console.log(car33);

car11.drive();
car22.drive();
car33.drive();

/* Output
  Car { brand: 'Toyota', color: 'Silver', maxSpeed: 200, chassisNumber: 'to-1' }
  Car { brand: 'Honda', color: 'Black', maxSpeed: 180, chassisNumber: 'ho-1' }
  Car { brand: 'Suzuki', color: 'Red', maxSpeed: 220, chassisNumber: 'su-1' }
   
  Toyota Silver is driving
  Honda Black is driving
  Suzuki Red is driving
  */

//   Setelah meggunakan class
class Car {
  constructor(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }

  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }

  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }

  turn() {
    console.log(`${this.brand} ${this.color} is turning`);
  }
}

// Membuat objek mobil dengan constructor function Car
const car1 = new Car("Toyota", "Silver", 200, "to-1");
const car2 = new Car("Honda", "Black", 180, "ho-1");
const car3 = new Car("Suzuki", "Red", 220, "su-1");

console.log(car1);
console.log(car2);
console.log(car3);

car1.drive();
car2.drive();
car3.drive();

/* Output
  Car { brand: 'Toyota', color: 'Silver', maxSpeed: 200, chassisNumber: 'to-1' }
  Car { brand: 'Honda', color: 'Black', maxSpeed: 180, chassisNumber: 'ho-1' }
  Car { brand: 'Suzuki', color: 'Red', maxSpeed: 220, chassisNumber: 'su-1' }
   
  Toyota Silver is driving
  Honda Black is driving
  Suzuki Red is driving
  */

/*
Properti
Properti merupakan bagian dari class yang mendefinisikan nilai-nilai yang terkandung dalam sebuah instance class. Contohnya, jika Anda membuat class Car, properti adalah informasi yang sekiranya terdapat pada sebuah mobil seperti brand, color, maxSpeed, dan chassisNumber. Contoh lain, jika Anda membuat class Mail, secara umum propertinya adalah sender, receiver, subject, dan body.

Method
Method adalah sebuah fungsi yang berada di dalam sebuah class dan dapat diakses melalui instance Class tersebut. Method biasanya mengindikasikan hal yang dapat dilakukan oleh sebuah class. Bila kita berbicara tentang class Car, method yang ada bisa drive(), reverse(), dan turn(). Jika pada class Mail, method bisa berupa send(), sendLater(), saveAsDraft().
*/

class Car {
  // Properti
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
  }

  get chassisNumber() {
    return this._chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log("you are not allowed to change the chassis number");
  }

  // Methods
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }

  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }

  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }
}

class Mail {
  constructor(sender, receiver, subject, body) {
    this.sender = sender;
    this.receiver = receiver;
    this.subject = subject;
    this.body = body;
  }

  // Methods
  send() {
    console.log(`Sending mail from ${this.sender} to ${this.receiver}`);
  }

  sendLater(delay) {
    console.log(`Sending after ${delay} ms`);

    setTimeout(() => {
      this.send();
    }, delay);
  }

  saveAsDraft() {
    console.log("Saving mail as draft");
  }
}

/*
Pewarisan(inheritance)
*/

// Superclass
class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}
// Subclass
class WhatsAppService extends MailService {
  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}

// Subclass
class EmailService extends MailService {
  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }
}
