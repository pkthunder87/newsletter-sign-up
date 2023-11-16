function Features() {
  return (
    <ul className="mt-10 flex flex-col gap-4 md:mt-10">
      <li className="flex gap-6 md:gap-8 ">
        <img
          className="scale-100   self-start md:scale-100"
          src="icon-list.svg"
          alt="checkmark"
        />
        Product discovery and building what matters
      </li>
      <li className="flex gap-6 md:gap-8 ">
        <img
          className="scale-100   self-start md:scale-100"
          src="icon-list.svg"
          alt="checkmark"
        />
        Measuring to ensure updates are a success
      </li>
      <li className="flex gap-6 md:gap-8 ">
        <img
          className="scale-100   self-start md:scale-100"
          src="icon-list.svg"
          alt="checkmark"
        />
        And much more!
      </li>
    </ul>
  );
}

export default Features;
