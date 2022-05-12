import React, { useState } from "react";
import { useRouter } from "next/router";
import ErrorAlert from "@components/alerts/ErrorAlert";
import SuccessAlert from "@components/alerts/SuccessAlert";
import Spinner from "@components/spinner/Spinner";
import QuestionForm from "./QuestionForm";
import Breadcrumbs from "@components/Breadcrumbs";

const pages = [
  { name: "TypeScript", href: "/typescript", current: false },
  { name: "Add", href: "#", current: true },
];

const checkRequired = (input: any): void => {
  if (!input.response) {
    throw new Error("response is required");
  }
  if (!input.question) {
    throw new Error("question is required");
  }
};

const CreateQuestion = () => {
  const [error, setError] = useState<Error | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();

  const router = useRouter();
  
  const handleSubmit = (input: any) => {
    setMessage("");
    setError(null);

    // Checks requied fields that form cant check.
    try {
      checkRequired(input);
    } catch (e) {
      setError(e as Error);
      return;
    }

    setLoading(true);
  };

  return (
    <div>
      <Breadcrumbs pages={pages} />

      <div className="mb-3">
        {error && <ErrorAlert message={error.message} />}
        {message && <SuccessAlert message={message} />}
      </div>

      {loading ? <Spinner /> : <QuestionForm onSubmit={handleSubmit} />}
    </div>
  );
};

export default CreateQuestion;
