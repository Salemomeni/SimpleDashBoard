import Image from "next/image";
import styles from "./page.module.css";
import { Box, Grid } from "@mui/material";
import OverViewCard from "@/components/over-view-card";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PeopleIcon from "@mui/icons-material/People";
import FolderIcon from "@mui/icons-material/Folder";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SalesChart from "@/components/salesChart";
import TrafficChart from "@/components/TrafficChart";

export default function Home() {
  const overviewData = [
    {
      title: "Budget",
      amount: "$24k",
      color: "#F04337",
      icon: <MonetizationOnIcon />,
    },
    {
      title: "Total Users",
      amount: "1,245",
      color: "#373af0",
      icon: <PeopleIcon />,
    },
    {
      title: "Total Projects",
      amount: "56",
      color: "#f0d137",
      icon: <FolderIcon />,
    },
    {
      title: "Revenue",
      amount: "$12k",
      color: "#62f037",
      icon: <AttachMoneyIcon />,
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box sx={{ width: "100%", padding: "1rem" }}>
        <Grid container spacing={2}>
          {overviewData.map((item, index) => (
            <Grid
              key={index}
              size={{
                xs: 12,
                sm: 6,
                md: 3,
              }}
            >
              <OverViewCard
                title={item.title}
                amount={item.amount}
                icon={item.icon}
                color={item.color}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    width: "100%",
    height: "100%",
    padding: "1rem",
    gap: 2,
  }}
>
  {/* Sales Chart */}
  <Box
    sx={{
      width: { xs: "100%", md: "60%" },
      height: "100%",
      borderRadius: "17px",
      backgroundColor: "#ffffff",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    }}
  >
    <SalesChart />
  </Box>

  {/* Traffic Chart */}
  <Box
    sx={{
      width: { xs: "100%", md: "35%" },
      height: "100%",
      borderRadius: "17px",
      backgroundColor: "#ffffff",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: { xs: 0, md: "-10px" },
    }}
  >
    <TrafficChart />
  </Box>
</Box>
    </Box>
  );
}
