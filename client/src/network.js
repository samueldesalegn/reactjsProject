import axios from "axios";
axios.defaults.baseURL = "http://localhost:5001";

const checkError = (response, error) => {
  if (response.data.success) return response.data.data;
  throw new Error(error + response.data.error);
};


export async function signup(email, password) {
  try {
    const res = await axios.post("/signup", { email, password});
    // console.log(res)
    return res.data;
  } catch (error) {
    return null;
  }
}
export default async function login(email, password) {
  try {
    const res = await axios.post("/login", { email, password  });
    // console.log(res)
    return res.data;
  } catch (error) {
    return null;
  }
}

export async function getProducts(token) {
  try {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    const res = await axios.get("/products");
    return res.data;
  } catch (error) {
    return null;
  }

}

export async function getProduct(id, token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
  const res = await axios.get(`/products/${id}`);
  if (res.data.success) return res.data.data;
  console.error("Unauthorized");
}


export  async function addProduct(newprod, token) {
  try {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    const res = await axios.post("/products", newprod);
    return res.data;
  } catch (error) {
    return null;
  }
}


export  async function editProduct(newProd, token) {
  try {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    const res = await axios.put(`/products/${newProd.id}`, newProd);
    return res.data;
  } catch (error) {
    return null;
  }
}

export const updateProduct = async (id, data, token) => {
  const response = await axios.put("/products/" + id, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return checkError(response, "UPDATE_PRODUCT:");
};

export  async function deleteProduct(id, token) {
  try {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    const res = await axios.delete(`/products/${id}`);
    return res.data;
  } catch (error) {
    return null;
  }
}


