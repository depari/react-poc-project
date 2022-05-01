import React from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// import { Theme, useTheme } from '@mui/material/styles';
import { FormControl, InputLabel, MenuItem, OutlinedInput } from "@mui/material";

import JsonStore from "../../JsonStore";

function CountrySelector() {
  // const { language_code, setLanguageCode} = jsonStore();
  //const bears = useStore(state => state.bears);
  const { cur_country_code, cur_language_code, country_list, setCurCountryCode, setCurLanguageCode } = JsonStore();
  // const theme = useTheme();

  const handleChange = (event: SelectChangeEvent) => {
    console.log("Country Select : " + event.target.value);
    setCurCountryCode(event.target.value);
  };

  return (
    <>
      <div>
        <FormControl sx={{ m: 1, minWidth: 300 }}>
          <InputLabel>Plz select country</InputLabel>
          <Select onChange={handleChange} input={<OutlinedInput label="CountryCode" />}>
            {country_list.map((country) => (
              <MenuItem value={country} key={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
}

export default CountrySelector;
