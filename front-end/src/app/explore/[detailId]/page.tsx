type IdProps = {
  params: {
    detailId: number;
  };
};

export default function ExplorDetail({ params }: IdProps) {
  return <main className="">Details</main>;
}

export function generateStaticParams() {
  // 경로 지정
  const products = ["pants, skirts"];
  return products.map((product) => ({
    slug: product,
  }));
}
