import { Address } from "./util/address";
import { Degrees } from "./util/degrees";
import { Experience, typeOfEmployemnt } from "./util/experience";
import { Phone } from "./util/phone";
import { Specialization } from "./util/specialization";

interface Coder {
  code: () => void;
}

interface GymEnthusiast {
  goToGym: () => void;
}

class Person {
  constructor(firstName, lastName, age, phone, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
  private firstName: string;
  private lastName: string;
  private age: number;
  private phone: Phone;
  private address: Address;
  getName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getAge() {
    return this.age;
  }
  getPhone() {
    return `${this.phone.countryCode} ${this.phone.areaCode}-${this.phone.phoneNumber}`;
  }
  getAddress() {
    return `${this.address.city}, ${this.address.country} - ${this.address.buildingNo}, ${this.address.locality} (${this.address.landmark})`;
  }
}

class Developer extends Person implements Coder, GymEnthusiast {
  constructor() {
    super(
      "Rittick",
      "Datta",
      30,
      {
        countryCode: "+48",
        areaCode: "765",
        phoneNumber: "876423",
      },
      {
        country: "Poland",
        city: "Gdansk",
        locality: "ABC",
        buildingNo: "101",
        landmark: "Church",
      }
    );
  }
  education: Degrees;
  yearsOfExperience: Experience;
  location: string;
  specialization: Specialization;
  typeOfEmployemnt: typeOfEmployemnt;
  code() {
    return "I code";
  }
  goToGym() {
    return "I go to gym";
  }
}

const person = new Developer();
const age = person.getAge();
console.log(age)
