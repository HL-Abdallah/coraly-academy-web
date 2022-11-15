import AuthLayout from "../../components/reusable/AuthLayout";
import LoginHero from "../../components/one-off/LoginHero";
import emailSent from "/images/email sent.png";

const ResetEmailSent = () => {
  return (
    <>
      <AuthLayout>
        <img src={emailSent} alt="email sent" />
      </AuthLayout>
      <LoginHero />
    </>
  );
};

export default ResetEmailSent;
