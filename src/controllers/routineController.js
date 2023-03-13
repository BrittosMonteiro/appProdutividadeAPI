import RoutineModel from "../models/RoutineModel.js";

export async function createRoutineController(req, res) {
  const routine = req.body;

  await new RoutineModel(routine)
    .save()
    .then((responseCreate) => {
      if (responseCreate) {
        return res.status(201).json({ message: "routine created" });
      } else {
        return;
      }
    })
    .catch((err) => {
      return;
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
          routineList.unshift(routine);
        }
        return res.status(200).json({ data: routineList });
      }
    })
    .catch((err) => {});
}

export async function readRoutineListController(req, res) {
  const idUser = req.params;

  await RoutineModel.find(idUser)
    .then((responseFind) => {
      if (responseFind) {
        let routineList = [];
        for (let response of responseFind) {
          const routine = {
            id: response._id.toString(),
            title: response.title,
            description: response.description,
          };
          routineList.unshift(routine);
        }
        return res.status(200).json({ data: routineList });
      } else {
        return;
      }
    })
    .catch((err) => {
      return;
    });
}

export async function readRoutineController(req, res) {
  const { idRoutine } = req.params;

  await RoutineModel.findById(idRoutine)
    .then((responseFind) => {
      if (responseFind) {
        const routine = {
          id: responseFind._id.toString(),
          title: responseFind.title,
          description: responseFind.description,
        };
        return res.status(200).json({ data: routine });
      } else {
        return;
      }
    })
    .catch((err) => {
      return;
    });
}

export async function updateRoutineController(req, res) {
  const { idRoutine, routine } = req.body;

  await RoutineModel.findByIdAndUpdate(idRoutine, routine)
    .then((responseUpdate) => {
      if (responseUpdate) {
        return res.status(200).json({ message: "routine updated" });
      } else {
        return;
      }
    })
    .catch((err) => {
      return;
    });
}

export async function deleteRoutineController(req, res) {
  const { idRoutine } = req.body;

  await RoutineModel.findByIdAndDelete(idRoutine)
    .then((responseDelete) => {
      if (responseDelete) {
        return res.status(200).json({ message: "routine deleted" });
      } else {
        return;
      }
    })
    .catch((err) => {
      return;
    });
}
