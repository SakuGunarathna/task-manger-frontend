import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Tooltip } from "@mui/material";
import TaskView from "./TaskView";
import FlagIcon from "@mui/icons-material/Flag";
import { priorityStates } from "../utils/data";

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
                setAction("edit");
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
                setAction("delete");
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
