import ListModel from "../models/ListModel.js";

export async function createListController(req, res) {
  const list = req.body;

  await new ListModel(list)
    .save()
    .then((responseCreate) => {
      if (responseCreate) {
        return res.status(201).json({ message: "List created" });
      } else {
        return;
      }
    })
    .catch((err) => {
      return;
    });
}

export async function readMiniListController(req, res) {
  const idUser = req.params;

  await ListModel.find(idUser)
    .limit(3)
    .sort({ createdAt: "desc" })
    .then((responseFind) => {
      if (responseFind) {
        let itemsList = [];
        for (let response of responseFind) {
          const item = {
            id: response._id.toString(),
            title: response.title,
            description: response.description,
            items: response.item,
            priority: response.priority,
          };
          itemsList.unshift(item);
        }
        return res.status(200).json({ data: itemsList });
      } else {
        return;
      }
    })
    .catch((err) => {
      return;
    });
}

export async function readListController(req, res) {
  const idUser = req.params;

  await ListModel.find(idUser)
    .sort({ createdAt: "desc" })
    .then((responseFind) => {
      if (responseFind) {
        let itemsList = [];
        for (let response of responseFind) {
          const item = {
            id: response._id.toString(),
            title: response.title,
            description: response.description,
            items: response.item,
            priority: response.priority,
          };
          itemsList.unshift(item);
        }
        return res.status(200).json({ data: itemsList });
      } else {
        return;
      }
    })
    .catch((err) => {
      return;
    });
}

export async function readItemListController(req, res) {
  const { idList } = req.params;

  await ListModel.findById(idList)
    .then((responseFind) => {
      if (responseFind) {
        const item = {
          id: responseFind._id.toString(),
          title: responseFind.title,
          description: responseFind.description,
          items: responseFind.item,
          priority: responseFind.priority,
        };
        return res.status(200).json({ data: item });
      }
    })
    .catch((err) => {});
}

export async function updateListController(req, res) {
  const { idList, list } = req.body;

  await ListModel.findByIdAndUpdate(idList, list)
    .then((responseUpdate) => {
      if (responseUpdate) {
        return res.status(200).json({ message: "List updated" });
      } else {
        return;
      }
    })
    .catch((err) => {
      return;
    });
}

export async function deleteListController(req, res) {
  const { idList } = req.body;

  await ListModel.findByIdAndDelete(idList)
    .then((responseDelete) => {
      if (responseDelete) {
        return res.status(200).json({ message: "List deleted" });
      } else {
        return;
      }
    })
    .catch((err) => {
      return;
    });
}
