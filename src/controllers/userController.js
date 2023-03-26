import {
  errorServiceUnavailable,
  noContent,
  successData,
  successMessage,
} from "../handlers/response.js";
import UserModel from "../models/UserModel.js";

export async function readUserController(req, res) {
  const { idUser } = req.params;

  await UserModel.findById(idUser)
    .then((responseFind) => {
      if (responseFind) {
        const userData = {
          id: responseFind._id.toString(),
          name: responseFind.name,
          surname: responseFind.surname,
          email: responseFind.email,
          username: responseFind.username,
        };
        return successData(res, userData);
      } else {
        return noContent(res, "User could not be found");
      }
    })
    .catch(() => {
      return errorServiceUnavailable(res);
    });
}

export async function updateUserController(req, res) {}

export async function updatePasswordController(req, res) {
  const { idUser, updatePass } = req.body;
  await UserModel.findByIdAndUpdate(idUser, { updatePass })
    .then((responseUpdate) => {
      if (responseUpdate) {
        return successMessage(res, "Password updated");
      } else {
        return noContent(res, "Password could not be updated");
      }
    })
    .catch(() => {
      return errorServiceUnavailable(res);
    });
}

export async function deleteUserController(req, res) {
  const { idUser } = req.body;

  await UserModel.findByIdAndDelete(idUser)
    .then((responseDelete) => {
      if (responseDelete) {
        return successMessage(res, "Used deleted");
      } else {
        return noContent(res, "User could not be deleted");
      }
    })
    .catch(() => {
      return errorServiceUnavailable(res);
    });
}
