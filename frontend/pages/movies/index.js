import clientPromise from "../../lib/mongodb.js";
import Layout from "@components/Layout";

export default function MoviesPages({ movies }) {
  return (
    <Layout>
      <Movies movies={ movies }/>
    </Layout>
  );
}

export async function getServerSideProps() {
  const client = await clientPromise;
  const database = client.db("sample_mflix");
  const movies = await database
    .collection("movies")
    .find({})
    .sort({ metacritic: -1 })
    .limit(4)
    .toArray();

  return {
    props: {
      movies: JSON.parse(JSON.stringify(movies)),
    },
  };
}

// =================================================
// import Link from "next/link";
import Movies from '../../components/movies/moives';

// export default function Movies({ movies }) {
//   return (
//     <div>
//       <h1>Top 20 Movies of All Time</h1>
//       <p>
//         <small>(According to Metacritic)</small>
//       </p>
//       <ul>
//         {movies.map((movie, idx) => (
//          <li key={idx}>
//           <h2>Title: {movie.title}</h2>
//           <h3>Metacritic: {movie.metacritic}</h3>
//           <p>Plot: {movie.plot}</p>
//         </li>
//          ))}
//       </ul>
//       <button className="bg-blue-400 p-4 rounded">
//         <Link href={"/movies/add"}>Add movies</Link>
//       </button>
//     </div>
//   );
// }

// export async function getServerSideProps() {
//   const res = await fetch("http://localhost:5000/movies");
//   const movies = await res.json();

//   return {
//     props: {
//       movies: JSON.parse(JSON.stringify(movies)),
//     },
//   };
// }
