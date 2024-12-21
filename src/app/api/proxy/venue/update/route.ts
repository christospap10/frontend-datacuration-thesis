// app/api/proxy/venue/update/route.js

export async function PUT(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  try {
    const response = await fetch(
      `http://localhost:8080/api/datacuration/v1/venue/update?id=${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // Include any other headers you need
        },
        body: request.body,
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
