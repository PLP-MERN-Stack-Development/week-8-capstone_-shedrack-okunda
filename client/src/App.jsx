import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import OrganizerDashboard from "./pages/OrganizerDashboard";
import { useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
	const { user } = useAuth();
	return (
		<div className="min-h-screen bg-gray-50">
			<Navbar />
			<main className="container mx-auto p-4">
				<Routes>
					<Route path="/" element={<Events />} />
					<Route
						path="/login"
						element={!user ? <Login /> : <Navigate to="/" />}
					/>
					<Route
						path="/register"
						element={!user ? <Register /> : <Navigate to="/" />}
					/>
					<Route path="/events/:id" element={<EventDetail />} />

					<Route element={<ProtectedRoute roles={["organizer"]} />}>
						<Route
							path="/organizer"
							element={<OrganizerDashboard />}
						/>
					</Route>

					<Route path="*" element={<div>404 Not Found</div>} />
				</Routes>
			</main>
		</div>
	);
}
