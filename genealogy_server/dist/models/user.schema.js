"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userSchema = new mongoose_1.default.Schema({
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
}, {
    timestamps: true,
});
userSchema.methods.comparePassword = async function (password) {
    return bcryptjs_1.default.compare(password, this.password);
};
const userModel = mongoose_1.default.model("User", userSchema);
exports.default = userModel;
