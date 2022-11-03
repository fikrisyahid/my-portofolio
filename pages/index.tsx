import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import Item from "../components/reusable/Item";
import MainCard from "../components/reusable/MainCard";
import PageWrapper from "../components/reusable/PageWrapper";
import Header from "../components/Header";

export default function Home() {
  return (
    <PageWrapper title="My Portofolio">
      <Header />
      <MainCard>
        <Item align="center">
          <Typography variant="h5" fontWeight={500}>
            Stack I Used
          </Typography>
        </Item>
        <Divider variant="fullWidth" />
      </MainCard>
    </PageWrapper>
  );
}
