import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import classes from "./Login.module.css";
import { Title } from "../../components/Title/Title";
import { Button } from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [params] = useSearchParams();
  const returnUrl = params.get("returnUrl");

  useEffect(() => {
    if (!user) return;

    returnUrl ? navigate(returnUrl) : navigate("/");
  }, [user, navigate, returnUrl]);

  const submit = async ({ email, password }) => {
    await login(email, password);
  };
  return (
    <div className={classes.container}>
      <div className={classes.details}>
        <Title title="Login" />
        <form onSubmit={handleSubmit(submit)} noValidate>
          <Input
            type="email"
            label="Email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,63}$/i,
                message: "email is not valid",
              },
            })}
            error={errors.email}
          />
          <Input
            type="password"
            label="password"
            {...register("password", {
              required: true,
            })}
            error={errors.password}
          />
          <Button type="submit" text="login" />

          <div className={classes.register}>
            New User ? &nbsp;
            <Link to={`/register${returnUrl ? "?returnUrl=" + returnUrl : ""}`}>
              Register Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
