const User = require("../models/User");
const generateToken = require("../utils/generateToken");

exports.register = async (req, res) => {
	const { name, email, password, role } = req.body;

	const user = await User.create({ name, email, password, role });
	const token = generateToken;
	res.status(201).json({ token, user });
};

exports.login = async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });
	if (!user || !(await user.comparePassword(password))) {
		return res.status(401).json({ message: "Invalid credentials" });
	}

	const token = generateToken(user);
	res.json({ token, user });
};
