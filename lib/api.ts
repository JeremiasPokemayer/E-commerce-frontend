const BASE_URL =
  "https://e-commerce-backend-jeremiaspokemayers-projects.vercel.app/api";

interface RequestBody {
  email?: string;
  username?: string;
  userId?: string;
  code?: unknown;
  lastname?: string;
  phone?: string;
  address?: string;
}

export async function fetchApi(
  input: RequestInfo,
  options: RequestInit = {},
  jsonBody?: RequestBody,
  withAuth = true
) {
  const url = BASE_URL + input;

  if (withAuth) {
    const token = await getTokenStorage();
    if (token) {
      options.headers = {
        ...options.headers,
        "content-type": "application/json",
        Authorization: `bearer ${token}`,
      };
    }
  } else {
    options.headers = {
      ...options.headers,
      "content-type": "application/json",
    };
  }

  if (jsonBody) {
    options.body = JSON.stringify(jsonBody);
  }

  console.log("fetchApi -> url:", url);
  console.log("fetchApi -> options:", options);

  const res = await fetch(url, options);
  if (res.status >= 200 && res.status < 300) {
    return res.json();
  } else {
    throw { message: "Hubo un error", status: res.status };
  }
}

export async function sendCode(email: string) {
  const data = await fetchApi("/auth", { method: "POST" }, { email }, false);
  return data;
}

export async function getToken(email: string, code: number) {
  const data = await fetchApi(
    "/auth/token",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    },
    { email, code }
  );
  saveToken(data.token);
  return true;
}

export function useGenerateOrder(id) {
  const createOrder = async () => {
    if (id) {
      const response = await fetchApi(`/order?productId=${id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      });
      return response;
    }
  };
  return { createOrder };
}

export async function setUserData(userData) {
  const { userId, username, lastname, address, phone } = userData;
  await fetchApi(
    "/me",
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    },
    { userId, username, lastname, address, phone }
  );
  return true;
}

export async function saveToken(token: string) {
  return localStorage.setItem("auth_token", token);
}

export async function getTokenStorage() {
  return localStorage.getItem("auth_token");
}

export async function removeLocalStorage() {
  return localStorage.clear();
}

export async function removeLocalStorageProduct() {
  return localStorage.removeItem("selectedProduct");
}
