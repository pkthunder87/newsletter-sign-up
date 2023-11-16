function Image() {
  return (
    <picture>
      <source
        media="(max-width: 425px)"
        srcSet="./illustration-sign-up-mobile.svg"
      />
      <img
        className="md:ml-16 md:scale-[.94] md:self-center md:justify-self-end"
        src="./illustration-sign-up-desktop.svg"
        alt="Charts illustration"
      />
    </picture>
  );
}

export default Image;
