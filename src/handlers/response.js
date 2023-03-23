export function successData(res, data) {
  return res.status(200).json({ data: data });
}

export function successMessage(res, message) {
  return res.status(200).json({ message });
}

export function createdData(res, data) {
  return res.status(201).json({ data: data });
}

export function createdMessage(res, message) {
  return res.status(201).json({ message });
}

export function noContent(res, message) {
  return res.send({ message });
}

export function errorUnauthenticated(res, message) {
  return res.json({ message });
}

export function errorForbidden(res, message) {
  return res.json({ message });
}

export function errorNotFound(res, message) {
  return res.json({ message });
}

export function errorServiceUnavailable(
  res,
  message = "Serviço indisponível no momento. Tente mais tarde"
) {
  return res.json({ message });
}
