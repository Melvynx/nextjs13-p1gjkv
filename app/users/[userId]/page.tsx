export default async function Home({
  params,
}: {
  params: {
    userId: string;
  };
}) {
  return params.userId;
}
