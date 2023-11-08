import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./footer/Footer";
import { Suspense } from "react"
const LayOut: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<h1>loading...</h1>}>
        <Outlet />
        </Suspense>
        <Footer/>
      </main>
      
    </>
  );
};

export default LayOut;
