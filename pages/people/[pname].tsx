import { useRouter } from 'next/router';
import Navigation from '../../components/navigation';

const Person = () => {
  const router = useRouter();

  const styles = {
    person_icon: {
      fontSize: '200px',
      color: 'white',
    },
  };

  const { pname } = router.query;
  return (
    <div className=" flex items-center justify-center  h-screen w-full">
      <Navigation />
      <div className="flex icon-settler bg-purple-200 ">
        <div className="">
          <span style={styles.person_icon} className="material-icons">
            person
          </span>
        </div>
      </div>
    </div>
  );
};

export default Person;
