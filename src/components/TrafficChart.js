"use client";

import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Box, Typography } from "@mui/material";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import PhoneIcon from "@mui/icons-material/Phone";

const data = [
  { value: 63, label: "Desktop", icon: <DesktopWindowsIcon /> },
  { value: 15, label: "Tablet", icon: <TabletMacIcon /> },
  { value: 22, label: "Phone", icon: <PhoneIcon /> },
];

export default function TrafficChart() {
  return (
    <Box>
      {/* Pie Chart */}
      <PieChart
        series={[
          {
            data: data,
            innerRadius: 85,
          },
        ]}
        width={260}
        height={260}
        hideLegend
      />

      {/* Details under chart */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          mt: 1,
        }}
      >
        {data.map((item) => (
          <Box
            key={item.label}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <Box sx={{ color: "black" }}>
              {item.icon}
            </Box>

            <Typography sx={{color:"black"}} fontWeight={600}>
              {item.label}
            </Typography>

            <Typography sx={{color:"black"}} variant="body2" color="text.secondary">
              {item.value}%
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}