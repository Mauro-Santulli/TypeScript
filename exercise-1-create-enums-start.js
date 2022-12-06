"use strict";
/**
 * START: Follow the instructions below.
 */
exports.__esModule = true;
// The objects in the `countries` array use strings as the values of the
// `currency` properties.
// Complete this numeric enum so that it can be used instead of strings.
// Hint: Use the string values in the `currency` properties as the enum members.
var Currency;
(function (Currency) {
    Currency[Currency["EURO"] = 0] = "EURO";
    Currency[Currency["DOLLAR"] = 1] = "DOLLAR";
})(Currency || (Currency = {}));
// Replace the string values for the `currency` properties below with
var countries = [
    {
        name: "France",
        currency: Currency.EURO
    },
    {
        name: "United States of America",
        currency: Currency.DOLLAR
    },
    {
        name: "Italy",
        currency: Currency.EURO
    },
    {
        name: "New Zealand",
        currency: Currency.DOLLAR
    },
];
// Create a string enum named `LanguageStatus`. Use it to replace the
// string values for the `status` properties in the objects below.
var LanguageStatus;
(function (LanguageStatus) {
    LanguageStatus["PRIMARY"] = "primary";
    LanguageStatus["SECONDARY"] = "secondary";
})(LanguageStatus || (LanguageStatus = {}));
var countryLanguages = [
    { language: "Spanish", status: LanguageStatus.PRIMARY },
    { language: "English", status: LanguageStatus.SECONDARY },
];
