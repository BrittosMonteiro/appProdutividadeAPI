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
        return res.status(201).json({ data: user });
      } else {
        return;
      }
    })
    .catch(() => {
      return;
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
        return res.status(200).json({ data: user });
      } else {
        return;
      }
    })
    .catch(() => {
      return;
    });
}
