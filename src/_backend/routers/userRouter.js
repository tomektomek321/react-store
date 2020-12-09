import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { users } from '../DB_data.js'
import User from '../models/userModel.js';

const userRouter = express.Router();

userRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    // await User.remove({});
    const createdUsers = await User.insertMany(users);
    res.send({ createdUsers });
  })
);

export default userRouter;