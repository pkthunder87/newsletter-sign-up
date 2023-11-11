function Success() {
  return (
    <div className="flex flex-col bg-frontend-white leading-[1] shadow-2xl shadow-dark-slate-grey md:h-[48dvh] md:w-[34dvw] md:gap-8 md:rounded-[32px] md:p-20">
      <img
        className="h-[5.25rem] w-[5.25rem] md:-mt-4"
        src="icon-success.svg"
        alt="checkmark"
      />
      <h2 className="font-bold tracking-wide md:mt-4 md:text-[4.4rem]">
        Thanks for subscribing!
      </h2>
      <p className="text-[1.3rem] leading-normal md:mt-2">
        A confirmation email has been sent to{' '}
        <strong>ash@loremcompany.com</strong>. Please open it and click the
        button inside to confirm your subscription.
      </p>
      <button className=" mt-4 h-20 rounded-xl bg-dark-slate-grey text-[1.3rem] font-bold text-frontend-white   hover:bg-gradient-to-r hover:from-pink hover:to-orange ">
        Dismiss message
      </button>
    </div>
  );
}

export default Success;
