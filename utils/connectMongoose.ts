import mongoose from 'mongoose';

const uri = process.env.DATABASE_URI as string; // your mongodb connection string
console.log(uri);

let connectDB: Promise<any>;

declare global {
  var _mongoClientPromise: Promise<any>;
}

if (!process.env.DATABASE_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = mongoose.connect(uri);
  }
  connectDB = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.

  connectDB = mongoose.connect(uri).then(() => {
    console.log('Connected aaaa');
  });
}
connectDB = mongoose.connect(uri).then(() => {
  console.log('Connected');
});
// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default connectDB;
