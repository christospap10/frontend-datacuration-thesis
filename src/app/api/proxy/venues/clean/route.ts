// app/api/proxy/venues/clean/route.js

export async function GET() {
  try {
    const response = await fetch(
      `http://localhost:8080/api/datacuration/v1/venues/clean`,
      {
        method: "GET",
      }
    );

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);

    return new Response(
      JSON.stringify({ error: "Error fetching data from backend server" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
