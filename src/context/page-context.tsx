import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface PageContextProps {
  children: ReactNode;
}

type TPage = "stack" | "experience" | "certification" | "about-me";

interface DefaultValue {
  currentPage: TPage;
  setCurrentPage: Dispatch<SetStateAction<TPage>>;
}

export const PageContext = createContext<DefaultValue>({
  currentPage: "stack",
  setCurrentPage: () => "stack",
});

export default function PageContextProvider({ children }: PageContextProps) {
  const [currentPage, setCurrentPage] = useState<TPage>("stack");
  return (
    <PageContext.Provider
      value={{
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </PageContext.Provider>
  );
}
