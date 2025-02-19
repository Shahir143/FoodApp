import React from "react";
import classes from "./Profile.module.css";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { Title } from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import ChangePassword from "../../components/ChangePassword/ChangePassword";

export default function Profile() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { user, updateProfile } = useAuth();

  const submit = (user) => {
    updateProfile(user);
  };

  return (
    <div className={classes.container}>
      <div className={classes.details}>
        <Title title="Update Profile" />
        <form onSubmit={handleSubmit(submit)}>
          <Input
            defaultValue={user.name}
            type="text"
            label="Name"
            {...register("name", {
              required: true,
              minLength: 10,
            })}
          />
          <Input
            defaultValue={user.address}
            type="text"
            label="Address"
            {...register("address", {
              required: true,
              minLength: 10,
            })}
            error={errors.address}
          />

          <Button type="submit" text="update" backgroundColor="#009e84" />
        </form>
        <ChangePassword />
      </div>
    </div>
  );
}
