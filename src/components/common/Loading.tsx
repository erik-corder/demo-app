import { Box, CircularProgress } from "@mui/material";
import { FC } from "react";

interface LoadingProps {}

export const Loading: FC<LoadingProps> = ({}) => {
  return (
    <div className="loading">
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </div>
  );
};

export default Loading;
