import { classMerge } from "../../../utils/helper";
import { Button, Input, Text } from "../../atoms";
import { Card } from "../../molecules";
import { NewPostProps } from "./index.types";

function NewPost({ content, onChange, disabled, onClick }: NewPostProps) {
  return (
    <Card className="p-6 bg-black-light font-medium flex flex-col gap-4">
      <Text as="h1" className="text-gray-normal font-medium text-lg">
        Create post
      </Text>
      <Card className="bg-black-heavy font-medium p-4 flex gap-4">
        <div className="bg-black-light rounded-full w-12 h-12 p-4 flex justify-center items-center">
          <Text as="span" className="text-lg">
            💬
          </Text>
        </div>
        <Input
          type="text"
          placeholder="How are you feeling today?"
          className="w-full p-0 border-none text-white"
          value={content}
          onChange={onChange}
        />
      </Card>
      <Button
        disabled={disabled}
        onClick={onClick}
        className={classMerge(
          "w-fit px-10 py-2 self-end text-base",
          disabled
            ? "bg-gray-heavy"
            : "bg-blue-normal cursor-pointer hover:opacity-85"
        )}
      >
        Post
      </Button>
    </Card>
  );
}

export default NewPost;
