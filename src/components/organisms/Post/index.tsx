import { Text } from "../../atoms";
import { Card } from "../../molecules";
import { PostProps } from "./index.types";

function Post({
  imageUrl,
  username,
  time,
  emoji,
  content,
  isEdited,
  commentCount,
}: PostProps) {
  const status = [time];
  if (isEdited) status.push("Edited");

  return (
    <Card className="bg-black-light py-6 px-5 gap-3 flex flex-col">
      <div className="flex gap-4">
        <img src={imageUrl} className="w-11 h-11 rounded-full object-cover" />
        <div className="flex flex-col gap-1">
          <Text as="span" className="text-gray-normal">
            {username}
          </Text>
          <Text as="span" className="text-gray-heavy text-sm">
            {status.join(" • ")}
          </Text>
        </div>
      </div>
      <Card className="bg-black-heavy p-4 flex gap-4">
        <span className="w-12 h-12 bg-black-light p-4 rounded-full flex justify-center items-center">
          {emoji}
        </span>
        <Text as="p" className="text-gray-light">
          {content}
        </Text>
      </Card>
      {commentCount > 0 && (
        <div className="flex gap-2 justify-center items-center w-fit">
          <img src="/icons/comments.svg" className="w-5 h-4" />
          <Text as="span" className="text-gray-heavy">
            {`${commentCount} comments`}{" "}
          </Text>
        </div>
      )}
    </Card>
  );
}

export default Post;
