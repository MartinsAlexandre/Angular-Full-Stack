import * as mongoose from 'mongoose';

const devSchema = new mongoose.Schema({
  name: String,
  team: String,
  pays: String,
  age: Number,
  skills: String,
  imgDev: String,
  flag: String,
  describeTeam: String,
  describeDev: String,
});

const devModel = mongoose.model('dev', devSchema);

export default devModel;
