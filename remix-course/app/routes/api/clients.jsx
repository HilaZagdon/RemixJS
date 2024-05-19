import { json } from "@remix-run/node";
import Client from "~/models/Client";
import { connectToDatabase } from "../../utils/db.server";

export const action = async ({ request }) => {
  await connectToDatabase();

  if (request.method === "POST") {
    const data = await request.json();
    const newClient = new Client(data);
    await newClient.save();
    return json({ message: "Client created successfully", client: newClient });
  }

  return json({ error: "Invalid request method" }, { status: 405 });
};

export const loader = async () => {
  await connectToDatabase();
  const clients = await Client.find();
  return json({ clients });
};
