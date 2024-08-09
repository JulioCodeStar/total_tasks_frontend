import axiosInstance from '../axiosConfig';

export const login = async (credentials) => {
    try {
      const response = await axiosInstance.post('token/', credentials);
  
      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refresh);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      if (error.response && error.response.status === 401) {
        return {
          success: false,
          message: "Usuario o Contraseña Incorrectos"
        };
      } else {
        console.log(error);
        return {
          success: false,
          message: "Error al Iniciar Sesión. Por favor, inténtelo de nuevo más tarde."
        }
      }
    }
  };