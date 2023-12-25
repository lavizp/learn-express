import { NextFunction, Response, Request, json } from "express";
import db from "../database/db";
async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, password } = req.body;
    const result = await db.query("SELECT * FROM users WHERE name = $1", [
      name,
    ]);
    res.status(200).send({ name: result.rows[0].name });
  } catch (error) {
    next(error);
  }
}

async function signUp(req: Request, res: Response, next: NextFunction) {
  const { name, password } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO users (name,password) VALUES($1,$2)",
      [name, password]
    );
    res.status(200).send({ result });
  } catch (error) {
    next(error);
  }
}

export default {
  login,
  signUp,
};
