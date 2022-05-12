import Layout from "@components/Layout";
import AddMovies from "@components/movies/add";

export default function AddMoviesPage(props: any) {
  console.log("I am the name", props)
  return (
    <Layout>
      <AddMovies />
    </Layout>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      name: "I am the name"
    }
  }
}
