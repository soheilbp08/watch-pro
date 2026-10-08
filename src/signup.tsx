import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

interface SignupForm {
  username: string;
  password: string;
  confirmPassword: string;
}

interface User {
  id: string;
  username: string;
  password: string;
}

export default function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupForm>();

  const password = watch("password");

  const onSubmit: SubmitHandler<SignupForm> = async (data) => {
    setError("");

    try {
      // بررسی اینکه username قبلاً وجود دارد
      const response = await fetch(
        `http://localhost:3000/users?username=${data.username}`
      );

      const users: User[] = await response.json();

      if (users.length > 0) {
        setError("This username already exists");
        return;
      }

      // ساخت کاربر جدید
      const newUser = {
        id: crypto.randomUUID(),
        username: data.username,
        password: data.password,
      };

      const createResponse = await fetch(
        "http://localhost:3001/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }
      );

      if (!createResponse.ok) {
        setError("Could not create account");
        return;
      }

      // بعد از ثبت نام → Login
      navigate("/login");
    } catch {
      setError("Server connection failed");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#061A15] px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
          w-full max-w-md
          rounded-3xl
          border border-[#D4AF62]/20
          bg-[#0B2B24]
          p-6
          shadow-2xl
          sm:p-8
        "
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#D4AF62]">
            SOHNA
          </p>

          <h1 className="mt-3 text-3xl font-semibold text-[#F5F1E8]">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-[#F5F1E8]/50">
            Join the SOHNA experience
          </p>
        </div>

        {/* Username */}
        <div className="mb-5">
          <label className="mb-2 block text-sm text-[#F5F1E8]/80">
            Username
          </label>

          <input
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters",
              },
            })}
            type="text"
            placeholder="Choose a username"
            className="
              w-full rounded-xl
              border border-[#D4AF62]/20
              bg-[#061A15]
              px-4 py-3
              text-[#F5F1E8]
              outline-none
              transition-all duration-300
              focus:border-[#D4AF62]/70
            "
          />

          {errors.username && (
            <p className="mt-2 text-xs text-red-400">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="mb-2 block text-sm text-[#F5F1E8]/80">
            Password
          </label>

          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            type="password"
            placeholder="Create a password"
            className="
              w-full rounded-xl
              border border-[#D4AF62]/20
              bg-[#061A15]
              px-4 py-3
              text-[#F5F1E8]
              outline-none
              transition-all duration-300
              focus:border-[#D4AF62]/70
            "
          />

          {errors.password && (
            <p className="mt-2 text-xs text-red-400">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="mb-2 block text-sm text-[#F5F1E8]/80">
            Confirm Password
          </label>

          <input
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            type="password"
            placeholder="Confirm your password"
            className="
              w-full rounded-xl
              border border-[#D4AF62]/20
              bg-[#061A15]
              px-4 py-3
              text-[#F5F1E8]
              outline-none
              transition-all duration-300
              focus:border-[#D4AF62]/70
            "
          />

          {errors.confirmPassword && (
            <p className="mt-2 text-xs text-red-400">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Server Error */}
        {error && (
          <div className="
            mb-5 rounded-xl
            border border-red-400/20
            bg-red-400/10
            px-4 py-3
            text-center text-sm text-red-400
          ">
            {error}
          </div>
        )}

        {/* Button */}
        <button
          type="submit"
          className="
            w-full rounded-xl
            bg-[#D4AF62]
            px-4 py-3
            font-semibold
            text-[#061A15]
            transition-all duration-300
            hover:-translate-y-0.5
            hover:bg-[#E3C77D]
          "
        >
          Sign Up
        </button>

        {/* Login */}
        <p className="mt-6 text-center text-sm text-[#F5F1E8]/50">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#D4AF62] transition hover:text-[#E3C77D]"
          >
            Login
          </Link>
        </p>
      </form>
    </main>
  );
}