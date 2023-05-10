import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: [true, "tag를 입력해주세요"],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
