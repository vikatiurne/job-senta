import LoginForm from "../components/AutorizationPage/AuthForms/LoginForm";
import RegistrationForm from "../components/AutorizationPage/AuthForms/RegistrationForm";
import PasswordRecoveryForm from "../components/AutorizationPage/AuthForms/PasswordRecoveryForm";
import NewPasswordForm from "../components/AutorizationPage/AuthForms/NewPasswordForm";

export const textData = {
  "/registration": {
    greetings: "Welcome!",
    infoGreetings:
      "Register by entering your data to get access to all the features of the service.",
    linkBtn: "sing in",
    link: "../login",
    title: "Create Account",
    choiceInfo: "Or use email for registration:",
    infoTitle: "",
    sendBtn: "sing up",
    component: <RegistrationForm />,
    path: "registration",
  },
  "/login": {
    greetings: "Hello!",
    infoGreetings: "Log in to your account to continue working on your resume.",
    linkBtn: "sing up",
    link: "../registration",
    title: "Sing in your account",
    choiceInfo: "Or use email for registration",
    infoTitle: "",
    sendBtn: "sing in",
    component: <LoginForm />,
    path: "login",
  },
  "/forgot-password": {
    greetings: "It’s ok!",
    infoGreetings: "Don't worry you can always reset your password",
    linkBtn: "come back",
    link: "../login",
    title: "Password recovery",
    choiceInfo: null,
    infoTitle:
      "Enter your email and we'll send you password recovery instructions.",
    sendBtn: "send",
    component: <PasswordRecoveryForm />,
    path: "forgot-password",
  },
  "/recovery-password": {
    greetings: "Hello!",
    infoGreetings:
      "Come up with and enter a new password to enter your personal account",
    linkBtn: "sing in",
    link: "../login",
    title: "Password recovery",
    choiceInfo: null,
    infoTitle: "Create a new password for your personal account and confirm it",
    sendBtn: "save changes",
    component: <NewPasswordForm />,
    path: "recovery-password",
  },
};
