"use server";

import { schema } from "./registrationSchema";

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export async function onSubmitAction(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  console.log("prevState:", prevState);
  const formData = Object.fromEntries(data);
  const parsed = schema.safeParse(formData);

  console.log("parsed:", parsed);

  if (!parsed.success) {
    console.log("parsed:", parsed);
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }

    return {
      message: "Invalid form data",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
      //   user: parsed.data,
    };
  }

  if (parsed.data.email.includes("a")) {
    console.log("parsed.error:", parsed.error);
    return {
      message: "Invalid email",
      fields: parsed.data,
      //   issues: parsed?.error.issues.map((issue) => issue.message),
    };
  }

  return { message: "User registered" };
}
