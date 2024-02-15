export async function getData() {
  try {
    const res = await fetch(
      `https://one-api.ir/digikala/?token=633252:6567241d35409&action=home`,
      {
        method: 'GET',
        cache: 'no-store',
      },
    );
    const body = await res.json();
    return body;
  } catch (error) {
    console.error(`err ${process.env.NEXT_PUBLIC_LANDING_API}`, error);
  }
}
