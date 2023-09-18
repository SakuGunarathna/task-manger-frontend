import * as React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import dayjs from "dayjs";
import {
  Box,
  Button,
  TextField,
  Modal,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { priorityStates } from "../utils/data";
import { taskActions } from "../constants/ref";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const validationSchema = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  dueDate: yup.date().required("Due date is required"),
  priority: yup.string().required("Priority is required"),
});

const TaskView = ({ open, setOpen, task, handleSubmit, action }) => {
  const onSubmit = (values, { resetForm }) => {
    handleSubmit(values);
    action === taskActions.ADD && resetForm();
  };

  const formik = useFormik({
    initialValues: !!task ? task : {},
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <div>
      <Modal
        open={open}
        onClose={() => {}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div id="modal-modal-title" variant="h6" component="h2">
            {action === taskActions.ADD
              ? "Add Task"
              : action === "view"
              ? "View Task"
              : action === taskActions.EDIT
              ? "Edit task"
              : action === taskActions.DELETE
              ? "Delete task"
              : ""}
          </div>
          <div id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  fullWidth
                  style={{ margin: "15px 0 0 0" }}
                  id="title"
                  name="title"
                  label="Title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.title && Boolean(formik.errors.title)}
                  helperText={formik.touched.title && formik.errors.title}
                  disabled={action === taskActions.VIEW || action === taskActions.DELETE}
                  required
                />
                <TextField
                  fullWidth
                  style={{ margin: "15px 0 0 0" }}
                  id="description"
                  name="description"
                  label="Description"
                  multiline
                  rows={5}
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.description &&
                    Boolean(formik.errors.description)
                  }
                  helperText={
                    formik.touched.description && formik.errors.description
                  }
                  disabled={action === "view" || action === taskActions.DELETE}
                  required
                />
                <FormControl fullWidth style={{ margin: "15px 0 15px 0" }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker", "DatePicker"]}>
                      <DatePicker
                        type="date"
                        name="dueDate"
                        label="Due date"
                        value={dayjs(formik.values.dueDate)}
                        onChange={(value) =>
                          formik.setFieldValue("dueDate", value, true)
                        }
                        disabled={action === "view" || action === taskActions.DELETE}
                        required
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </FormControl>
                <FormControl fullWidth style={{ margin: "15px 0 15px 0" }}>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    id="priority"
                    name="priority"
                    label="Priority"
                    value={formik.values.priority}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.priority && Boolean(formik.errors.priority)
                    }
                    disabled={action === "view" || action === taskActions.DELETE}
                    required
                  >
                    {priorityStates.map(({ status, id }) => {
                      return (
                        <MenuItem key={id} value={id}>
                          {status}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                {action !== "view" && (
                  <Button color="primary" variant="contained" type="submit">
                    {action === taskActions.ADD
                      ? "Add"
                      : action === taskActions.EDIT
                      ? "Edit"
                      : action === taskActions.DELETE
                      ? "Delete"
                      : ""}
                  </Button>
                )}
                <Button onClick={() => setOpen(false)}>
                  {action === "view" ? "OK" : "Cancel"}
                </Button>
              </form>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default TaskView;
