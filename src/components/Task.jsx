import { useState } from "react";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import BasicModal2 from "./EditForm";

function Task(props) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex w-4/5 justify-between mx-auto">
      <div className="flex gap-3 items-center">
        {checked ? (
          <RiCheckboxCircleLine onClick={() => {
            setChecked(false)
            props.status("pending")
          }} />
        ) : (
          <MdOutlineRadioButtonUnchecked onClick={() => {
            setChecked(true)
            props.status("completed")
          }} />
        )}

        <h1 className="text-xl font-medium">{props.title}</h1>
      </div>
      <div className="flex gap-4 items-center">
        <BasicModal2
          oldTask={props.title}
          handleUpdate={handleEdit}
        />
        <MdDelete onClick={() => handleDelete(props.title)} />
      </div>
    </div>
  );
}

export default Task;