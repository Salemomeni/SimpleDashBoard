import {
  Error,
  HowToReg,
  Login,
  People,
  Person,
  SettingsAccessibility,
} from "@mui/icons-material";

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import Image from "next/image";

export default function Sidebar({ open, onClose }) {
  const menuItems = [
    { name: "Overview", icon: <SignalCellularAltIcon /> },
    { name: "Customers", icon: <People /> },
    { name: "Account", icon: <Person /> },
    { name: "Settings", icon: <SettingsAccessibility /> },
    { name: "Login", icon: <Login /> },
    { name: "Register", icon: <HowToReg /> },
    { name: "Error", icon: <Error /> },
  ];

  const sidebarContent = (
    <Box
      sx={{
        px: 2,
        height: "100vh",
        display: "flex",
        gap: "1rem",
        flexDirection: "column",
        width: "220px",
      }}
    >
      <Image
        src="/images/Logo1.png"
        width={80}
        height={80}
        alt="Logo"
        style={{
          objectFit: "contain",
        }}
      />

      <Box
        sx={{
          backgroundColor: "rgb(37, 46, 62)",
          height: "70px",
          borderRadius: "15px",
          padding: "1rem",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: "0.9rem",
            fontWeight: "bold",
          }}
        >
          Devias
        </Typography>

        <Typography
          sx={{
            color: "#fff",
            fontSize: "0.65rem",
          }}
        >
          Product Designer
        </Typography>
      </Box>

      <List>
        {menuItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              onClick={onClose}
              sx={{
                height: "35px",
                borderRadius: "15px",
                marginBottom: "0.8rem",
                alignItems: "center",
                display: "flex",

                "&:hover": {
                  backgroundColor: "rgb(37, 46, 62)",
                  color: "#ffffff",

                  "& .MuiListItemText-primary": {
                    color: "#ffffff",
                  },

                  "& .MuiListItemIcon-root": {
                    color: "rgb(248, 130, 5)",
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: "rgb(144, 152, 163)",
                  fontSize: "18px",
                  minWidth: "35px",
                }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.name}
                slotProps={{
                  primary: {
                    sx: {
                      color: "rgb(144, 152, 163)",
                      fontSize: "0.8rem",
                      marginTop: "3px",
                    },
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        {sidebarContent}
      </Box>

      {/* Mobile / Tablet Sidebar */}
      <Drawer
        anchor="left"
        open={open}
        onClose={onClose}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {sidebarContent}
      </Drawer>
    </>
  );
}