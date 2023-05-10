import Feed from "@components/Feed";

const Home = () => {
  return (
    <div>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          OPEN SNS
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center">Next.js</span>
        </h1>
        <p className="text-center desc">
          OPEN SNS는 실시간으로 정보공유를 할수 있는 장소입니다.
        </p>

        <Feed />
      </section>
    </div>
  );
};

export default Home;
