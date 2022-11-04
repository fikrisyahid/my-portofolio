import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { PageContext } from "../context/page-context";

export default function Tab() {
  const { currentPage, setCurrentPage } = useContext(PageContext);
  return (
    <Box display="flex" justifyContent="center" gap={3}>
      <Button
        variant="text"
        sx={{
          fontSize: 16,
          fontWeight: 700,
          color: "white",
          backgroundColor: currentPage === "stack" ? "#25343F" : "transparent",
        }}
        onClick={() => setCurrentPage("stack")}
      >
        My Stack
      </Button>
      <Button
        variant="text"
        sx={{
          fontSize: 16,
          fontWeight: 700,
          color: "white",
          backgroundColor:
            currentPage === "experience" ? "#25343F" : "transparent",
        }}
        onClick={() => setCurrentPage("experience")}
      >
        Work Experience
      </Button>
      <Button
        variant="text"
        sx={{
          fontSize: 16,
          fontWeight: 700,
          color: "white",
          backgroundColor:
            currentPage === "certification" ? "#25343F" : "transparent",
        }}
        onClick={() => setCurrentPage("certification")}
      >
        Certification
      </Button>
      <Button
        variant="text"
        sx={{
          fontSize: 16,
          fontWeight: 700,
          color: "white",
          backgroundColor:
            currentPage === "about-me" ? "#25343F" : "transparent",
        }}
        onClick={() => setCurrentPage("about-me")}
      >
        About Me
      </Button>
    </Box>
  );
}
