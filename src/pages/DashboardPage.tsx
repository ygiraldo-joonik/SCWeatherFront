import {
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Header from "../components/Header";
import cams from "../json/cams.json";
import CamIframe from "../components/CamIframe";
import  { CamContextProvider } from "../context/SelectedCamContext";
import CamsList from "../components/CamsList";
function DashboardPage() {
  const smallScreen = useMediaQuery("(max-width: 900px)");

  return (
    <CamContextProvider>
      <Header />
      <Container sx={{
            pt:2,
          }}>
        <Grid container>
          <Grid item xs={12} md={2}>
            <Typography variant="h5" textAlign={smallScreen ? "left": "center"}>Cams</Typography>
            <CamsList/>
          </Grid>
          <Grid item xs={12} md={10}>
            <CamIframe />
          </Grid>
        </Grid>
      </Container>
    </CamContextProvider>
  );
}

export default DashboardPage;
