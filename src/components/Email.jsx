import { useNavigate } from 'react-router-dom';

function Email() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/success');
  }

  return (
    <div className="mt-16">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="text-[1.6rem] font-bold" htmlFor="email">
          Email address
        </label>
        <input
          className="mt-4 h-20 cursor-pointer rounded-xl border px-10 ring ring-transparent ring-offset-[-2px] hover:ring-dark-slate-grey focus:outline-none focus:ring-dark-slate-grey"
          type="text"
          id="email"
          placeholder="email@company.com"
        />
        <button className=" mt-8 h-20 rounded-xl bg-dark-slate-grey text-frontend-white hover:bg-gradient-to-r hover:from-pink   hover:to-orange">
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
}

export default Email;
