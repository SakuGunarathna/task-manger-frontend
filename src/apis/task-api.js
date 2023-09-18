import { axiosClient } from "../configs/axiosClient";
import { taskUrls } from "../utils/urls";

export const addTask = async (task) => {
  const response = await axiosClient.post(taskUrls.task, task);

  return response;
};

export const getTasksByStatus = async (status) => {
  const response = await axiosClient.get(
    `${taskUrls.getTaskByStatus}/${status}`
  );

  return response;
};

export const updateTask = async (task) => {
  const response = await axiosClient.put(`${taskUrls.task}/${task.id}`, task);

  return response;
};

export const deleteTask = async (taskId) => {
  const response = await axiosClient.delete(`${taskUrls.task}/${taskId}`);

  return response;
};
