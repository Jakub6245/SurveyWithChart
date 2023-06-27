import BarChart from "../features/chart/components/BarChart";
import useBarChartConfig from "../features/chart/hooks/useBarChartConfig";

const Chart = () => {
  const barChartConfig = useBarChartConfig();
  return <BarChart chartData={barChartConfig} />;
};

export default Chart;
