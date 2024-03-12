import { Address } from "./address";
import { Degrees } from "./degrees";
import { Experience, typeOfEmployemnt } from "./experience";
import { Phone } from "./phone";
import { Specialization } from "./specialization";

interface Coder {
  code: () => void;
}

interface GymEnthusiast {
  goToGym: () => void;
}

class Person {
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
