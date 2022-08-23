import Box from "@mui/material/Box";
import React, { useState } from "react";
import FilterSelect from "./FilterSelect";
import { Checkbox, FormControlLabel } from "@mui/material";

const FilterByType = ({ onFilterByType }) => {
  const [showSelect, setShowSelect] = useState(false);

  const showSelectHandler = () => {
    setShowSelect((showSelectType) => !showSelectType);
  };

  return (
    <Box>
      <FormControlLabel
        label="Filter By Type"
        control={
          <Checkbox
            sx={{
              color: "primary.main",
              ml: "15px",
              "&.Mui-checked": {
                color: "secondary.main",
              },
              p: "12px 10px",
            }}
            onChange={showSelectHandler}
          />
        }
      />

      {showSelect ? <FilterSelect onFilterByType={onFilterByType} /> : null}
    </Box>
  );
};

export default FilterByType;
