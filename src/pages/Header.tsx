import React from "react";
import MainCard from "../components/MainCard";
import Typography from "@mui/material/Typography";
import Item from "../components/Item";
import SocialMedia from "./SocialMedia";

export default function Header() {
  return (
    <>
      <Item align="center" hover sx={{ marginTop: 5 }}>
        <img
          alt="profile-pict"
          src="/profil.jpeg"
          style={{ width: "200px", height: "200px", borderRadius: 100 }}
        />
      </Item>
      <Item align="center">
        <Typography variant="h4" fontWeight={700} textAlign="center">
          Muhammad Fikri Syahid
        </Typography>
      </Item>
      <Item align="center">
        <Typography variant="h5" textAlign="center">
          IT Fresh Graduate
        </Typography>
      </Item>
      <Item>
        <SocialMedia sx={{ marginBottom: 3 }} />
      </Item>
      <Item
        align="center"
        sx={{ marginLeft: "5vw", marginRight: "5vw", marginBottom: 5 }}
        hover
      >
        <MainCard>
          <Typography variant="h4" fontWeight={700} textAlign="center" mb={1}>
            Summary
          </Typography>
          <Typography variant="h6" textAlign="center">
            Hi, I'm an IT fresh graduate who has experience in WordPress and Web
            App development. I can create and manage websites using CMS tools
            such as WordPress. I can also make a RESTful API using NodeJS or
            Django. I am able to work on front-end UI using NextJS or ReactJS. I
            also have some experience in PHP and CodeIgniter 4 framework. I'm
            able to work individually or in team and I have experience in using
            GitHub to collaborate on developing apps.
          </Typography>
        </MainCard>
      </Item>
    </>
  );
}
