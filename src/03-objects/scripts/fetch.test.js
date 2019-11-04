import { fetchFunctions } from "./fetch.js";

const data = [
  {
    name: "Felföldi",
    surname: "Natália",
    gender: "female",
    region: "Hungary"
  },
  {
    name: "Gita",
    surname: "Niyaas",
    gender: "female",
    region: "Nepal"
  },
  {
    name: "Erik",
    surname: "Weiß",
    gender: "male",
    region: "Germany"
  },
  {
    name: "İskender",
    surname: "Osman",
    gender: "male",
    region: "Turkey"
  },
  {
    name: "Madison",
    surname: "Martinez",
    gender: "female",
    region: "United States"
  },
  {
    name: "Eleonora",
    surname: "Lucan",
    gender: "female",
    region: "Romania"
  },
  {
    name: "Ryan",
    surname: "Smets",
    gender: "male",
    region: "Belgium"
  },
  {
    name: "Zhapragul",
    surname: "Bekzatov",
    gender: "female",
    region: "Kyrgyz Republic"
  },
  {
    name: "Αρχίδαμος",
    surname: "Βαρνακιώτης",
    gender: "male",
    region: "Greece"
  },
  {
    name: "Mason",
    surname: "Johnson",
    gender: "male",
    region: "Canada"
  }
];

test("Testing get first name function", () => {
  expect(fetchFunctions.getFirstName(data)).toBe("Felföldi");
});

test("Testing get all first names", () => {
  expect(fetchFunctions.getAllFirstNames(data)).toEqual([
    "Felföldi",
    "Gita",
    "Erik",
    "İskender",
    "Madison",
    "Eleonora",
    "Ryan",
    "Zhapragul",
    "Αρχίδαμος",
    "Mason"
  ]);
});
