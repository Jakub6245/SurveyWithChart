import { useMemo } from "react";
import { useSelector } from "react-redux";

class BarChartConfig {
  datasets = {
    labels: [] as string[],
    datasets: [
      {
        label: "Given Ansewers",
        data: [] as number[],
        backgroundColor: ["red", "blue"],
      },
    ],
  };

  constructor(stateData: Record<string, number>) {
    this.datasets.labels = this.sortKeysByHigherValue(stateData);
    this.datasets.datasets[0].data = this.sortValuesByHigherValue(stateData);
  }

  sortKeysByHigherValue(stateData: Record<string, number>) {
    return Object.entries(stateData)
      .sort(([, valueA], [, valueB]) => valueB - valueA)
      .reduce((acc: string[], [key]) => {
        acc.push(key);
        return acc;
      }, []);
  }

  sortValuesByHigherValue(stateData: Record<string, number>) {
    return Object.values(stateData).sort((a, b) => b - a);
  }
}

const useBarChartConfig = () => {
  const stateData = useSelector(
    (state: Record<string, Record<string, Record<string, number>>>) =>
      state.data.data
  );
  console.log(stateData);

  // yagni - you aren't gonna need it
  const barChartConfig = useMemo(
    () => new BarChartConfig(stateData),
    [stateData]
  );

  // DTO -> data transfer object

  return barChartConfig.datasets;
};

export default useBarChartConfig;
