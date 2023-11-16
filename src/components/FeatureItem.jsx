function FeatureItem({ children }) {
  return (
    <li className="flex gap-6 md:gap-[1.6rem] ">
      <img
        className="scale-100   self-start md:scale-100"
        src="icon-list.svg"
        alt="checkmark"
      />
      <p className="md:-mt-1">{children}</p>
    </li>
  );
}

export default FeatureItem;
