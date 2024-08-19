import { useContext, useEffect, useState } from "react";
import { Text } from "../atoms";
import { Modal } from "../molecules";
import { Login, NewPost, Post, Register } from "../organisms";
import Data from "../../store/data.json";
import { AuthContext } from "../../contexts/auth";
import useForm from "../../hooks/useForm";
import { loginConfig, registerConfig } from "../../configs/auth";

function HomePage() {
  const { isAuthenticated, login } = useContext(AuthContext);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [newPost, setNewPost] = useState("");
  const {
    formData: loginForm,
    handleChange: handleLoginFormChange,
    errors: loginFormErrors,
  } = useForm(loginConfig);
  const {
    formData: registerForm,
    handleChange: handleRegisterFormChange,
    errors: registerFormErrors,
  } = useForm(registerConfig);

  const { posts } = Data;

  const isValidLoginFormData = (type: "login" | "register") =>
    (type === "login" ? loginFormErrors?.length : registerFormErrors?.length) === 0;

  const openLoginModal = () => {
    if (!isAuthenticated) setShowLoginModal(true);
  };

  const handleFormChange =
    (type: "login" | "register") =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event?.target;
      if (type === "login") {
        handleLoginFormChange(name as keyof typeof loginConfig, value);
      } else {
        handleRegisterFormChange(name as keyof typeof registerConfig, value);
      }
    };

  const handlePostChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event?.target;
    setNewPost(value);
  };

  const isPostValid = newPost?.trim()?.length > 0;

  const handleSubmit = () => {
    login();
    closeModal();
  };

  const toggleAuth = () => {
    setShowLoginModal((prev) => !prev);
    setShowRegisterModal((prev) => !prev);
  };

  const closeModal = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
  };

  useEffect(() => {
    if (!isAuthenticated) {
      openLoginModal();
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
              onClick={openLoginModal}
            />
          </div>
          {posts?.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </section>
      </div>
      <Modal
        isOpen={showLoginModal || showRegisterModal}
        closeModal={closeModal}
      >
        {showLoginModal ? (
          <Login
            username={loginForm.username.value}
            password={loginForm.password.value}
            disabled={!isValidLoginFormData("login")}
            onChange={handleFormChange("login")}
            onSubmit={handleSubmit}
            onClose={closeModal}
            onSignupClick={toggleAuth}
          />
        ) : showRegisterModal ? (
          <Register
            username={registerForm.username.value}
            email={registerForm.email.value}
            password={registerForm.password.value}
            disabled={!isValidLoginFormData("register")}
            onChange={handleFormChange("register")}
            onSubmit={handleSubmit}
            onClose={closeModal}
            onLoginClick={toggleAuth}
          />
        ) : null}
      </Modal>
    </div>
  );
}

export default HomePage;
