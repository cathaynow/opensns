import Link from "next/link";

const Form = ({ type, post, setPost, submit, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">좋은 정보를 공유해주세요</p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            정보 입력
          </span>
          <textarea
            value={post.prompt}
            placeholder="정보를 공유해주세요"
            required
            className="form_textarea"
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag
            <span>(#맛집, #여행 #개발)</span>
          </span>
          <input
            value={post.tag}
            placeholder="#tag"
            required
            className="form_input"
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="" className="text-gray500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submit}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submit ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
