import { NextPage } from 'next';
import { useState } from 'react';
import Navigation from '../../components/navigation';
import { people } from '../people';

const Relationships: NextPage = () => {
  const persons = Object.keys(people);

  const [fisrtPerson, setFirstPerson] = useState();
  const [secondPerson, setSecondPerson] = useState();

  const handleButtonCheck = () => {
    console.log(fisrtPerson, secondPerson);
  };

  return (
    <div className=" flex items-center justify-center  h-screen w-full">
      <Navigation />
      <div className="flex flex-col text-center gap-4">
        <div className="text-lg font-semibold">Check relationship between</div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <label className="text-left" htmlFor="friend_1">
              Friend 1
            </label>
            <select
              onChange={(e: any) => {
                const name = e.target.value;
                setFirstPerson(name);
              }}
              className="border-purple-200  border-2 p-2 rounded-md focus:outline-none"
            >
              {persons.map((val, index) => {
                return (
                  <option value={val} key={index}>
                    {val}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="icon-settler bg-purple-200">
            <span className="material-icons text-purple-400">close</span>
          </div>
          <div className="flex flex-col">
            <label className="text-left" htmlFor="friend_1">
              Friend 2
            </label>
            <select
              onChange={(e: any) => {
                const name = e.target.value;
                setSecondPerson(name);
              }}
              className="border-purple-200  border-2 p-2 rounded-md focus:outline-none"
            >
              {persons.map((val, index) => {
                return (
                  <option value={val} key={index}>
                    {val}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <button onClick={handleButtonCheck} className="bg-purple-200 p-2 text-white rounded-sm">
          Check
        </button>
        <div className="text-gray-500">Degree of seperation</div>
      </div>
    </div>
  );
};

export default Relationships;
