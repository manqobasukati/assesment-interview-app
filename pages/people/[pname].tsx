import { useRouter } from 'next/router';

import Navigation from '../../components/navigation';
import { people } from '../people';

import PersonFriend from '../../components/PersonFriend';
import DialogBox from '../../components/DiaglogBox';
import { useState } from 'react';

const Person = () => {
  const router = useRouter();

  const [peop, setPeople] = useState(people);

  const styles = {
    person_icon: {
      fontSize: '200px',
      color: 'white',
    },
  };

  const { pname } = router.query;
  let currentPerson: { name: string; friends: string[] } = {} as {
    name: string;
    friends: string[];
  };

  if (pname) {
    currentPerson = { name: pname as string, friends: peop[pname as string] };
  }

  const handleDeletePerson = () => {
    console.log('Delete persone');
  };

  const [dialogState, setDialog] = useState(false);

  const handleDialog = (details: { name: string }) => {
    console.log(details);
    if (details.name) {
      peop[currentPerson.name].push(details.name);
      setPeople(peop);
      setDialog(!dialogState);
    } else {
      setDialog(!dialogState);
    }
  };

  return (
    <div className=" flex items-center justify-center gap-8  h-screen w-full">
      <Navigation />
      <div className="flex icon-settler bg-purple-200  ">
        <div className="flex">
          <span style={styles.person_icon} className="material-icons">
            person
          </span>
        </div>
      </div>
      <div className="flex flex-col h-1/2 justify-between ">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="text-gray-400">Name</div>
            <div className="text-lg">{currentPerson.name}</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-gray-400">Friends</div>
            <div className="flex flex-col overflow-y-scroll h-64">
              {currentPerson.friends?.map((val, index) => {
                return (
                  <PersonFriend
                    key={index}
                    name={val}
                    deleteFriend={handleDeletePerson}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <button
            onClick={() => {
              setDialog(!dialogState);
            }}
            className="bg-purple-300 p-2 rounded-sm text-white"
          >
            Add friend{' '}
          </button>
        </div>
      </div>
      {dialogState ? (
        <DialogBox showDialog={dialogState} handler={handleDialog} />
      ) : null}
    </div>
  );
};

export default Person;
