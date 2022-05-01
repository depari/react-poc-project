import React from "react";
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent } from "@mui/material";

import JsonStore from "../../JsonStore";

function LanguageSelector() {
  const { cur_country_code, cur_language_code, language_list, setCurLanguageCode } = JsonStore();
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
  //     console.log("language Select : " + e.value);
  //     setCurLanguageCode(e.value);
  // };

  const handleChange = (event: SelectChangeEvent) => {
    console.log("Language Select : " + event.target.value);
    setCurLanguageCode(event.target.value);
  };

  return (
    <>
      {/* LanguageSelector - {cur_language_code}        
        <Select options={language_list} onChange={(e) => handleChange(e)}></Select> */}
      <div>
        <FormControl sx={{ m: 1, minWidth: 300 }}>
          <InputLabel>Plz select language</InputLabel>
          <Select onChange={handleChange} input={<OutlinedInput label="lang" />}>
            {language_list.map((item) => (
              <MenuItem value={item} key={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
}

export default LanguageSelector;
