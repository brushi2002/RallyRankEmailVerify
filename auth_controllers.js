import {Client,Account,ID,Functions} from "node-appwrite"
import dotenv from 'dotenv'

dotenv.config()

const client = new Client()
.setEndpoint(process.env.APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
.setProject(process.env.APPWRITE_PROJECT_ID)

const account = new Account(client);

// complete verification for the client
export const updateVerification = async (userId, secret) => {
    try{
       const response=await account.updateVerification(userId, secret);
         console.log(response); // Success
            return response;
    }
    catch(error){
        console.log(error); // Failure
        throw error;
    }
}

// update and reset the password
export const updateNewPassword = async (userId, secret, password,password_confirm) => {
    try {
        const response = await account.updateRecovery(userId, secret, password,password_confirm);
        console.log(response); // Success
        return response;
    } catch (error) {
        console.log(error); // Failure
        throw error;
    }
};
