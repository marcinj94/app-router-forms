import { z } from "zod";
import { RegistrationForm } from "./RegistrationForm";
import { schema } from "./registrationSchema";

export default function Home() {
  return (
    <div className="mx-auto max-w-xl">
      <RegistrationForm />
    </div>
  );
}
