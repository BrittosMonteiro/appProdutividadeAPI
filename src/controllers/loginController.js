import {
  createdData,
  errorServiceUnavailable,
  noContent,
  successData,
} from "../handlers/response.js";
import UserModel from "../models/UserModel.js";

export async function createUserController(req, res) {
  const { name, surname, email, username, password } = req.body;

  await new UserModel({ name, surname, email, username, password })
    .save()
    .then((responseCreate) => {
      if (responseCreate) {
        const user = {
          id: responseCreate._id.toString(),
          name: responseCreate.name,
        };
        return createdData(res, user);
      } else {
        return noContent(res, "Usuário não pode ser criado. Tente mais tarde");
      }
    })
    .catch(() => {
      return errorServiceUnavailable(res);
    });
}

export async function loginController(req, res) {
  const { username, password } = req.body;

  await UserModel.findOne({ username })
    .then((responseFindOne) => {
      if (responseFindOne && responseFindOne.password === password) {
        const user = {
          name: responseFindOne.name,
          id: responseFindOne._id.toString(),
        };
        return successData(res, user);
      } else {
        return noContent(res, "Usuário e/ou senha incorretos");
      }
    })
    .catch(() => {
      return errorServiceUnavailable(res);
    });
}
