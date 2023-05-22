import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import cams from "../json/cams.json";
import useCam from "../hooks/useCam";
import { Fragment, useEffect } from "react";
function CamsList() {
  const { cam: selectedCam, setCam } = useCam();

  useEffect(()=>{
    setCam(cams[0])
  },[])
  return (
    <List>
      {cams.map((cam, i) => {
        const selected = cam.name === selectedCam?.name;
        return (
          <Fragment key={i}>
            <ListItem disablePadding >
              <ListItemButton selected={selected} onClick={() => setCam(cam)}>
                <ListItemText primary={cam.name} />
              </ListItemButton>
            </ListItem>
            {i < cams.length - 1 && <Divider component="li" />}
          </Fragment>
        );
      })}
    </List>
  );
}

export default CamsList;
