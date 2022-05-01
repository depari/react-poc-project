import { Button, Checkbox, FormGroup } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import React, { KeyboardEvent } from "react";
import Popup from "reactjs-popup";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import ConsentItemList from "./ConsentItemList";

import JsonStore from "../../JsonStore";

function MainViewItem() {
  const {
    main_title,
    main_description,
    main_disclaimer,
    main_cb_all,
    main_btn_agree,
    item_btn_viewdetail,
    skip_title,
    skip_description,
    skip_btn_ok,
    skip_btn_cancel,
  } = JsonStore();

  const [open, setOpen] = React.useState(false);
  const [cb_all_checked, setCbAllChecked] = React.useState(false);

  const handleCBChnge = () => {
    setCbAllChecked(!cb_all_checked);
  };

  const handleCBKeyUp = (event: KeyboardEvent<HTMLLabelElement>) => {
    if (event.key === "Enter") {
      console.log("Enter Key Pressed");
      setCbAllChecked(!cb_all_checked);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1>{main_title}</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h2>{main_description}</h2>
      </div>

      <ConsentItemList />

      {/* <div style={{display: 'flex',  justifyContent:'right', alignItems:'center'}}>
        <ConsentItem/>
      </div> */}

      {main_cb_all.length > 0 && (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <FormGroup>
            <FormControlLabel control={<Checkbox checked={cb_all_checked} />} onChange={handleCBChnge} label={main_cb_all} onKeyUp={handleCBKeyUp} />
          </FormGroup>
        </div>
      )}

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h3>{main_disclaimer}</h3>
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Button variant="outlined">{main_btn_agree}</Button>
      </div>

      <div style={{ display: "flex", justifyContent: "right", alignItems: "center" }}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Trigger Skip
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">{skip_title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">{skip_description}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>{skip_btn_ok}</Button>
            <Button onClick={handleClose} autoFocus>
              {skip_btn_cancel}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default MainViewItem;
