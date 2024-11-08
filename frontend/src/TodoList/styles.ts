import { styled } from "@mui/material/styles";

export const StyledButton = styled("button")(({ theme }) => ({
  display: "flex", // Use flexbox for layout
  alignItems: "center", // Center items vertically
  justifyContent: "center", // Center items horizontally
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.text.secondary,
  border: `1px solid ${theme.palette.text.secondary}`, // Fixed border property
  borderRadius: "10px",
  padding: theme.spacing(1, 2),
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light, // Use a lighter shade or a different color for hover
  },
}));
