import api from "@/utils/api";

export const login = async (email: string, password: string) => {
  const { data } = await api.post("/auth/login", { email, password });
  localStorage.setItem("token", data.token);
  return data;
};
