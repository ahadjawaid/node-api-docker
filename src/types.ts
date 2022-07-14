import { Document } from "mongoose";


export type URI = string | undefined;

export type ID = string;

export interface IConfig {
    name: string;
    port: number;
    host: string;
    mongoURI: URI;
};

export interface IUser extends Document {
    email: String;
    firstName: String;
    lastName: String;
};

export interface ICreateUser {
    email: IUser['email'];
    firstName: IUser['firstName'];
    lastName: IUser['lastName'];
};

export interface IUpdate {
    email?: IUser['email'],
    firstName?: IUser['firstName'];
    lastName?: IUser['lastName'];
}