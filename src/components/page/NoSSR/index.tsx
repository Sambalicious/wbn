import dynamic from "next/dynamic";
import { ReactNode } from "react";

interface NoSSRProps {
  children: ReactNode;
}
const NoSSR = ({ children }: NoSSRProps) => <>{children}</>;

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
});
