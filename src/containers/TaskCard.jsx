import React, { useState } from "react";
import { Tooltip,Card,CardHeader, CardActions, IconButton } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TaskView from "./TaskView";
import FlagIcon from "@mui/icons-material/Flag";
import { priorityStates } from "../utils/data";
import { taskActions } from "../constants/ref";

const TaskCard = ({ task, action, setAction, handleTask }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleExistingTask = (values) => {
    handleTask(values);
    setModalOpen(false);
  };

  return (
    <>
      <Card
        elevation={1}
        sx={{
          width: 350,
          margin: "0 0 20px 10px",
        }}
      >
        <CardHeader
          title={task.title}
          action={
            <Tooltip
              title={`priority - ${
                priorityStates.find((item) => item.id === task.priority)?.status
              }`}
            >
              <FlagIcon
                style={{
                  color: priorityStates.find(
                    (item) => item.id === task.priority
                  )?.color,
                }}
              />
            </Tooltip>
          }
        />

        <CardActions disableSpacing>
          <Tooltip title="View task">
            <IconButton
              aria-label="view"
              onClick={() => {
                setModalOpen(true);
                setAction("view");
              }}
            >
              <VisibilityIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit task">
            <IconButton
              aria-label="edit"
              onClick={() => {
                setModalOpen(true);
                setAction(taskActions.EDIT);
              }}
            >
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete task">
            <IconButton
              aria-label="delete"
              onClick={() => {
                setModalOpen(true);
                setAction(taskActions.DELETE);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
      <TaskView
        open={modalOpen}
        setOpen={setModalOpen}
        task={task}
        handleSubmit={handleExistingTask}
        action={action}
      />
    </>
  );
};
export default TaskCard;
