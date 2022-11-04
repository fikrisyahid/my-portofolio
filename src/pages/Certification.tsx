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
          <CertBox
            alt="cisdv"
            src="/assets/certification/cisdv.jpg"
            url="https://www.credly.com/badges/ead8ae3b-a3e3-4cf4-bb8f-a2475f8b1320"
          />
          <CertBox
            alt="aws"
            src="/assets/certification/aws.jpg"
            url="https://www.credly.com/badges/106d18b9-04b1-4311-8911-18b157c9a399/public_url"
          />
          <CertBox alt="mta" src="/assets/certification/mta.jpg" />
        </Box>
        <Box display="flex" justifyContent="space-evenly">
          <CertBox
            alt="data_privacy_fundamentals"
            src="/assets/certification/data_privacy_fundamentals.jpg"
            url="https://courses.cognitiveclass.ai/certificates/863409aba30d4415a8266d605d395a94"
          />
          <CertBox alt="redhat" src="/assets/certification/redhat.jpg" />
          <CertBox
            alt="dl_fundamentals"
            src="/assets/certification/dl_fundamentals.jpg"
            url="https://courses.cognitiveclass.ai/certificates/e89e1b05968a4747b65fb352576088b2"
          />
        </Box>
        <Box display="flex" justifyContent="space-evenly">
          <CertBox
            alt="introduction_ds"
            src="/assets/certification/introduction_ds.jpg"
            url="https://courses.cognitiveclass.ai/certificates/011369a503ae4b7ebe8bfc186c34c5ec"
          />
          <CertBox
            alt="ml"
            src="/assets/certification/ml.jpg"
            url="https://www.dicoding.com/certificates/72ZD23OQQZYW"
          />
          <CertBox
            alt="blockchain"
            src="/assets/certification/blockchain.jpg"
            url="https://courses.cognitiveclass.ai/certificates/cdedf9e3cf1840a8845335b9436a5784"
          />
        </Box>
        <Box display="flex" justifyContent="space-evenly">
          <CertBox
            alt="python_101"
            src="/assets/certification/python_101.jpg"
            url="https://courses.cognitiveclass.ai/certificates/1ba706c9753c4666aff99050d30b3664"
          />
          <CertBox
            alt="python"
            src="/assets/certification/python.jpg"
            url="https://www.dicoding.com/certificates/ERZR5D672PYV"
          />
          <CertBox
            alt="r_101"
            src="/assets/certification/r_101.jpg"
            url="https://courses.cognitiveclass.ai/certificates/85e2293b00f54b7893fc43d58597f859"
          />
        </Box>
        <Box display="flex" justifyContent="space-evenly">
          <CertBox
            alt="data_science_methodology"
            src="/assets/certification/data_science_methodology.jpg"
            url="https://courses.cognitiveclass.ai/certificates/e101c773226042549436bd82cc3e6efc"
          />
          <CertBox
            alt="visualisasi_data"
            src="/assets/certification/visualisasi_data.jpg"
            url="https://www.dicoding.com/certificates/JMZVMWQJ3ZN9"
          />
        </Box>
      </Box>
    </Box>
  );
}
