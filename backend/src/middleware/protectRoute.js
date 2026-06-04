import { requireAuth } from '@clerk/express'
import User from '../models/User.js';

export const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      console.log("AUTH OBJECT:", req.auth());

      const clerkId = req.auth().userId;
      console.log("CLERK ID:", clerkId);

      const user = await User.findOne({ clerkId });
      console.log("USER FOUND:", user);

      req.user = user;
      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
];