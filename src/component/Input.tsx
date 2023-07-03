import { FC } from "react";
import TextField from "@mui/material/TextField";

const Input: FC<any> = (props) => {
  const { name, placeholder, type = "text", register } = props;
  return (
    <div>
      <TextField
        name={name}
        type={type}
        sx={{ width: 700 }}
        label={placeholder}
        variant="outlined"
        placeholder={placeholder}
        {...register}
        {...props}
      />
    </div>
  );
};

export default Input;
