import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

// GET (read)
export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const prompts = await Prompt.findById(params.id).populate("creator");
    if (!prompts) return new Response("글을 찾을수 없습니다", { status: 404 });

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("데이터를 가져올수 없습니다", { status: 500 });
  }
};

// PATCH (update)
export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();

  try {
    await connectToDB();

    const checkPrompt = await Prompt.findById(params.id);

    if (!checkPrompt)
      return new Response("글을 찾을수 없습니다", { status: 404 });

    checkPrompt.prompt = prompt;
    checkPrompt.tag = tag;

    await checkPrompt.save();

    return new Response(JSON.stringify(checkPrompt), { status: 200 });
  } catch (error) {
    return new Response("업데이트에 실패하였습니다", { status: 500 });
  }
};

// DELETE (delete)
export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    await Prompt.findByIdAndRemove(params.id);
    return new Response("성공적으로 삭제되었습니다.", { status: 200 });
  } catch (error) {
    return new Response("삭제에 실패하였습니다.", { status: 500 });
  }
};
