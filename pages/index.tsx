import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import MainCard from "../components/MainCard";
import Item from "../components/Item";
import PageWrapper from "../components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper title="My Portofolio">
      <Item align="center" hover sx={{ marginTop: 5 }}>
        <img
          alt="profile-pict"
          src="/profil.jpeg"
          style={{ width: "200px", height: "200px", borderRadius: 100 }}
        />
      </Item>
      <Item align="center">
        <Typography variant="h2" fontWeight={500}>
          Welcome to my portofolio
        </Typography>
      </Item>
      <MainCard>
        <Item align="center">
          <Typography variant="h5" fontWeight={500}>
            Stack I Used
          </Typography>
          <Divider variant="fullWidth" />
        </Item>
      </MainCard>
    </PageWrapper>
  );
}
