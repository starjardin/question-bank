import Layout from "@components/Layout";
import Javascript from "@components/javascript";

function JavaScriptPage({ questions }: any) {
  return (
    <Layout>
      <Javascript questions={questions} />
    </Layout>
  );
}

export default JavaScriptPage;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:5000/javascript");
  const questions = await response.json();
  return {
    props: {
      questions,
    },
  };
}
