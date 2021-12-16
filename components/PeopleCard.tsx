const PeopleCard = (props: {
  name: string;
  friends: string[];
  ediPerson: Function;
}) => {
  const styles = {
    card: {
      fontSize: '100px',
      color: 'white',
    },
  };
  return (
    <div className="bg-white shadow rounded-lg flex justify-center items-center gap-10 p-4">
      <div className="icon-settler bg-purple-200">
        <span style={styles.card} className="material-icons rounded-sm">
          person
        </span>
      </div>

      <div className="flex flex-col gap-2 w-1/2">
        <div className="text-lg font-semibold">{props.name}</div>
        <div className="text-sm text-gray-400">Friends</div>
        <div className="flex gap-1 text-sm font-semibold italic">
          {props.friends.map((val, index) => {
            return <div key={index}>{val}</div>;
          })}
        </div>
      </div>
      <div className="flex gap-2">
        <div className="bg-green-200 icon-settler">
          <span
            onClick={() => {
              props.ediPerson(props.name);
            }}
            className="material-icons text-green-600"
          >
            edit
          </span>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
