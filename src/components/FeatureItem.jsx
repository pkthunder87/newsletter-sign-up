function FeatureItem({ children }) {
  return (
    <li className="flex gap-6 md:gap-8 ">
      <img
        className="scale-100   self-start md:scale-100"
        src="icon-list.svg"
        alt="checkmark"
      />
      {children}
    </li>
  );
}

export default FeatureItem;
