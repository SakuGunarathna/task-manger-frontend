import { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  Tooltip,
  Typography,
  IconButton,
  CardContent,
  Grid,
} from "@mui/material";
import TaskCard from "../containers/TaskCard";
import AddIcon from "@mui/icons-material/Add";
import { getTasksByStatus, addTask, updateTask, deleteTask } from "../apis/task-api";
import TaskView from "./TaskView";
import { initTask } from "../utils/data";
import { taskActions } from "../constants/ref";

const TaskTab = ({ status, color, statusId }) => {
  const [taskData, setTaskData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [action, setAction] = useState("");

  const getTasks = async () => {
    try {
      const { data } = await getTasksByStatus(statusId);
      setTaskData(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleTask = async (values) => {
    try {
      if (action === taskActions.ADD) {
        await addTask(values);
      } else if (action === taskActions.EDIT) {
        await updateTask(values);
      } else if (action === taskActions.DELETE) {
        await deleteTask(values.id);
      }
      setModalOpen(false);
      getTasks();
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <Card
        elevation={1}
        sx={{
          height: 50,
          width: 350,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          margin: "0 0 20px 10px",
          borderTop: `5px solid ${color}`,
        }}
      >
        <CardContent>
          <Grid container>
            <Grid xs={6} item>
              <Typography
                sx={{ fontSize: 16, fontWeight: 600 }}
                color="text.secondary"
                gutterBottom
              >
                {status}
              </Typography>
            </Grid>
            <Grid
              xs={6}
              item
              sx={{
                marginTop: "-15px",
              }}
            >
              <CardActions disableSpacing>
                <Tooltip title="Add new task">
                  <IconButton
                    aria-label="view"
                    onClick={() => {
                      setModalOpen(true);
                      setAction(taskActions.ADD);
                    }}
                  >
                    <AddIcon />
                  </IconButton>
                </Tooltip>
              </CardActions>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {taskData.map((task) => {
        return (
          <TaskCard
            key={task.id}
            task={task}
            action={action}
            setAction={setAction}
            handleTask={handleTask}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
        );
      })}
      <TaskView
        open={modalOpen}
        setOpen={setModalOpen}
        task={{ ...initTask, status: statusId }}
        handleSubmit={handleTask}
        action={action}
      />
    </>
  );
};
export default TaskTab;
