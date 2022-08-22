// layout
import { HeaderOnly } from "../../Layout";
import Home from "../Home";
import Following from "../Following";
import Profile from "../Profile";
import Upload from "../Upload";
import Search from "../Search";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/Following", component: Following },
  { path: "/Profile", component: Profile },
  { path: "/Upload", component: Upload, layout: HeaderOnly },
  { path: "/Search", component: Search, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
