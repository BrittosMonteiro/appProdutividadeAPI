import TaskModel from "../models/TaskModel.js";

export async function createTaskController(req, res) {
  const task = req.body;

  await new TaskModel(task)
    .save()
    .then((responseCreate) => {
      if (responseCreate) {
        return res.status(201).json({ message: "Task created" });
      } else {
        return;
      }
    })
    .catch((err) => {
      return;
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
        return res.status(200).json({ data: taskList });
      }
    })
    .catch((err) => {});
}

export async function readTaskListController(req, res) {
  const idUser = req.params;

  await TaskModel.find(idUser)
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
        return res.status(200).json({ data: taskList });
      } else {
        return;
      }
    })
    .catch((err) => {
      return;
    });
}

export async function readTasksController(req, res) {
  const { idTask } = req.params;

  await TaskModel.findById(idTask)
    .then((responseFind) => {
      if (responseFind) {
        const task = {
          id: responseFind._id.toString(),
          title: responseFind.title,
          description: responseFind.description,
          priority: responseFind.priority,
          status: responseFind.status,
        };
        return res.status(200).json({ data: task });
      } else {
        return;
      }
    })
    .catch((err) => {
      return;
    });
}

export async function updateTaskController(req, res) {
  const { idTask, task } = req.body;

  await TaskModel.findByIdAndUpdate(idTask, task)
    .then((responseUpdate) => {
      if (responseUpdate) {
        return res.status(200).json({ message: "Task updated" });
      } else {
        return;
      }
    })
    .catch((err) => {
      return;
    });
}

export async function updateTaskStatusService(req, res) {
  const data = req.body;

  await TaskModel.findByIdAndUpdate(data.idTask, { status: data.status })
    .then((responseUpdate) => {
      if (responseUpdate) {
        return res.status(200).json({ message: "Task status updated" });
      } else {
        return;
      }
    })
    .catch((err) => {
      return;
    });
}

export async function deleteTaskController(req, res) {
  const { idTask } = req.body;

  await TaskModel.findByIdAndDelete(idTask)
    .then((responseDelete) => {
      if (responseDelete) {
        return res.status(200).json({ message: "Task deleted" });
      } else {
        return;
      }
    })
    .catch((err) => {
      return;
    });
}
