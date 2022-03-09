import {
  Button,
  Dialog,
  TextField,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useRef } from "react";
export default function Modal({ open, handleClose, dataId }) {
  const modalTextRef = useRef();
  const modalEmailRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      comment: modalTextRef.current.children[1].children[0].value,
      email: modalEmailRef.current.children[1].children[0].value,
    };

    fetch(`${process.env.REACT_APP_API}/addcomment/${dataId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    handleClose();
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Add comment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            facere. Lorem ipsum dolor sit amet consectetur.
          </DialogContentText>
          <TextField
            ref={modalTextRef}
            required
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            ref={modalEmailRef}
            required
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type={"submit"}>Add</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
