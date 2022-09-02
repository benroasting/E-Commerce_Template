import Link from "next/link";
import React from "react";
import Layout from "../components/layout";
import { useForm } from "react-hook-form";

export default function LoginScreen() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = ({ email, password }) => {};

  return (
    <div>
      <Layout title="Login">
        <form
          className="mx-auto max-w-screen-md"
          onSubmit={handleSubmit(submitHandler)}
        >
          <h1 className="mb-4 text-xl">Login</h1>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Please enter your email",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9_.]+$/i,
                },
              })}
              className="w-full"
              id="email"
              autoFocus
            ></input>
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              {...register("email", { required: "Please enter your email" })}
              className="w-full"
              id="password"
              autoFocus
            ></input>
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
          </div>
          <div className="mb-4">
            <button className="secondary-button">Login</button>
          </div>
          <div className="mb-4">
            Don&apos;t have an account? &nbsp;
            <Link href="register">Register</Link>
          </div>
        </form>
      </Layout>
    </div>
  );
  s;
}
