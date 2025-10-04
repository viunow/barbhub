export async function getAllBarbershops() {
  try {
    const request = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/barbershops`
    );
    const json = await request.json();
    return json;
  } catch (error) {
    console.log(error);
    return [];
  }
}
