import { useState } from 'react';

const DialogBox = (props: { handler: Function; showDialog: boolean }) => {
  const styles = {
    box: {
      left: '35%',
      top: '35%',
    },
  };
  const [friendName, setFriendName] = useState();
  //   const [dialogState, setDialogState] = useState(false);
  const showDialog = () => {
    props.handler({ name: '' });
  };

  return (
    <div>
      <div
        onClick={showDialog}
        className="absolute left-0 top-0 bg-black bg-opacity-30 w-full h-full"
      ></div>
      <div
        style={styles.box}
        className="absolute  w-1/4 h-1/4  bg-white flex flex-col items-center justify-center gap-4"
      >
        <div className="text-md font-semibold">Friend details</div>
        <input
          className="border-2 border-purple-300 p-2 rounded-md focus:outline-none w-1/2"
          placeholder="Enter name "
          onInput={(e: any) => {
            const { value } = e.target;

            setFriendName(value);
          }}
        />
        <button
          onClick={() => {
            props.handler({ name: friendName });
          }}
          className="bg-purple-300 p-2 text-white rounded-md w-1/2"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default DialogBox;
