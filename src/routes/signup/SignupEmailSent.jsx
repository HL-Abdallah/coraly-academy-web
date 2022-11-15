import LoginHero from "../../components/one-off/LoginHero";
import AuthLayout from "../../components/reusable/AuthLayout";
import wsrdy from "/images/ws rdy.png";

const EmailSent = () => {
  return (
    <>
      <AuthLayout>
        <img src={wsrdy} alt="workspace ready" />
      </AuthLayout>
      <LoginHero />
    </>
  );
};

export default EmailSent;
