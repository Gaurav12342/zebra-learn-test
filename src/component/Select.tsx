import { FC } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectComponent: FC<any> = (props) => {
  const { options, label, register } = props;
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select sx={{ width: 700 }} {...register} label={label}>
          {options?.map((data: any) => {
            return <MenuItem value={data?.value}>{data?.label}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectComponent;
