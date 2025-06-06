import { Request, Response, NextFunction } from "express";
import { storage } from "../storage";
import { User } from "@shared/schema";

/**
 * Get the user associated with the current session
 * @param req Express Request object
 * @returns User object if authenticated, null otherwise
 */
export async function getUserFromSession(req: Request): Promise<User | null> {
  if (!req.session || !req.session.passport || !req.session.passport.user) {
    return null;
  }
  
  const userId = req.session.passport.user;
  const user = await storage.getUser(userId);
  
  return user || null;
}

/**
 * Middleware to check if a user is authenticated
 * @param req Express Request object
 * @param res Express Response object
 * @param next Express NextFunction
 */
export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  if (req.isAuthenticated()) {
    return next();
  }
  
  return res.status(401).json({
    success: false,
    message: "Authentication required"
  });
}