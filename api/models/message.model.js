import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    ConversationId: {
      type: String,
      required: true,
      unique: true,
     },
    UserId: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Message", MessageSchema);
