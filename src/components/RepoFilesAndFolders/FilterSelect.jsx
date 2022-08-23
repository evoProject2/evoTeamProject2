import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const FilterSelect = ({ filterData }) => {
  const [filterValue, setFilterValue] = React.useState("");

  const handleChange = (event) => {
    const selectValue = event.target.value;
    setFilterValue(selectValue);

    if (selectValue === "Default") {
      return [...filterData].filter((item) => {
        console.log(item.type);
        return item.type;
      });
    } else {
      if (selectValue === "Folder") {
        console.log(filterData);
        return [...filterData].filter((item) => {
          console.log(item.type === "dir");
          return filterData[item.type] === "dir";
        });
      }
      if (selectValue === "Files") {
        return [...filterData].filter((item) => {
          console.log(item.type === "file");
          return item.type === "file";
        });
      }
    }
  };

  return (
    <Box sx={{ ml: "15px", py: "5px" }}>
      <FormControl sx={{ width: "40%" }}>
        <InputLabel id="simple-select-label">Select Type</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={filterValue}
          label="Select Type"
          onChange={handleChange}
        >
          <MenuItem value="Default">Default</MenuItem>
          <MenuItem value="Folder">Folder</MenuItem>
          <MenuItem value="Files">Files</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterSelect;
