import express from 'express';
import MyUserController from '../controllers/MyUserController';

const userRouter=express.Router();

userRouter.get("/",MyUserController.getCurrentUser);
userRouter.post("/",MyUserController.createCurrentUser);






export default userRouter;