import React from "react";
import Header from "./Header";
import PageWrapper from "../components/PageWrapper";
import Content from "./Content";

export default function InitPage() {
  return (
    <PageWrapper title="My Portofolio">
      <Header />
      <Content />
    </PageWrapper>
  );
}
