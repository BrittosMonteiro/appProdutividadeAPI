import {
  createdMessage,
  errorServiceUnavailable,
  noContent,
  successData,
  successMessage,
} from "../handlers/response.js";
import TaskModel from "../models/TaskModel.js";

export async function createTaskController(req, res) {
  const task = req.body;

  await new TaskModel(task)
    .save()
    .then((responseCreate) => {
      if (responseCreate) {
        return createdMessage(res, "Task created");
      } else {
        return noContent(res, "Task could no bt created");
      }
    })
    .catch(() => {
      return errorServiceUnavailable(res);
    });
}

export async function readTaskMiniListController(req, res) {
  const idUser = req.params;

  await TaskModel.find(idUser)
    .limit(3)
    .where("status")
    .equals(false)
    .sort({ createdAt: "desc" })
    .then((responseFind) => {
      if (responseFind) {
        let taskList = [];
        for (let response of responseFind) {
          const task = {
            id: response._id.toString(),
            title: response.title,
            description: response.description,
            priority: response.priority,
            status: response.status,
          };
          taskList.unshift(task);
        }
        return successData(res, taskList);
      } else {
        return noContent(res, "Task could not be found");
      }
    })
    .catch(() => {
      return errorServiceUnavailable(res);
    });
}

export async function readTaskListController(req, res) {
  const idUser = req.params;

  await TaskModel.find(idUser)
    .where("status")
    .equals(false)
    .sort({ createdAt: "desc" })
    .then((responseFind) => {
      if (responseFind) {
        let taskList = [];
        for (let response of responseFind) {
          const task = {
            id: response._id.toString(),
            title: response.title,
            description: response.description,
            priority: response.priority,
            status: response.status,
          };
          taskList.unshift(task);
        }
        return successData(res, taskList);
      } else {
        return noContent(res, "Task could not be found");
      }
    })
    .catch(() => {
      return errorServiceUnavailable(res);
    });
}

export async function readTasksController(req, res) {
  const { idTask } = req.params;

  await TaskModel.findById(idTask)
    .where("status")
    .equals(false)
    .sort({ createdAt: "desc" })
    .then((responseFind) => {
      if (responseFind) {
        const task = {
          id: responseFind._id.toString(),
          title: responseFind.title,
          description: responseFind.description,
          priority: responseFind.priority,
          status: responseFind.status,
        };
        return successData(res, task);
      } else {
        return noContent(res, "Task could not be found");
      }
    })
    .catch(() => {
      return errorServiceUnavailable(res);
    });
}

export async function updateTaskController(req, res) {
  const { idTask, task } = req.body;

  await TaskModel.findByIdAndUpdate(idTask, task)
    .then((responseUpdate) => {
      if (responseUpdate) {
        return successMessage(res, "Task updated");
      } else {
        return noContent(res, "Task could not be updated");
      }
    })
    .catch(() => {
      return errorServiceUnavailable(res);
    });
}

export async function updateTaskStatusService(req, res) {
  const data = req.body;

  await TaskModel.findByIdAndUpdate(data.idTask, { status: data.status })
    .then((responseUpdate) => {
      if (responseUpdate) {
        return successMessage(res, "Task updated");
      } else {
        return noContent(res, "Task could not be updated");
      }
    })
    .catch(() => {
      return errorServiceUnavailable(res);
    });
}

export async function deleteTaskController(req, res) {
  const { idTask } = req.body;

  await TaskModel.findByIdAndDelete(idTask)
    .then((responseDelete) => {
      if (responseDelete) {
        return successMessage(res, "Task deleted");
      } else {
        return noContent(res, "Task could not be deleted");
      }
    })
    .catch(() => {
      return errorServiceUnavailable(res);
    });
}
