import Image from "next/image";
import Link from "next/link";
const EventPage = ({ data }) => {
  return (
    <div>
      <h1>Event page</h1>
      <div>
        {data.map((ev) => (
          <Link key={ev.id} href={`/event/${ev.id}`} passHref>
            <Image width={300} height={300} alt={ev.title} src={ev.image} />
            <h1>{ev.title}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default EventPage;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
