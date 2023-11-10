function SignUp() {
  return (
    <div className="mt-16">
      <form action="" className="flex flex-col">
        <label className="text-[1.6rem] font-bold" htmlFor="email">
          Email address
        </label>
        <input
          className="mt-4 h-20 cursor-pointer rounded-xl border p-8"
          type="text"
          id="email"
          placeholder="email@company.com"
        />
        <button className=" hover:to-orange hover:from-pink mt-8 h-20 rounded-xl bg-dark-slate-grey text-frontend-white   hover:bg-gradient-to-r">
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
}

export default SignUp;