import { Router, Request, Response } from "express";
import {
  userLoggin,
  createUser,
  verifyToken,
} from "../Controllers/userController";
import * as multer from "multer";
import { authenticated } from "../middleware/authenticated";
import {
  addNewProduct,
  renderProduct,
} from "../Controllers/productsController";
import uploads from "../config/multer";

const router: Router = Router();
router.post("/login", userLoggin);
router.post("/create/user", createUser);
router.get("/verifyToken", authenticated, verifyToken);
router.get("/renderProduct", authenticated, renderProduct);
router.post(
  "/addNewProduct",
  authenticated,
  uploads.single("file"),
  addNewProduct
);

export const Routers: Router = router;
