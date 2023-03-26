import {
  createdMessage,
  errorServiceUnavailable,
  noContent,
  successData,
  successMessage,
} from "../handlers/response.js";
import ListModel from "../models/ListModel.js";

export async function createListController(req, res) {
  const list = req.body;

  await new ListModel(list)
    .save()
    .then((responseCreate) => {
      if (responseCreate) {
        return createdMessage(res, "List created");
      } else {
        return noContent(res, "List could not be created");
      }
    })
    .catch(() => {
      return errorServiceUnavailable(res);
    });
}

export async function readMiniListController(req, res) {
  const idUser = req.params;

  await ListModel.find(idUser)
    .limit(3)
    .where("status")
    .equals(false)
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
            status: response.status,
          };
          itemsList.push(item);
        }
        return successData(res, itemsList);
      } else {
        return noContent(res, "List could not be found");
      }
    })
    .catch(() => {
      return errorServiceUnavailable(res);
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
            status: response.status,
          };
          itemsList.push(item);
        }
        return successData(res, itemsList);
      } else {
        return noContent(res, "List could not be found");
      }
    })
    .catch(() => {
      return errorServiceUnavailable(res);
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
          status: responseFind.status,
        };
        return successData(res, item);
      } else {
        return noContent(res, "List could not be found");
      }
    })
    .catch(() => {
      return errorServiceUnavailable(res);
    });
}

export async function updateListController(req, res) {
  const { idList, list } = req.body;

  await ListModel.findByIdAndUpdate(idList, list)
    .then((responseUpdate) => {
      if (responseUpdate) {
        return successMessage(res, "List updated");
      } else {
        return noContent(res, "List could not be updated");
      }
    })
    .catch(() => {
      return errorServiceUnavailable(res);
    });
}

export async function updateListStatusController(req, res) {
  const data = req.body;

  await ListModel.findByIdAndUpdate(data.idList, { status: data.status })
    .then((responseUpdate) => {
      if (responseUpdate) {
        return successMessage(res, "List status updated");
      } else {
        return noContent(res, "List could not be updated");
      }
    })
    .catch(() => {
      return errorServiceUnavailable(res);
    });
}

export async function deleteListController(req, res) {
  const { idList } = req.body;

  await ListModel.findByIdAndDelete(idList)
    .then((responseDelete) => {
      if (responseDelete) {
        return successMessage(res, "List deleted");
      } else {
        return noContent(res, "List could not be deleted");
      }
    })
    .catch(() => {
      return errorServiceUnavailable(res);
    });
}
