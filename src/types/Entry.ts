import Nutrition from "./Nutrition";
import Status from "./Status";

type Entry = {
  time: Date;
  type: "nutrition" | "status";
  entry: Nutrition | Status;
};
