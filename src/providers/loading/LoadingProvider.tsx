import { useCallback, useState } from "react";
import { LoadingContext } from "./LoadingContext";
import { GlobalLoading } from "../../components/common/GlobalLoading";

type Props = {
  children: React.ReactNode;
};

export function LoadingProvider({ children }: Props) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<string | undefined>(undefined);

  const showLoading = useCallback((msg?: string) => {
    setMessage(msg);
    setOpen(true);
  }, []);

  const hideLoading = useCallback(() => {
    setOpen(false);
    setMessage(undefined);
  }, []);

  return (
    <LoadingContext.Provider value={{ showLoading, hideLoading }}>
      {children}
      <GlobalLoading open={open} message={message} />
    </LoadingContext.Provider>
  );
}
