import Link from 'next/link';
import { useRouter } from 'next/router';
import { Ref, useState } from 'react';
import { NavigationItem } from '../types/NavigationItem.model';

const Navigation = () => {
  const router = useRouter();
 
  const navigationItem: NavigationItem[] = [
    { name: 'People', link: '/people' },
    { name: 'Relationships', link: '/relationships' },
  ];
  console.log(router.route)
  const [activeItem, setActiveItem] = useState({ name: 'People', link: '/' });
  const handleClick = (item: NavigationItem) => {
    setActiveItem(item);
    router.push(item.link);
  };

  const activeOrNot = (item:NavigationItem)=> {
    if(activeItem.name === item.name){
        return 'bg-white bg-opacity-25'
    }
  }

  return (
    <div className="absolute left-0 top-0 w-full bg-purple-600 flex p-2 items-center justify-between text-white">
      <div className=" text-2xl font-bold">Connections</div>
      <div className="flex gap-4 text-lg p-2">
        {navigationItem.map((item: NavigationItem, index) => {
          return (
            <div
              className={activeOrNot(item)}
              key={index}
            >
              <div
                onClick={() => {
                  handleClick(item);
                }}
              >
                {item.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
