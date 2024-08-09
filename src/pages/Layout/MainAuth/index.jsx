/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function mainlayout() {

  const navigate = useNavigate();
  const [showPage, setShowPage] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      // Obteniendo el token en el localstorage
      const token = localStorage.getItem('accessToken');

      // Si no hay token, redirecciona al login
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        // Verificando el token expirado
        const currentTime = Date.now() / 1000;
        const tokenExp = JSON.parse(atob(token.split('.')[1])).exp;

        // Si el token expiró, redirecciona al login y elimina los tokens en el localstorage
        if (tokenExp < currentTime) {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          navigate('/login');
        } else if (tokenExp > currentTime) {
          navigate('/');
        } else {
          setShowPage(true);
        }
      } catch (error) {
        console.error("Token inválido", error);
        navigate('/login');
      }
    };

    checkAuth();
  }, [navigate]);

  return (
    <>
        <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 overflow-hidden bg-[#FCFCFC]">
            {showPage && <Outlet />}
        </div>
    </>
  )
}
