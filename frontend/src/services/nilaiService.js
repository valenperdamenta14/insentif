const BASE_URL = "http://localhost:5000/nilai";

export const getNilai = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const getNilaiById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
};

export const createNilai = async (data) => {
  return fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const updateNilai = async (id, data) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const deleteNilai = async (id) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};
