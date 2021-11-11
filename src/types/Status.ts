type Status = {
  weight?: number;
  fat_percentage?: number;
  caliper_values?: {
    chest?: number[];
    abs?: number[];
    thighs?: number[];
  };
  caliper_measuremets: "chestAbsThighs";
  caliper_fat_percentage?: number;
};

export default Status;
