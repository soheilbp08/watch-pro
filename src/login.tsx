import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

interface LoginForm {
  username: string;
  password: string;
}

interface User {
  id: string;
  username: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    setLoginError("");

    try {
      const response = await fetch("http://localhost:3001/users");

      if (!response.ok) {
        setLoginError("Server error");
        return;
      }

      const users: User[] = await response.json();

      const user = users.find(
        (item) =>
          item.username === data.username &&
          item.password === data.password
      );

      if (!user) {
        setLoginError("Invalid username or password");
        return;
      }

      navigate("/");
    } catch (error) {
      setLoginError("Could not connect to server");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#061A15] px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md rounded-3xl border border-[#D4AF62]/20 bg-[#0B2B24] p-6 shadow-2xl sm:p-8"
      >
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#D4AF62]">
            SOHNA
          </p>

          <h1 className="mt-3 text-3xl font-semibold text-[#F5F1E8]">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-[#F5F1E8]/50">
            Sign in to your account
          </p>
        </div>

        {loginError && (
          <div className="mb-5 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-center text-sm text-red-400">
            {loginError}
          </div>
        )}

        <div className="mb-5">
          <label
            htmlFor="username"
            className="mb-2 block text-sm text-[#F5F1E8]/80"
          >
            Username
          </label>

          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            {...register("username", {
              required: "Username is required",
            })}
            className="w-full rounded-xl border border-[#D4AF62]/20 bg-[#061A15] px-4 py-3 text-[#F5F1E8] outline-none transition focus:border-[#D4AF62]/70"
          />

          {errors.username && (
            <p className="mt-2 text-xs text-red-400">
              {errors.username.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="mb-2 block text-sm text-[#F5F1E8]/80"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className="w-full rounded-xl border border-[#D4AF62]/20 bg-[#061A15] px-4 py-3 text-[#F5F1E8] outline-none transition focus:border-[#D4AF62]/70"
          />

          {errors.password && (
            <p className="mt-2 text-xs text-red-400">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-[#D4AF62] px-4 py-3 font-semibold text-[#061A15] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E3C77D]"
        >
          Login
        </button>

        <p className="mt-6 text-center text-sm text-[#F5F1E8]/50">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-[#D4AF62] transition hover:text-[#E3C77D]"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </main>
  );
}