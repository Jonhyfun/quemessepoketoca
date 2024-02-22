
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function getServerSideProps(ctx) {
  return {
    redirect: {
      permanent: false,
      destination: "/" + getRandomInt(1, 600) + `?image=${ctx?.query?.image}`,
    },
    props: {},
  };
}

export default function Redirect() {
  return <></>
}