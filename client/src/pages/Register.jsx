import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
	const { register: r, handleSubmit } = useForm();
	const { register: doRegister } = useAuth();
	const nav = useNavigate();

	const onSubmit = async (data) => {
		try {
			await doRegister({
				name: data.name,
				email: data.email,
				password: data.password,
				role: data.role,
			});
			nav("/");
		} catch (err) {
			alert(err.response?.data?.message || "Registration failed");
		}
	};

	return (
		<div className="max-w-md mx-auto bg-white p-6 rounded shadow">
			<h2 className="text-xl font-semibold mb-4">Register</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
				<input
					{...r("name", { required: true })}
					placeholder="Name"
					className="input"
				/>
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
				<select {...r("role")} className="input">
					<option value="attendee">Attendee</option>
					<option value="organizer">Organizer</option>
				</select>
				<button type="submit" className="btn">
					Sign Up
				</button>
			</form>
		</div>
	);
}
