import React from "react";
import MainCard from "./Atoms/MainCard";
import Typography from '@mui/material/Typography'
import Item from "./Atoms/Item";

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
        <Typography variant="h4" fontWeight={700}>
          Muhammad Fikri Syahid
        </Typography>
      </Item>
      <Item align="center" sx={{ marginBottom: 5 }}>
        <Typography variant="h5" fontWeight={100}>
          IT Fresh Graduate
        </Typography>
      </Item>
      <Item
        align="center"
        sx={{ marginLeft: 20, marginRight: 20, marginBottom: 5 }}
        hover
      >
        <MainCard>
          <Typography variant="h4" fontWeight={700} textAlign="center" mb={1}>
            Summary
          </Typography>
          <Typography variant="h6" fontWeight={100} textAlign="center">
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
