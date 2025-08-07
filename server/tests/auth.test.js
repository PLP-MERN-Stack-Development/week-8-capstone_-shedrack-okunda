const request = require("supertest");
const app = require("../app");

describe("Auth Routes", () => {
	it("should register a user", async () => {
		const res = await request(app).post("/api/auth/register").send({
			name: "John Doe",
			email: "john@example.com",
			password: "12345678",
		});
		expect(res.statusCode).toBe(201);
		expect(res.body).toHaveProperty("token");
	});
});
