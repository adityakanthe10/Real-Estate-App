import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  //hash the password

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user and save to DB
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    console.log("newUser", newUser);
    res.status(201).json({ message: "user created successfully" });
  } catch (err) {
    console.log(err, "error internal server error");
    res.status(500).json({
      message: "internal server error",
    });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    //Check if the user exists
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid Credentials !",
      });
    }
    //check if the password is correct
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({
        message: "Invalid Credentials!",
      });
    }

    // generate cookie token and send it to the user

    // res.setHeader("Set-Header", "test=" + "myValue").json("success");

    const age = 1000 * 60 * 60 * 24 * 7;
    const token = jwt.sign(
      {
        id: user.id,
        isAdmin: false,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: age,
      }
    );

    const { password: userPassword, ...userInfo } = user;

    res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: age,
        // secure:true
      })
      .status(200)
      .json(userInfo);
  } catch (err) {
    console.log(err, "!invalid password");
    res.status(500).json("Failed to Login!");
  }
};
export const logout = (req, res) => {
  // db operations
  res.clearCookie("token").status(200).json({ message: "Logout Successful" });
};
