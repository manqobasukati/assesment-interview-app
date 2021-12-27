import { NextPage } from 'next';
import Navigation from '../../components/navigation';
import { people } from '../people';

const Relationships: NextPage = () => {
  const first = Object.keys(people);
  console.log(first);
  return (
    <div className=" flex items-center justify-center  h-screen w-full">
      <Navigation />
      <div className="flex flex-col text-center gap-4">
        <div className="text-lg font-semibold">Check relationship between</div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <label className='text-left' htmlFor="friend_1">Friend 1</label>
            <select className="border-purple-200  border-2 p-2 rounded-md focus:outline-none">
              {first.map((val, index) => {
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
            <label className='text-left' htmlFor="friend_1">Friend 1</label>
            <select className="border-purple-200  border-2 p-2 rounded-md focus:outline-none">
              {first.map((val, index) => {
                return (
                  <option value={val} key={index}>
                    {val}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <button className='bg-purple-200 p-2 text-white rounded-sm'>Check</button>
        <div className="text-gray-500">Degree of seperation</div>
      </div>
    </div>
  );
};

export default Relationships;
