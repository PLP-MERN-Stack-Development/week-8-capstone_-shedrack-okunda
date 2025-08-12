import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
	const { user, logout } = useAuth();
	return (
		<nav className="bg-white shadow">
			<div className="container mx-auto p-4 flex justify-between items-center">
				<Link to="/" className="font-bold text-xl">
					EventEase
				</Link>
				<div className="flex gap-4 items-center">
					<Link to="/">Events</Link>
					{user ? (
						<>
							{user.role === "organizer" && (
								<Link to="/organizer">Organizer</Link>
							)}
							<button onClick={logout} className="text-sm">
								Logout
							</button>
						</>
					) : (
						<>
							<Link to="/login">Login</Link>
							<Link to="/register">Sign up</Link>
						</>
					)}
				</div>
			</div>
		</nav>
	);
}
