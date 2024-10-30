/**
 * Author: Jinn
 * Date: 2024-10-24
 */

import mongoose from "mongoose";

const infoSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    avatar: {
      type: String,
    },
    address: {
      type: String,
    },
    email: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["MALE", "FEMALE", "OTHER"],
    },
    dateOfBirth: {
      type: Date,
    },
    dateOfDeath: {
      type: Date,
    },
    description: {
      type: String,
    },
    level:{
      type: Number,
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Info",
    },
    children: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Info",
      },
    ],
    couple: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Info",
      },
    ],
    tribe: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tribe",
    },
  },
  {
    timestamps: true,
  }
);

const infoModel = mongoose.model("Info", infoSchema);

export default infoModel;
