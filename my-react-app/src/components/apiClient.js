const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5001";
const RES_API_BASE = import.meta.env.VITE_RES_API_BASE;

export async function login({userName, password}) {
  const res = await fetch(`${API_BASE}/api/auth/login`, {
    method: "POST",
    headers: {"Content-Type": "application/json",},
    body: JSON.stringify({userName, password}),
  });
    if (!res.ok) throw new Error("Login failed");

    const data = await res.json();
    return {token: data.token};
}
export async function fetchRecipes(auth) {
  const res = await fetch(`${RES_API_BASE}/api/recipes`, {
    //No method (GET is default)
    //No body
    headers: {"Authorization": `Bearer ${auth.token}`},
  });
  if (!res.ok) throw new Error("Failed to fetch recipes");
    return res.json();
}
// eslint-disable-next-line no-unused-vars
export async function logout(auth) {
    //Client-side only logout (forget token)
}
