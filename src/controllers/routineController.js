import {
  createdMessage,
  errorServiceUnavailable,
  noContent,
  successData,
  successMessage,
} from "../handlers/response.js";
import RoutineModel from "../models/RoutineModel.js";

export async function createRoutineController(req, res) {
  const routine = req.body;

  await new RoutineModel(routine)
    .save()
    .then((responseCreate) => {
      if (responseCreate) {
        return createdMessage(res, "Routine created");
      } else {
        return noContent(res, "Routine could not be created");
      }
    })
    .catch(() => {
      return errorServiceUnavailable(res);
    });
}

export async function readRoutineMiniListController(req, res) {
  const idUser = req.params;

  await RoutineModel.find(idUser)
    .limit(3)
    .sort({ createdAt: "desc" })
    .then((responseFind) => {
      if (responseFind) {
        let routineList = [];
        for (let response of responseFind) {
          const routine = {
            id: response._id.toString(),
            title: response.title,
            description: response.description,
          };
          routineList.push(routine);
        }
        return successData(res, routineList);
      } else {
        return noContent(res, "Routine list could not be found");
      }
    })
    .catch(() => {
      return errorServiceUnavailable(res);
    });
}

export async function readRoutineListController(req, res) {
  const idUser = req.params;

  await RoutineModel.find(idUser)
    .sort({ createdAt: "desc" })
    .then((responseFind) => {
      if (responseFind) {
        let routineList = [];
        for (let response of responseFind) {
          const routine = {
            id: response._id.toString(),
            title: response.title,
            description: response.description,
          };
          routineList.push(routine);
        }
        return successData(res, routineList);
      } else {
        return noContent(res, "Routine list could not be found");
      }
    })
    .catch(() => {
      return errorServiceUnavailable(res);
    });
}

export async function readRoutineController(req, res) {
  const { idRoutine } = req.params;

  await RoutineModel.findById(idRoutine)
    .sort({ createdAt: "desc" })
    .then((responseFind) => {
      if (responseFind) {
        const routine = {
          id: responseFind._id.toString(),
          title: responseFind.title,
          description: responseFind.description,
        };
        return successData(res, routine);
      } else {
        return noContent(res, "Routine could not be found");
      }
    })
    .catch(() => {
      return errorServiceUnavailable(res);
    });
}

export async function updateRoutineController(req, res) {
  const { idRoutine, routine } = req.body;

  await RoutineModel.findByIdAndUpdate(idRoutine, routine)
    .then((responseUpdate) => {
      if (responseUpdate) {
        return successMessage(res, "Routine updated");
      } else {
        return noContent(res, "Routine could not be updated");
      }
    })
    .catch(() => {
      return errorServiceUnavailable(res);
    });
}

export async function deleteRoutineController(req, res) {
  const { idRoutine } = req.body;

  await RoutineModel.findByIdAndDelete(idRoutine)
    .then((responseDelete) => {
      if (responseDelete) {
        return successMessage(res, "Routine deleted");
      } else {
        return noContent(res, "Routine could not be deleted");
      }
    })
    .catch(() => {
      return errorServiceUnavailable(res);
    });
}
