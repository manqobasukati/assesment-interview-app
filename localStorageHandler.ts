import { Person } from './types/Person.model';

class localStorageHandler {
  people: Person;
  db_name = 'connDB';
  constructor(_people: { [key: string]: string[] }) {
    this.people = _people;
    this.createLocalStoreageDB(_people);
  }

  addPerson(person: string, friends: string[]) {
    this.people = { ...this.people, [person]: friends };
    this.createLocalStoreageDB(this.people);
  }

  removePerson() {}

  deleteFriend() {}

  addFriend() {}

  getLocalStoreItem() {}

  setLocalStoreItem() {}

  getAllPeople() {
    return JSON.parse(localStorage.getItem(this.db_name) as string);
  }

  createLocalStoreageDB(_people: { [key: string]: string[] }) {
    if (typeof window !== undefined) {
      return;
    }
  }
}

const db = new localStorageHandler({ manqoba: ['jonathan'] });

export default db;
