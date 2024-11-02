import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { resetToken } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`https://backend-pmn1.onrender.com/api/auth/reset-password/${resetToken}`, {
        password,
      });
      toast.success(response.data.message);
      navigate("/login");
    } catch (error) {
      console.error("Error during password reset:", error);
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter Your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"} password
          </button>
        </p>
        <br />
        <button type="submit">Update Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
