import PageContextBuilder from "../src/context/page-context";
import InitPage from "../src/pages";

export default function Home() {
  return (
    <PageContextBuilder>
      <InitPage />
    </PageContextBuilder>
  );
}
