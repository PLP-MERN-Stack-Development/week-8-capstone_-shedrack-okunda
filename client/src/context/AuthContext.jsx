import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (!token)
			return setLoading(false)(async () => {
				try {
					const res = await api.get("/auth/me");
					setUser(res.data.user);
				} catch (err) {
					console.error(err);
					localStorage.removeItem("token");
				} finally {
					setLoading(false);
				}
			})();
	}, []);

	const login = async (email, password) => {
		const res = await api.post("/auth/login", { email, password });
		localStorage.setItem("token", res.data.token);
		setUser(res.data.user);
	};

	const register = async (payload) => {
		const res = await api.post("/auth/register", payload);
		localStorage.setItem("token", res.data.token);
		setUser(res.data.user);
	};

	const logout = () => {
		localStorage.removeItem("token");
		setUser(null);
	};

	return (
		<AuthContext.Provider
			value={{ user, loading, login, register, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
