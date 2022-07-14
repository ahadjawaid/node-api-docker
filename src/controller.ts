import { IUser, ICreateUser } from "./types";
import UserModel from "./models";
import { ID } from './types';

export const CreateUser = async ({
        email, 
        firstName, 
        lastName
    }: ICreateUser): Promise<IUser> => {
    return UserModel.create({
        email,
        firstName,
        lastName
    }).then((data: IUser) => data)
    .catch((error: Error) => {
        throw error;
    });
};

export const GetUser = async (id: ID) => {
    const user =  await UserModel.findById(id).exec();
    
    return user;
};

export const UpdateUser = async (id: ID, update: Object) => {
    const user = await UserModel.findByIdAndUpdate(id, { ...update }).exec();

    return user;
};

export const DeleteUser = async (id: ID) => {
    await UserModel.findByIdAndDelete(id).exec();

    return `Deleted user: ${id}`
};

