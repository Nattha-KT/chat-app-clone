import jwt from 'jsonwebtoken';

const genTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "14d",
	});

	res.cookie("jwt", token, {
		maxAge: 14 * 24 * 60 * 60 * 1000, 
        httpOnly: true, // prevent XSS attacks cross-site scripting attacks
		sameSite: "strict", // CSRF attacks cross-site request forgery attacks
		secure: process.env.NODE_ENV !== "development",
	});
};

export default genTokenAndSetCookie;