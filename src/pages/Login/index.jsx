/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Link, useNavigate } from "react-router-dom";
import {
  IconEye,
  IconEyeOff,
  IconExclamationCircleFilled,
} from "@tabler/icons-react";
import { useState } from "react";
import Fondo from "../../assets/img/german-di-ciccio-G9qp2KIAba0-unsplash.svg";
import { useForm } from "react-hook-form";
import { login } from "../../api/Auth/authService";

export default function index() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const AlertLogin = (field) => {
    return (
      errors[field] && (
        <span className="font-semibold text-red-500 text-xs mt-1">
          {errors[field].message}
        </span>
      )
    );
  };

  const onSubmit = handleSubmit(async (data) => {
    const result = await login(data);

    if (result.success) {
      navigate("/");
    } else {
      setLoginError(result.message);
    }
  });

  return (
    <>
      <div className="flex items-center justify-center py-12">
        <form className="mx-auto grid w-[350px] gap-6" onSubmit={onSubmit}>
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Iniciar Sesión</h1>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@company.com"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                })}
              />
              {AlertLogin("email")}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Contraseña</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••••••••••••"
                  className="pe-10"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                />
                {showPassword ? (
                  <button
                    type="button"
                    className="absolute bsolute inset-y-0 end-0 flex items-center pe-3.5 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <IconEye size={20} />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="absolute bsolute inset-y-0 end-0 flex items-center pe-3.5 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <IconEyeOff size={20} />
                  </button>
                )}
              </div>
              {AlertLogin("password")}
            </div>
            <Button type="submit" className="w-full">
              Acceder
            </Button>
            <Button variant="outline" className="w-full">
              Iniciar Sesión con Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            ¿No tienes una cuenta?{" "}
            <Link href="#" className="underline">
              Regístrate
            </Link>
          </div>
          {loginError && (
            <Alert
              variant="destructive"
              className="md:w-[380px] w-[350px] bg-red-500 text-white"
            >
              <IconExclamationCircleFilled color="#fff" />
              <AlertTitle className="ms-2">Error</AlertTitle>
              <AlertDescription className="ms-2">{loginError}</AlertDescription>
            </Alert>
          )}
        </form>
      </div>
      <div className="hidden bg-muted lg:block">
        <img src={Fondo} alt="Image" className="object-cover h-full w-full" />
      </div>
    </>
  );
}
