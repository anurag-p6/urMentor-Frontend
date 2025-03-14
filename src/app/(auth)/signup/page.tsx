"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff} from "lucide-react";

const Signup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname:"",
    contact_no:"",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstname || !formData.lastname || !formData.contact_no || !formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }

    // 🔹 Replace this with API call for actual signup
    try {
      const res = await fetch("http://localhost:8080/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log(res);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Signup failed!");
      }

      alert("Signup successful!");
      router.push("/signin"); // Redirect to login page

    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };
  return (
  <div className="flex min-h-screen items-center justify-center bg-gray-100">
  <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-center text-gray-700">Sign Up</h2>

    {error && <p className="text-red-500 text-center mt-2">{error}</p>}

    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      {/* Name Input */}
      <input
        type="text"
        name="firstname"
        placeholder="First Name"
        className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
        value={formData.firstname}
        onChange={handleChange}
      />

      <input
        type="text"
        name="lastname"
        placeholder="Last Name"
        className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
        value={formData.lastname}
        onChange={handleChange}
      />

      <input
        type="number"
        name="contact_no"
        placeholder="Contact No."
        className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
        value={formData.contact_no}
        onChange={handleChange}
      />

      {/* Email Input */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
        value={formData.email}
        onChange={handleChange}
      />

      {/* Password Input with Eye Icon */}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          className="w-full border border-gray-300 p-2 pr-10 rounded-lg focus:ring-2 focus:ring-blue-500"
          value={formData.password}
          onChange={handleChange}
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      {/* Signup Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
      >
        Sign Up
      </button>
    </form>

    {/* Already have an account? */}
    <p className="mt-4 text-center text-gray-600">
      Already have an account?{" "}
      <button
        onClick={() => router.push("/signin")}
        className="text-blue-600 hover:underline"
      >
        Log in
      </button>
    </p>
  </div>
</div>
);
}

export default Signup;
