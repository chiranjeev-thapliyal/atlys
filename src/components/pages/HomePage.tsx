import {
  useContext,
  useEffect,
  useState,
} from "react";
import { Text } from "../atoms";
import { Modal } from "../molecules";
import { Login, NewPost, Post, Register } from "../organisms";
import Data from "../../store/data.json";
import { AuthContext } from "../../contexts/auth";
import { AUTH_CONFIG } from "../../configs/auth";
import { useAuthForm, useAuthModal } from "../../hooks";

function HomePage() {
  const { isAuthenticated, login } = useContext(AuthContext);
  const {loginModal, registerModal, isLoginMode, toggleAuthModal} = useAuthModal();
  const loginForm = useAuthForm("login");
  const registerForm = useAuthForm("register");
  const [newPost, setNewPost] = useState("");

  // Post handlers
  const handlePostChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event?.target;
    setNewPost(value);
  };

  const isPostValid = newPost?.trim()?.length > 0;

  // Auth handlers
  const handleSubmit = () => {
    login();
    handleModalClose();
  };

  const handleModalClose = () => {
    if(isLoginMode)loginModal.closeModal();
    else registerModal.closeModal();
  }

  useEffect(() => {
    if (!isAuthenticated) {
      loginModal.openModal();
    }
  }, [isAuthenticated]);

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
            <NewPost
              content={newPost}
              onChange={handlePostChange}
              disabled={!isPostValid}
              onClick={loginModal.openModal}
            />
          </div>
          {Data.posts?.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </section>
      </div>
      <Modal
        isOpen={loginModal.isOpen || registerModal.isOpen}
        closeModal={handleModalClose}
      >
        {isLoginMode ? (
          <Login
            username={loginForm.formData.username.value}
            password={loginForm.formData.password.value}
            disabled={!loginForm.isValidFormData}
            onChange={(e) => loginForm.handleChange(e.target.name as keyof typeof AUTH_CONFIG['login'], e.target.value)}
            onSubmit={handleSubmit}
            onClose={loginModal.closeModal}
            onSignupClick={toggleAuthModal}
          />
        ) : (
          <Register
            username={registerForm.formData.username.value}
            email={registerForm.formData.email.value}
            password={registerForm.formData.password.value}
            disabled={!registerForm.isValidFormData}
            onChange={(e) => registerForm.handleChange(e.target.name as keyof typeof AUTH_CONFIG['register'], e.target.value)}
            onSubmit={handleSubmit}
            onClose={registerModal.closeModal}
            onLoginClick={toggleAuthModal}
          />
        )}
      </Modal>
    </div>
  );
}

export default HomePage;
