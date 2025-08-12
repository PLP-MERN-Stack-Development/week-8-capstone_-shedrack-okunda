import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
	const { register: r, handleSubmit } = useForm();
	const { login } = useAuth();
	const nav = useNavigate();

	const onSubmit = async (data) => {
		try {
			await login(data.email, data.password);
			nav("/");
		} catch (err) {
			alert(err.response?.data?.message || "Login failed");
		}
	};

	return (
		<div className="max-w-md mx-auto bg-white p-6 rounded shadow">
			<h2 className="text-xl font-semibold mb-4">Login</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
				<input
					{...r("email", { required: true })}
					type="email"
					placeholder="Email"
					className="input"
				/>
				<input
					{...r("password", { required: true })}
					type="password"
					placeholder="Password"
					className="input"
				/>
				<button type="submit" className="btn">
					Login
				</button>
			</form>
		</div>
	);
}
