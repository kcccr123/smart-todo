import { Typography } from "@mui/material";

const InfoBlock = ({
  title,
  date,
  desc,
}: {
  title: string;
  date: string;
  desc: string;
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        width: "40%",
        height: "100%",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
        {title}
      </Typography>

      <Typography variant="subtitle1" sx={{ marginBottom: "4px" }}>
        {date}
      </Typography>
      <Typography variant="body1">{desc}</Typography>
    </div>
  );
};

export default InfoBlock;
