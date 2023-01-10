const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minLenth: [8, 'Password must be at least 8 characters long'],
      maxLength: [150, 'Na wa for you o! You no get conscience?'],
    },
  },
  { timestamps: true }
);

const UserModel = model('User', userSchema);

module.exports = { UserModel };
