import { Router } from "express";

const route = Router();

route.get("/", (req, res) => {
  return res.status(200).send("Eai, blz?");
});

export default route;
