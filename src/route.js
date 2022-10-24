import React from "react";

const SignUp1 = React.lazy(() =>
  import("./Demo/Authentication/SignUp/SignUp1")
);
const Signin1 = React.lazy(() =>
  import("./Demo/Authentication/SignIn/SignIn1")
);
const Home = React.lazy(() => import("./Views/Home"));
// const Dashboard = React.lazy(() => import("./Demo/Dashboard"));

const route = [
  { path: "/auth/signup-1", exact: true, name: "Signup 1", component: SignUp1 },
  { path: "/auth/signin-1", exact: true, name: "Signin 1", component: Signin1 },
  { path: "/home", exact: true, name: "Home", component: Home },
  // { path: "/Dashboard", exact: true, name: "Dashboard", component: Dashboard },
];

export default route;
