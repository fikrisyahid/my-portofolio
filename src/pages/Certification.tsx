import Box from "@mui/material/Box";
import React from "react";
import Item from "../components/Item";
import Typography from "@mui/material/Typography";
import CertBox from "../components/CertBox";

export default function Certification() {
  return (
    <Box>
      <Box display="flex" justifyContent="center" mb={5}>
        <Item>
          <Typography variant="h3" fontWeight={300} textAlign="center">
            My certifications
          </Typography>
        </Item>
      </Box>
      <Box display="flex" flexDirection="column" gap={5}>
        <Box display="flex" justifyContent="space-evenly">
          <CertBox alt="cisdv" src="/assets/certification/cisdv.jpg" url="" />
          <CertBox alt="aws" src="/assets/certification/aws.jpg" url="" />
          <CertBox alt="mta" src="/assets/certification/mta.jpg" url="" />
        </Box>
        <Box display="flex" justifyContent="space-evenly">
          <CertBox
            alt="data_privacy_fundamentals"
            src="/assets/certification/data_privacy_fundamentals.jpg"
            url=""
          />
          <CertBox
            alt="data_science_methodology"
            src="/assets/certification/data_science_methodology.jpg"
            url=""
          />
          <CertBox
            alt="dl_fundamentals"
            src="/assets/certification/dl_fundamentals.jpg"
            url=""
          />
        </Box>
        <Box display="flex" justifyContent="space-evenly">
          <CertBox
            alt="introduction_ds"
            src="/assets/certification/introduction_ds.jpg"
            url=""
          />
          <CertBox alt="ml" src="/assets/certification/ml.jpg" url="" />
          <CertBox
            alt="blockchain"
            src="/assets/certification/blockchain.jpg"
            url=""
          />
        </Box>
        <Box display="flex" justifyContent="space-evenly">
          <CertBox
            alt="python_101"
            src="/assets/certification/python_101.jpg"
            url=""
          />
          <CertBox alt="python" src="/assets/certification/python.jpg" url="" />
          <CertBox alt="r_101" src="/assets/certification/r_101.jpg" url="" />
        </Box>
        <Box display="flex" justifyContent="space-evenly">
          <CertBox alt="redhat" src="/assets/certification/redhat.jpg" url="" />
          <CertBox
            alt="visualisasi_data"
            src="/assets/certification/visualisasi_data.jpg"
            url=""
          />
        </Box>
      </Box>
    </Box>
  );
}
