import connectDB from 'utils/connectMongoose';
export default function handler(req, res) {
  console.log(connectDB)
  res.status(200).json({ name: 'raoui' });
}
