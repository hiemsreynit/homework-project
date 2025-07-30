import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Zod validation schema
const formSchema = z
  .object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must be less than 20 characters")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores"
      ),
    email: z
      .string()
      .email("Please enter a valid email address")
      .min(1, "Email is required"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      ),
    confirmed_password: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmed_password, {
    message: "Passwords do not match",
    path: ["confirmed_password"],
  });

export default function LoginComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmed_password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted successfully:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Registration Form with Zod Validation
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* username */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Username:
          </label>
          <input
            {...register("username")}
            placeholder="Enter your username"
            className={`w-full border p-2 rounded-lg ${
              errors.username ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.username && (
            <span className="text-red-500 text-sm mt-1 block">
              {errors.username.message}
            </span>
          )}
        </div>

        {/* email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email:
          </label>
          <input
            {...register("email")}
            placeholder="Enter your email"
            className={`w-full border p-2 rounded-lg ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <span className="text-red-500 text-sm mt-1 block">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password:
          </label>
          <input
            type="password"
            {...register("password")}
            placeholder="Enter the password..."
            className={`w-full border p-2 rounded-lg ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <span className="text-red-500 text-sm mt-1 block">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* confirmed_password */}
        <div>
          <label
            htmlFor="confirmed_password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Confirmed Password:
          </label>
          <input
            type="password"
            {...register("confirmed_password")}
            placeholder="Enter the confirmed password..."
            className={`w-full border p-2 rounded-lg ${
              errors.confirmed_password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.confirmed_password && (
            <span className="text-red-500 text-sm mt-1 block">
              {errors.confirmed_password.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
        >
          Register
        </button>
      </form>

      {/* Validation Rules Info */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-sm font-medium text-gray-900 mb-2">
          Validation Rules:
        </h3>
        <ul className="text-xs text-gray-600 space-y-1">
          <li>
            • Username: 3-20 characters, letters, numbers, underscores only
          </li>
          <li>• Email: Valid email format required</li>
          <li>• Password: Min 8 chars, 1 uppercase, 1 lowercase, 1 number</li>
          <li>• Confirmed Password: Must match password</li>
        </ul>
      </div>
    </div>
  );
}
