import bcrypt from "bcrypt";

export const register = async (req, res) => {
  console.log("is registered");
  const { username, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword, "hashedPassword");
  // db operations
};
export const login = (req, res) => {
  // db operations
};
export const logout = (req, res) => {
  // db operations
};
