import EmailForm from '../components/EmailForm';
import Features from '../components/Features';
import Header from '../components/Header';
import Image from '../components/Image';

function SignUp({ setUserEmail }) {
  return (
    <div className="grid h-[100dvh] w-[100dvw] grid-cols-1 bg-frontend-white pt-0 md:h-[60rem] md:w-[90rem] md:grid-cols-[50%_50%] md:rounded-[28px] md:px-8 md:shadow-[0_35px_80px_30px_rgba(0,0,0,0.2)]">
      <div className="mx-10 md:my-24 md:ml-12 md:mr-0">
        <Header />
        <Features />
        <EmailForm setUserEmail={setUserEmail} />
      </div>
      <div className="-order-1 grid md:order-2">
        <Image />
      </div>
    </div>
  );
}

export default SignUp;
