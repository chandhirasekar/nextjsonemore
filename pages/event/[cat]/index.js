import Image from "next/image";
import Link from "next/link";

const page = ({ data, titleName }) => {
  return (
    <div>
      <h1>Events in {titleName}</h1>
      <div>
        {data.map((en) => (
          <Link key={en.id} href={`/event/${en.city}/${en.id}`} passHref>
            <Image width={300} height={300} alt={en.title} src={en.image} />
            <h1>{en.title}</h1>
            <p>{en.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default page;
export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allEve = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });

  return {
    paths: allEve,
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const id = context?.params.cat;
  const { allEvents } = await import("/data/data.json");
  const data = allEvents.filter((ev) => ev.city === id);
  console.log(data);
  return {
    props: {
      data,
      titleName: id,
    },
  };
}
