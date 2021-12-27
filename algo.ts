import { Person as People } from './types/Person.model';

const people: People = {
  manqoba: ['emmanuel'],
  gift: ['manqoba'],
  emmanuel: ['gift'],
  silwane: ['emmanuel'],
};
function checkFriendhip(person: People, name: string, target: string) {
  if (person[name]) {
    return person[name].includes(target);
  }

  return false;
}

function getAllKeyValues(object: Object) {
  const all = [];

  for (let i in object) {
    const peops = people[i];
    all.push(i);
    for (let j = 0; j <= peops.length - 1; j++) {
      all.push(peops[j]);
    }
  }

  return [...new Set(all)];
}

function createObjectFromArr(arr: string[]) {
  const newObj: { [name: string]: string[] } = {};

  for (let i in arr) {
    newObj[arr[i]] = [];
  }

  return newObj;
}
function matchObject(
  incoming: { [name: string]: any },
  original: { [name: string]: any }
) {
  for (let i in incoming) {
    incoming[i] = original[i];
    if (!incoming[i]) {
      incoming[i] = [];
    }
  }
  return incoming;
}

function find(obj: { [name: string]: string[] }, value: string) {
  return obj[value];
}

export function findRelationShip(
  people: People,
  first_person: string,
  second_person: string
) {
  let link = `${first_person}`;
  let relationships: string[] = [];

  const keyValues = getAllKeyValues(people);

  const obj = createObjectFromArr(keyValues);

  const realObj = matchObject(JSON.parse(JSON.stringify(obj)), people);

  const first = realObj[first_person];

  if (first.includes(second_person)) {
    relationships = [first_person, second_person];
    //relationships.push(first_person);
  } else {
    for (let i = 0; i <= first.length - 1; i++) {
      const second = find(realObj, first[i]);

      if (second.includes(second_person)) {
        relationships[0] = first_person;
        relationships.push(first[i]);
        relationships[2] = second_person;
       
      } else {
        for (let j = 0; j <= second.length - 1; j++) {
          const third = find(realObj, second[j]);
          if (third.includes(second_person)) {
            relationships[0] = first_person;
            relationships[1] = first[i];
            relationships.push(second[j]);
            relationships[3] = second_person;
          } else {
            for (let k = 0; k <= third.length - 1; k++) {
              const fourth = find(realObj, third[k]);
              if (fourth.includes(second_person)) {
                relationships[0] = first_person;
                relationships[1] = second[i];
                relationships[2] = third[j];
                relationships.push(fourth[k]);
                relationships[3] = second_person;
              }
            }
          }
        }
      }
    }
  }

  return relationships;
  //console.log(realObj[first_person], placefound);
}

const relate: string[] = findRelationShip(people, 'manqoba', 'gift');
const st = relate.join(' > ');
