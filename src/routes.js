import React from "react";
import $ from "jquery";

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import("./Demo/Dashboard"));
const UIBasicButton = React.lazy(() =>
  import("./Demo/UIElements/Basic/Button")
);
const UIBasicBadges = React.lazy(() =>
  import("./Demo/UIElements/Basic/Badges")
);
const UIBasicBreadcrumbPagination = React.lazy(() =>
  import("./Demo/UIElements/Basic/BreadcrumbPagination")
);
const UIBasicCollapse = React.lazy(() =>
  import("./Demo/UIElements/Basic/Collapse")
);
const UIBasicTabsPills = React.lazy(() =>
  import("./Demo/UIElements/Basic/TabsPills")
);
const UIBasicBasicTypography = React.lazy(() =>
  import("./Demo/UIElements/Basic/Typography")
);
const FormsElements = React.lazy(() => import("./Demo/Forms/FormsElements"));
const BootstrapTable = React.lazy(() => import("./Demo/Tables/BootstrapTable"));
const Nvd3Chart = React.lazy(() => import("./Demo/Charts/Nvd3Chart/index"));
const GoogleMap = React.lazy(() => import("./Demo/Maps/GoogleMap/index"));
const OtherSamplePage = React.lazy(() => import("./Demo/Other/SamplePage"));
const OtherDocs = React.lazy(() => import("./Demo/Other/Docs"));
const Home = React.lazy(() => import("./Views/Home"));

export const routes = [
  {
    path: "x-_Kz101924i/#/dashboard",
    exact: true,
    name: "Default",
    component: DashboardDefault,
  },
  {
    path: "x-_Kz101924i/#/basic/button",
    exact: true,
    name: "Basic Button",
    component: UIBasicButton,
  },
  {
    path: "x-_Kz101924i/#/basic/badges",
    exact: true,
    name: "Basic Badges",
    component: UIBasicBadges,
  },
  {
    path: "x-_Kz101924i/#/basic/breadcrumb-paging",
    exact: true,
    name: "Basic Breadcrumb Pagination",
    component: UIBasicBreadcrumbPagination,
  },
  {
    path: "x-_Kz101924i/#/basic/collapse",
    exact: true,
    name: "Basic Collapse",
    component: UIBasicCollapse,
  },
  {
    path: "x-_Kz101924i/#/basic/tabs-pills",
    exact: true,
    name: "Basic Tabs & Pills",
    component: UIBasicTabsPills,
  },
  {
    path: "x-_Kz101924i/#/basic/typography",
    exact: true,
    name: "Basic Typography",
    component: UIBasicBasicTypography,
  },
  {
    path: "x-_Kz101924i/#/forms/form-basic",
    exact: true,
    name: "Forms Elements",
    component: FormsElements,
  },
  {
    path: "x-_Kz101924i/#/tables/bootstrap",
    exact: true,
    name: "Bootstrap Table",
    component: BootstrapTable,
  },
  {
    path: "x-_Kz101924i/#/charts/nvd3",
    exact: true,
    name: "Nvd3 Chart",
    component: Nvd3Chart,
  },
  {
    path: "x-_Kz101924i/#/maps/google-map",
    exact: true,
    name: "Google Map",
    component: GoogleMap,
  },
  {
    path: "x-_Kz101924i/#/sample-page",
    exact: true,
    name: "Sample Page",
    component: OtherSamplePage,
  },
  {
    path: "x-_Kz101924i/#/docs",
    exact: true,
    name: "Documentation",
    component: OtherDocs,
  },
  { path: "x-_Kz101924i/#/home", exact: true, name: "Home", component: Home },
];

export default routes;
