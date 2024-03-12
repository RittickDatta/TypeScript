"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, phone, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
    Person.prototype.getName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.getPhone = function () {
        return "".concat(this.phone.countryCode, " ").concat(this.phone.areaCode, "-").concat(this.phone.phoneNumber);
    };
    Person.prototype.getAddress = function () {
        return "".concat(this.address.city, ", ").concat(this.address.country, " - ").concat(this.address.buildingNo, ", ").concat(this.address.locality, " (").concat(this.address.landmark, ")");
    };
    return Person;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super.call(this, "Rittick", "Datta", 30, {
            countryCode: "+48",
            areaCode: "765",
            phoneNumber: "876423",
        }, {
            country: "Poland",
            city: "Gdansk",
            locality: "ABC",
            buildingNo: "101",
            landmark: "Church",
        }) || this;
    }
    Developer.prototype.code = function () {
        return "I code";
    };
    Developer.prototype.goToGym = function () {
        return "I go to gym";
    };
    return Developer;
}(Person));
var person = new Developer();
var age = person.getAge();
console.log(age);
