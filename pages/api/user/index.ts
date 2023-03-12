import createHttpError from 'http-errors';
import { UserModel } from 'model/user.model';
import { NextApiRequest, NextApiResponse } from 'next';
import connectMongoose from 'utils/connectMongoose';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  await connectMongoose;

  switch (method) {
    case 'GET': {
      const users = await UserModel.find();

      return res.json(users);
    }
    case 'POST': {
      const user = await UserModel.create(req.body);

      return res.json(user);
    }
    default:
      throw new createHttpError.MethodNotAllowed();
  }
};

export default handler;
