import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { CiEdit } from "react-icons/ci";
import { useDispatch } from "react-redux";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


export default function BasicModal2(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <div>
      <button onClick={handleOpen}>
        <CiEdit />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form
            className="flex flex-col gap-4 items-center"
            onSubmit={handleSubmit}
          >
            <input
              className="border border-slate-500 rounded-full w-full pl-2"
              type="text"
              name="newTask"
              placeholder={props.oldTask}
            />
            <input
              className="bg-[#FCA311] font-semibold w-3/4 pr-4 pl-4 pt-2 pb-2 rounded-lg hover:cursor-pointer"
              type="submit"
            />
          </form>
        </Box>
      </Modal>
    </div>
  );
}