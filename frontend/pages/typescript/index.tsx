import Layout from "@components/Layout";
import TypeScript from "@components/typescript/index";

function TypeScriptPage({ questions }: any) {
  return (
    <Layout>
      <TypeScript questions={questions} />
    </Layout>
  );
}

export default TypeScriptPage;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:5000/typescript");
  const questions = await response.json();
  return {
    props: {
      questions,
    },
  };
}
