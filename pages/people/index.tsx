import { NextPage } from 'next';
import Navigation from '../../components/navigation';
import PeopleCard from '../../components/PeopleCard';
import 'material-design-icons/iconfont/material-icons.css';
import { useEffect, useState } from 'react';
import { Person } from '../../types/Person.model';
import { useRouter } from 'next/router';
import db from '../../localStorageHandler';
import localStorageHandler from '../../localStorageHandler';
import people from '../people';

const People: NextPage = () => {
  const router = useRouter();

  const [friends, setFriends] = useState(people);

  const [selectedFriend, setSelectedFriend] = useState('Manqoba');

  const handleEditPerson = (person: string) => {
    router.push({ pathname: `/people/${person}` });
  };

  return (
    <div className=" flex items-center justify-center  h-screen w-full">
      <Navigation />
      <div className="flex flex-col gap-4">
        <div className="text-2xl text-center">People </div>
        <div className="flex flex-col gap-2">
          {Object.keys(friends).map((val, index) => {
            return (
              <PeopleCard
                key={index}
                name={val}
                friends={friends[val]}
                ediPerson={handleEditPerson}
              />
            );
          })}
        </div>
        <button className="bg-purple-300 p-2 text-white rounded-md">
          Add Person
        </button>
      </div>
    </div>
  );
};

export default People;
