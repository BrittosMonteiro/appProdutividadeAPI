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

        return res.status(200).json({ data: userData });
      }
    })
    .catch((err) => {});
}

export async function updateUserController(req, res) {}

export async function updatePasswordController(req, res) {
  const { idUser, updatePass } = req.body;
  await UserModel.findByIdAndUpdate(idUser, updatePass)
    .then((responseUpdate) => {
      if (responseUpdate) {
        return res.status(200).json({ message: "Password updated" });
      } else {
        return;
      }
    })
    .catch((err) => {
      return;
    });
}

export async function deleteUserController(req, res) {
  const { idUser } = req.body;

  await UserModel.findByIdAndDelete(idUser)
    .then((responseDelete) => {
      if (responseDelete) {
        return res.status(200).json({ message: "User deleted" });
      } else {
        return;
      }
    })
    .catch((err) => {
      return;
    });
}
