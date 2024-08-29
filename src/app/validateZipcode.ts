"use server";

export async function validateZipcode(zipcode: string): Promise<boolean> {
  console.log("zipcode:", zipcode);
  return /^\d{5}$/.test(zipcode) && zipcode.startsWith("9");
}
