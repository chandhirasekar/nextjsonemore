import Image from "next/image";
const page = ({ data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <Image
        key={data.id}
        width={1000}
        height={500}
        alt={data.title}
        src={data.image}
      />

      <p>{data.description}</p>
    </div>
  );
};
export default page;
export async function getStaticPaths() {
  const { allEvents } = await import("/data/data.json");

  const eve = allEvents.map((e) => {
    return {
      params: {
        cat: e.city,
        id: e.id,
      },
    };
  });

  return {
    paths: eve,
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const id = context.params.id;
  const { allEvents } = await import("/data/data.json");
  const eventPage = allEvents.find((e) => id === e.id);

  return {
    props: {
      data: eventPage,
    },
  };
}
