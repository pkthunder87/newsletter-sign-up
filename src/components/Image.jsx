function Image() {
  return (
    <picture>
      <source
        media="(max-width: 425px)"
        srcSet="./illustration-sign-up-mobile.svg"
      />
      <img
        className="ml-16 scale-[.94] self-center justify-self-end"
        src="./illustration-sign-up-desktop.svg"
        alt="Charts illustration"
      />
    </picture>
  );
}

export default Image;
