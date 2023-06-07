import createHttpError from 'http-errors';
import { UserModel } from 'model/user.model';
import { NextApiRequest, NextApiResponse } from 'next';
import connectMongoose from 'utils/connectMongoose';
import bcrypt from "bcryptjs";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  await connectMongoose

  switch (method) {
    case 'GET': {
      const users = await UserModel.find();

      return res.json(users);
    }
    case 'POST': {
      const user = await UserModel.findOne({ email: req.body.email });
      if (user) throw new createHttpError.Conflict("Email exist");

      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(req.body.password, salt);

      const newUser = await UserModel.create({ ...req.body, password });
      return res.json(newUser);
    }
    default:
      throw new createHttpError.MethodNotAllowed();
  }
};

export default handler;
