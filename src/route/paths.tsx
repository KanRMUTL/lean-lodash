import { Route } from "../types/route";
import Home from "../components/pages/Home";
import Chunk from "../components/pages/Chunk";

const paths: Route[] = [
  {
    label: "Home",
    path: "/",
    component: Home,
  },
  {
    label: "Chunk",
    path: "/chunk",
    component: Chunk,
  },
];

export default paths;
