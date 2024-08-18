import { useState } from "react";
import { Text } from "../atoms";
import { Modal } from "../molecules";
import { Login, NewPost, Post, Register } from "../organisms";
import Data from "../../store/data.json";

function HomePage() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const { posts } = Data;

  const openLoginModal = () => setShowLoginModal(true);

  const toggleAuth = () => {
    setShowLoginModal((prev) => !prev);
    setShowRegisterModal((prev) => !prev);
  }

  const closeModal = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
  }

  return (
    <div className="w-full h-full bg-black flex flex-col items-center p-4 md:p-16 overflow-y-auto">
      <div className="container md:w-1/2 md:max-w-175">
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
          <div className="w-full pt-10">
            <NewPost onClick={openLoginModal} />
          </div>
          {posts?.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </section>
      </div>
      <Modal isOpen={showLoginModal || showRegisterModal} closeModal={closeModal}>
        {showLoginModal ? (
          <Login onClose={closeModal} onSignupClick={toggleAuth} />
        ) : showRegisterModal ? (
          <Register onClose={closeModal} onLoginClick={toggleAuth} />
        ) : null}
      </Modal>
    </div>
  );
}

export default HomePage;
