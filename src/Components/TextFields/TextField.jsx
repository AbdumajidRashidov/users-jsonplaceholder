import TextField from "@mui/material/TextField";
import { forwardRef } from "react";
export const TextFieldPost = forwardRef(function TextFieldPost(
  { placeholder, label },
  ref
) {
  return (
    <TextField
      ref={ref}
      className="textField"
      margin="dense"
      color="primary"
      label={label}
      placeholder={placeholder}
      required
    />
  );
});
