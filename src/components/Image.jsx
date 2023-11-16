function Image() {
  return (
    <picture>
      <source
        media="(max-width: 425px)"
        srcSet="./illustration-sign-up-mobile.svg"
      />
      <img
        className=" "
        src="./illustration-sign-up-desktop.svg"
        alt="Charts illustration"
      />
    </picture>
  );
}

export default Image;
