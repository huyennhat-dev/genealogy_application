import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 6,
      max: 40,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    fullName: {
      type: String,
      required: true,
      min: 4,
      max: 40,
    },
    
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Compares the provided password with the user's stored password.
 * 
 * @param {string} password - The plain text password to compare.
 * @returns {Promise<boolean>} - Returns a promise that resolves to true if the passwords match, otherwise false.
 */
userSchema.methods.comparePassword = async function (password: string) {
  return bcrypt.compare(password, this.password);
};

const userModel = mongoose.model("User", userSchema);

export default userModel;
