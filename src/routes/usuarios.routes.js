// routes/usuarios.routes.js

import { Router } from "express";
import { seeUsers, createUser, updateUserData, updateUserPswrd, deleteUser, loginUser, loginAdmin, resetPassword, verifyAdminDni } from "../controllers/usuarios.controller.js";
import { verifyToken } from '../../middlewares/auth.js';

const router = Router();

router.get("/User", verifyToken, seeUsers);
router.post("/User", createUser);
router.put("/UserData", verifyToken, updateUserData);
router.put("/UserPswrd", verifyToken, updateUserPswrd);
router.delete("/User", verifyToken, deleteUser);
router.post('/Userlogin', loginUser);
router.post('/AdminLogin', loginAdmin);
router.post('/ResetPassword', resetPassword);
router.post('/VerifyAdminDni', verifyAdminDni);

export default router;
