import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import PageWrapper from "../components/Atoms/PageWrapper";
import Tab from "../components/Tab";
import { PageContext } from "../context/page-context";

export default function InitPage() {
  const { currentPage } = useContext(PageContext);
  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);
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
