import { Schema, models, model } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "Email already exists"],
      require: [true, "Email is required"],
    },
    username: {
      type: String,
      require: [true, "Username is required"],
    },
    images: {
      type: String,
    },
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Property",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", UserSchema);

export default User;
