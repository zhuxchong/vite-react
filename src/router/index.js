import Index from "@/container/Index";
//import About from "@/container/About";
//import Loadable from "react-loadable";
// const Test = _loadable(() => import("@/container/About"));
import loadable from "@loadable/component";

// const LoadableComponent = Loadable({
//   loader: () => import("@/container/About"),
//   loading: Index,
// });

const routes = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/about",
    component: loadable(() => import("@/container/About")),
  },
  // {
  //   path: "/test",
  //   component: LoadableComponent,
  // },
];

export default routes;
