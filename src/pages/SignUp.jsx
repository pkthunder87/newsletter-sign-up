import EmailForm from '../components/EmailForm';
import Features from '../components/Features';
import Header from '../components/Header';
import Image from '../components/Image';

function SignUp({ setUserEmail }) {
  return (
    <div className="grid h-[100dvh] w-[100dvw] grid-cols-1 bg-frontend-white pt-0 md:h-[64rem] md:w-[92.5rem] md:grid-cols-[50%_50%] md:rounded-[35px] md:px-8 md:shadow-[0_35px_80px_30px_rgba(0,0,0,.25)]">
      <div className="mx-10 md:my-32 md:ml-[4.3rem] md:mr-[2.3rem]">
        <Header />
        <Features />
        <EmailForm setUserEmail={setUserEmail} />
      </div>
      <div className="-order-1 grid md:order-2 md:mr-1 md:self-center md:justify-self-end">
        <Image />
      </div>
    </div>
  );
}

export default SignUp;
