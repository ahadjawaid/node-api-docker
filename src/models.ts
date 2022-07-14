import mongoose, { Schema } from "mongoose";
import { IUser } from './types';

const UserSchema: Schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    }
});

const UserModel = mongoose.model<IUser>("User", UserSchema)

export default UserModel;