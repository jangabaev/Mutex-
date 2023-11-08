import React from "react";
import PathConstants from "./paths/pathConstants";

const Home = React.lazy(() => import("../pages/home/Home"));
const About = React.lazy(() => import("../pages/about/About"));
const Services = React.lazy(() => import("../pages/services/Services"));
const Contack = React.lazy(() => import("../pages/contact/Contack"));
const routes = [
  { path: PathConstants.HOME, element: <Home /> },
  { path: PathConstants.ABOUT, element: <About /> },
  { path: PathConstants.SERVICES, element: <Services /> },
  { path: PathConstants.CONTACK, element: <Contack /> },
];

export default routes;
