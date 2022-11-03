import React, { useContext } from "react";
import Header from "./Header";
import PageWrapper from "../components/PageWrapper";
import Tab from "./Tab";
import { PageContext } from "../context/page-context";

export default function InitPage() {
  const { currentPage } = useContext(PageContext);
  return (
    <PageWrapper title="My Portofolio">
      <Header />
      <Tab />
      {currentPage === "project"
        ? "project"
        : currentPage === "experience"
        ? "experience"
        : currentPage === "stack"
        ? "stack"
        : currentPage === "certification"
        ? "certification"
        : "about me"}
    </PageWrapper>
  );
}
