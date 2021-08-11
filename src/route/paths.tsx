import { Route } from "../types/route";
import Home from "../components/pages/Home";
import Chunk from "../components/pages/Chunk";
import Concat from "../components/pages/Concat";
import Difference from "../components/pages/Difference";
import Compact from "../components/pages/Compact";

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
  {
    label: "Concat",
    path: "/concat",
    component: Concat,
  },
  {
    label: "Difference",
    path: "/difference",
    component: Difference,
  },
  {
    label: "Compact",
    path: "/compact",
    component: Compact,
  },
];

export default paths;
