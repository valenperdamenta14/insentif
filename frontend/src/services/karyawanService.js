const BASE_URL = "http://localhost:5000/karyawan";

export const getKaryawan = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const tambahKaryawan = async (data) => {
  return fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const updateKaryawan = async (id, data) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const hapusKaryawan = async (id) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};
