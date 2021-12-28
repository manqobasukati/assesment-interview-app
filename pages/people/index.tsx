import { NextPage } from 'next';
import Navigation from '../../components/navigation';
import PeopleCard from '../../components/PeopleCard';
import 'material-design-icons/iconfont/material-icons.css';
import { useState } from 'react';

import { useRouter } from 'next/router';

import { people } from '../people';
import DialogBox from '../../components/DiaglogBox';

const People: NextPage = () => {
  const router = useRouter();

  const [friends, setFriends] = useState(people);

  const [dialogState, setDialog] = useState(false);

  const [selectedFriend, setSelectedFriend] = useState('Manqoba');

  const handleEditPerson = (person: string) => {
    router.push({ pathname: `/people/${person}` });
  };

  const handleDialog = (details: { name: string }) => {
    friends[details.name] = [];
    setFriends(friends);
    setDialog(!dialogState);
  };

  return (
    <div className=" flex items-center justify-center  h-screen w-full">
      <Navigation />
      <div className="flex flex-col gap-4">
        <div className="text-2xl text-center">People </div>
        <div className="flex flex-col gap-2 overflow-y-auto h-72">
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
        <button
          onClick={() => {
            setDialog(!dialogState);
          }}
          className="bg-purple-300 p-2 text-white rounded-md mt-2"
        >
          Add Person
        </button>
      </div>
      {dialogState ? (
        <DialogBox showDialog={dialogState} handler={handleDialog} />
      ) : null}
    </div>
  );
};

export default People;
