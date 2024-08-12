import axiosInstance from "../axiosConfig";
import { jwtDecode } from "jwt-decode";

export const login = async (credentials) => {
  try {
    const response = await axiosInstance.post("token/", credentials);

    localStorage.setItem("accessToken", response.data.access);
    localStorage.setItem("refreshToken", response.data.refresh);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    if (error.response && error.response.status === 401) {
      return {
        success: false,
        message: "Usuario o Contraseña Incorrectos",
      };
    } else {
      console.log(error);
      return {
        success: false,
        message:
          "Error al Iniciar Sesión. Por favor, inténtelo de nuevo más tarde.",
      };
    }
  }
};

export const infoToken = async () => {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return null;
  }

  const decode = jwtDecode(token);
  return decode;
};

export const infoUsuario = async () => {
  try {
    const id = infoToken().user_id;
    const response = await axiosInstance.get(`/users/${id}/`);

    return response.data;
  } catch (error) {
    console.log(error);
      return {
        success: false,
        message:
          "Error al Obtener Usuario. Por favor, inténtelo de nuevo más tarde.",
      };
  }
};
