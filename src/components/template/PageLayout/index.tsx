import { Header } from "@/components/molecules";
import Head from "next/head";
import { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
  title?: string;
  subTitle?: string;
}
export const PageLayout = ({ children, title, subTitle }: PageProps) => {
  return (
    <>
      <Head>
        <title>{title} </title>
      </Head>
      <Header title={title} subTitle={subTitle} />

      <main className="mt-1">{children}</main>
    </>
  );
};
