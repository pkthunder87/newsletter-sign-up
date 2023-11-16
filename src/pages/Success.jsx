import { useNavigate } from 'react-router-dom';

function Success({ userEmail }) {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate('/signup');
  }

  return (
    <div className="flex h-[100dvh] w-[100dvw] flex-col bg-frontend-white p-10 leading-[1] md:h-[48dvh] md:w-[34dvw] md:gap-8 md:rounded-[32px] md:p-20 md:shadow-2xl md:shadow-dark-slate-grey">
      <img
        className="mt-52 h-[5.75rem] w-[5.75rem] md:-mt-4 md:h-[5.25rem] md:w-[5.25rem]"
        src="icon-success.svg"
        alt="checkmark"
      />
      <h2 className="tracking-none mt-16 text-[3.9rem] font-bold md:mt-4 md:text-[4.4rem] md:tracking-wide">
        Thanks for subscribing!
      </h2>
      <p className="mt-8 text-[1.6rem] leading-normal md:mt-2 md:text-[1.3rem]">
        A confirmation email has been sent to <strong>{userEmail}</strong>.
        Please open it and click the button inside to confirm your subscription
      </p>
      <button
        onClick={handleClick}
        className=" mt-[31rem] h-20 rounded-xl bg-dark-slate-grey text-[1.3rem] font-bold text-frontend-white hover:bg-gradient-to-r   hover:from-pink hover:to-orange md:mt-4 "
      >
        Dismiss message
      </button>
    </div>
  );
}

export default Success;
