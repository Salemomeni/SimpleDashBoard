import { Box, Typography } from "@mui/material";

export default function OverViewCard({ title, amount, icon, color }) {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        width: "100%",
        minWidth: 0,
        height: "100px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: {
            xs: "0.7rem",
            sm: "0.9rem",
            md: "1rem",
          },
        }}
      >
        <Box sx={{ minWidth: 0 }}>
          <Typography
            sx={{
              fontSize: {
                xs: "0.7rem",
                sm: "0.75rem",
                md: "0.8rem",
              },
              color: "rgb(144, 152, 163)",
              fontWeight: "bold",
              marginBottom: "0.5rem",
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "1.3rem",
                sm: "1.5rem",
                md: "1.8rem",
              },
              fontWeight: "bold",
              color: "rgba(18, 25, 39, 0.86)",
            }}
          >
            {amount}
          </Typography>
        </Box>

        <Box
          sx={{
            color: "#ffffff",
            width: {
              xs: "35px",
              sm: "42px",
              md: "50px",
            },
            height: {
              xs: "35px",
              sm: "42px",
              md: "50px",
            },
            flexShrink: 0,
            borderRadius: "50%",
            backgroundColor: color,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icon}
        </Box>
      </Box>
    </Box>
  );
}