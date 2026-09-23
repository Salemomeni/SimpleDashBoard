import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts/BarChart";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 1890, 2390, 3490, 1890, 2390];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300, 4800, 3800, 4300, 4800, 3800];
const xLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

export default function SalesChart() {
  return (
    <Box sx={{ width: "100%", height: 350,marginTop:"40px"}}>
      <BarChart
        series={[
          { data: pData, id: "pvId", color: "rgb(99, 102, 241)" },
          { data: uData, id: "uvId", color: "rgb(216, 217, 252)" },
        ]}
        xAxis={[{ data: xLabels, height: 25 ,  categoryGapRatio: 0.4,
      barGapRatio: 0, }]}
        yAxis={[{ width: 30 , height: 0, }]}
        
      />
    </Box>
  );
}
