import { useRouter } from 'next/router';
import { NextPage } from 'next/types';
import { useEffect, useState } from 'react';
import Navigation from '../../components/navigation';
import people from '../people';

const AddPerson: NextPage = () => {
  const [person, setPerson] = useState();
  const [personFriends, setPersonFriends] = useState([] as string[]);
  const [friends, setFriends] = useState(people);
  const [activeFriend, setActiveFriend] = useState('' as string);
  const styles = {
    person_icon: {
      fontSize: '200px',
      color: 'white',
    },
  };

  const handlerPersonClick = (e: any) => {
    e.preventDefault();
    const f = personFriends.filter((val) => {
      return val;
    });
    const p = { [e.target.name.value]: f };
    console.log(p);
  };

  useEffect(() => {
    const handleFriendClick = (person: string) => {
      console.log(person);
      personFriends.push(person);
      //setPersonFriends(personFriends);
    };
    handleFriendClick(activeFriend);
  }, [activeFriend]);

  return (
    <div className=" flex items-center justify-center  h-screen w-full">
      <Navigation />
      <div className="flex flex-col">
        <div className="flex justify-center items-center gap-2">
          <div className="icon-settler bg-purple-200 rounded-full">
            <span className="material-icons ">B</span>
          </div>
          <div>Add person</div>
        </div>
        <form onSubmit={handlerPersonClick}>
          <div className="shadow-md bg-white p-2 px-6 flex flex-col gap-2">
            <input
              type="text"
              className="border-2 p-2 rounded-md w-64"
              placeholder="Enter name"
              name="name"
            />
            <div className="flex flex-col">
              <div className="text-sm font-semibold text-gray-500">Friends</div>
              <div>{personFriends}</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-sm font-semibold text-gray-500">
                Available friends
              </div>
              {Object.keys(friends).map((val, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setActiveFriend(val);
                      //handleFriendClick(val);
                    }}
                    className="border p-2 rounded-sm justify-between flex"
                  >
                    <div className="text-gray-500">{val}</div>
                    <span className="material-icons">done</span>
                  </div>
                );
              })}
            </div>
            <button className="bg-purple-400 p-2 text-white">Add button</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPerson;
