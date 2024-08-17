import { Text } from "../atoms";
import Data from "../../store/data.json";
import { NewPost, Post } from "../organisms";

function Home() {
  const { posts } = Data;
  return (
    <div className="w-full h-full bg-black flex flex-col items-center p-16">
      <div className="container w-1/2 max-w-175">
        <div className="flex flex-col gap-3">
          <Text as="h2" className="text-3xl text-gray-normal font-medium">
            Hello Jane
          </Text>
          <Text
            as="h2"
            className="text-base text-gray-heavy font-normal max-w-145"
          >
            How are you doing today? Would you like to share something with the
            community 🤗
          </Text>
        </div>
        <section className="flex flex-col gap-4">
          <div className="w-full pt-16">
            <NewPost />
          </div>
          {posts?.map((post) => (
            <Post {...post} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default Home;
