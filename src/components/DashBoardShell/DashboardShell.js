"use client";

import { useState } from "react";
import { Box } from "@mui/material";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/sideBar";

export default function DashboardShell({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      {/* Desktop Sidebar */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          width: "20vw",
          backgroundColor: "rgb(28, 37, 54)",
        }}
      >
        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100vw", md: "80vw" },
          backgroundColor: "#ffffff",
        }}
      >
        <Navbar
          onMenuClick={() => setSidebarOpen(true)}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "38px",
            width: "100%",
            height: "100%",
            px: 3,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}