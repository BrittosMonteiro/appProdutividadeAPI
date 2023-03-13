let users = [];

export async function readUserController(req, res) {
  const { idUser } = req.params;
}

export async function updateUserController(req, res) {
  const { idUser, data } = req.body;
  res.send({ data });
}

export async function deleteUserController(req, res) {
  const { idUser } = req.body;
  res.send({ idUser });
}
