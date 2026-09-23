import { Search } from "@mui/icons-material";
import { Avatar, Box, IconButton } from "@mui/material";
import { Bell, UsersRound } from "lucide-react";
import image from "next/image";

export default function Navbar() {
  return (
    <Box
      sx={{
        marginTop: "10px",
        height: "50px",
        // backgroundColor: "rgb(42, 28, 54)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        px: "1rem",
      }}
    >
      <IconButton>
        <Search size={20} />
      </IconButton>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <IconButton
         sx={{
            width: 32,
            height: 32,
            backgroundColor: "#ffffff",

            "&:hover": {
              backgroundColor: "#aa5db95d",
              color: "#fefbff",
            },
          }}>
          <UsersRound size={20} />
        </IconButton>

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
          sx={{ width: 20, height: 20 , backgroundColor: "none"}}
    
        ></Avatar>
        </IconButton>

    
      </Box>
    </Box>
  );
}
