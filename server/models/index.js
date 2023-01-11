import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

mongoose.connect(`mongodb://localhost:27017/gethelp`, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('Connected to Gethelp DB');
});

export default mongoose;