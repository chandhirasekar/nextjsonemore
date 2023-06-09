import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {data.map((ev, index) => (
        <>
          <Link key={index} href={`/event/${ev.id}`} passHref>
            
              <Image width={300} height={300} alt={ev.title} src={ev.image} />
              <h1>{ev.title}</h1>
              <p>{ev.description}</p>
            
          </Link>
        </>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const { events_categories } = await import("/data/data.json");
  const data = events_categories;
  return {
    props: {
      data,
    },
  };
}
