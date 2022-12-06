/**
 * START: Follow the instructions below.
 */

// Make this `LanguagesType` interface generic.
// This should fix the type errors on Lines 14 and 21.
// Hint: The type for the `languages` property should use a type variable.

interface Country <Type>{
    name: Type;
    languages: Type;
}
interface Country2 <Type>{
    name: Type;
    languages: Type[];
}

type LanguagesType1 = Country<string>

const languagesObj1: LanguagesType1 = {
    name: "New Zealand",
    languages: "English, Māori"
};

console.log(languagesObj1.languages);

type LanguagesType2 = Country2<string>

const languagesObj2: LanguagesType2 = {
    name: "Spain",
    languages: ["Spanish", "Catalan", "Galician", "Basque", "Valencian"],
};

console.log(languagesObj2.languages.join(", "));

// ----

export {};
