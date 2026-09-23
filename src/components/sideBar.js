import { Error, HowToReg, Login, People, Person, SettingsAccessibility, SignalCellular0Bar } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import Image from "next/image";

export default function Sidebar() {
  const menuItems = [
    { name: "Overview", icon: <SignalCellularAltIcon size={18} /> },
    { name: "Customers", icon: <People size={18} /> },
    { name: "Account", icon: <Person size={18} /> },
    { name: "Settings", icon: <SettingsAccessibility size={18} /> },
    { name: "Login", icon: <Login size={18} /> },
    { name: "Register", icon: <HowToReg size={18} /> },
    { name: "Error", icon: <Error size={18} /> },
  ];
  return (
    <Box
      sx={{
        px: 2,
        height: "100vh",
        display: "flex",
        gap: "1rem",
        flexDirection: "column",
      }}
    >
      <Image
        objectFit="cover"
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
                    //   marginLeft: "-10px",
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
}
