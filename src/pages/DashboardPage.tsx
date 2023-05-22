import {
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Header from "../components/Header";
import cams from "../json/cams.json";
import CamIframe from "./CamIframe";
import  { CamContextProvider } from "../context/SelectedCamContext";
import CamsList from "../components/CamsList";
function DashboardPage() {
  return (
    <CamContextProvider>
      <Header />
      <Container sx={{
            pt:2,
          }}>
        <Grid container>
          <Grid item md={4} sx={{
            pr:2,
          }}>
            <Typography variant="h3">Cams</Typography>
            <CamsList/>
          </Grid>
          <Grid item md={8}>
            {/* <iframe src="/cam" /> */}
            <CamIframe />
          </Grid>
        </Grid>
      </Container>
    </CamContextProvider>
  );
}

export default DashboardPage;
