import { useContext } from "react";
import { Paper } from "@mui/material";

import UsersItemList from "../components/UsersItemList";
import { PlaceShareContext } from "../../shared/context/PlaceShareContextProvider";

export default function UsersPage() {
  const { users } = useContext(PlaceShareContext);
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "inherit",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBlock: "1rem",
      }}
    >
      <UsersItemList users={users} />
    </Paper>
  );
}
