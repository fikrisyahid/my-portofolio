import { SnackbarProvider } from "notistack";
import PageContextProvider from "../src/context/page-context";
import InitPage from "../src/pages";

export default function Home() {
  return (
    <PageContextProvider>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={2000}
      >
        <InitPage />
      </SnackbarProvider>
    </PageContextProvider>
  );
}
