import FeatureItem from './FeatureItem';

function Features() {
  return (
    <ul className="mt-10 flex flex-col gap-4 md:mt-10 md:gap-[1.3rem]">
      <FeatureItem>Product discovery and building what matters</FeatureItem>

      <FeatureItem>Measuring to ensure updates are a success</FeatureItem>

      <FeatureItem>And much more!</FeatureItem>
    </ul>
  );
}

export default Features;
