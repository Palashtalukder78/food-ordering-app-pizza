import {model, models, Schema} from 'mongoose';

const UserSchema = new Schema ({
    email : {type: String, required:true, unique: true },
    password: {
        type: String, 
        required: true, 
        validate: pass=>{
            if(!pass || pass.length <5){
                new Error("Password Must not be at least 5 character!")
            }
        }
    }
}, {timeStamps: true})

export const User = models?.User || model("User", UserSchema);