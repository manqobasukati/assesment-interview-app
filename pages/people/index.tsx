import { NextPage } from 'next';
import Navigation from '../../components/navigation';

const People: NextPage = () => {
  return (
    <div className=" flex items-center justify-center  h-screen w-full">
      <Navigation />
      <div>Hello mate</div>
    </div>
  );
};

export default People;
