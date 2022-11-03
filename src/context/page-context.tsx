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

type TPage = "project" | "experience" | "stack" | "certification" | "about-me";

interface DefaultValue {
  currentPage: TPage;
  setCurrentPage: Dispatch<SetStateAction<TPage>>;
}

export const PageContext = createContext<DefaultValue>({
  currentPage: "project",
  setCurrentPage: () => "project",
});

export default function PageContextBuilder({ children }: PageContextProps) {
  const [currentPage, setCurrentPage] = useState<TPage>("project");
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
