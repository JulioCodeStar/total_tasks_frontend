/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Sidebar } from "../../../components/Layout";

export default function mainlayout() {
  const navigate = useNavigate();
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const currentTime = Date.now() / 1000;
        const tokenExp = JSON.parse(atob(token.split(".")[1])).exp;

        if (tokenExp < currentTime) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          navigate("/login");
        } else if (tokenExp > currentTime) {
          navigate("/");
          setShowPage(true);
        } else {
          setShowPage(true);
        }
      } catch (error) {
        console.error("Token inválido", error);
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);

  return (
    <>
      <div className="flex min-h-screen w-full flex-col">
        {showPage && (
          <>
            <Sidebar />
            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
              <Outlet />
            </main>
          </>
        )}
      </div>
    </>
  );
}
