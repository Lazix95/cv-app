import Head from "next/head";

interface SharedHeadProps {
  title: string;
}

export function SharedHead({title}: SharedHeadProps) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}