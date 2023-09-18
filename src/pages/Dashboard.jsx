import { Grid } from "@mui/material";
import Heading from "../components/Heading";
import TaskTab from "../containers/TaskTab";
import { taskStatus } from "../utils/data";
import Logout from "../components/Logout";

const Dashboard = () => {

  return (
    <>
      <Heading>Task Dashboard</Heading>
      <Logout />
      <Grid container justifyContent="center" spacing={12}>
        {taskStatus.map(({ status, id, color, key }) => (
          <Grid key={id} item>
            <TaskTab status={status} color={color} statusId={id}/>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default Dashboard;
