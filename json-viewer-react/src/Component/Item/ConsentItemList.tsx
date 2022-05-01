import { Button, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

import JsonStore from "../../JsonStore";

function ConsentItemList() {
  const { item_btn_viewdetail } = JsonStore();
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 1920, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Item title"
            secondary={
              <React.Fragment>
                <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                  Item Name
                </Typography>
                {" — description"}
              </React.Fragment>
            }
          />
          <Button variant="outlined">{item_btn_viewdetail}</Button>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Item title"
            secondary={
              <React.Fragment>
                <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                  Item Name
                </Typography>
                {" — description"}
              </React.Fragment>
            }
          />
          <Button variant="outlined">{item_btn_viewdetail}</Button>
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </>
  );
}

export default ConsentItemList;
