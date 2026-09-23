"use client";

import { Search, Menu } from "@mui/icons-material";
import { Avatar, Box, IconButton } from "@mui/material";
import { Bell, UsersRound } from "lucide-react";

export default function Navbar({ onMenuClick }) {
  return (
    <Box
      sx={{
        marginTop: "10px",
        height: "50px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        px: "1rem",
      }}
    >
      {/* Left side */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        {/* Hamburger */}
        <IconButton
          onClick={onMenuClick}
          sx={{
            display: { xs: "flex", md: "none" },
          }}
        >
          <Menu />
        </IconButton>

        {/* Search */}
        <IconButton>
          <Search sx={{ fontSize: 20 }} />
        </IconButton>
      </Box>

      {/* Right side */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {/* Users */}
        <IconButton
          sx={{
            width: 32,
            height: 32,
            backgroundColor: "#ffffff",

            "&:hover": {
              backgroundColor: "#aa5db95d",
              color: "#fefbff",
            },
          }}
        >
          <UsersRound size={20} />
        </IconButton>

        {/* Notifications */}
        <IconButton
          sx={{
            width: 32,
            height: 32,
            backgroundColor: "#ffffff",

            "&:hover": {
              backgroundColor: "#aa5db95d",
              color: "#fefbff",
            },
          }}
        >
          <Bell size={20} />
        </IconButton>

        {/* Profile */}
        <IconButton
          sx={{
            width: 32,
            height: 32,
            backgroundColor: "#ffffff",

            "&:hover": {
              backgroundColor: "#aa5db95d",
              color: "#fefbff",
            },
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/images/images.jpg"
            sx={{
              width: 20,
              height: 20,
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
}