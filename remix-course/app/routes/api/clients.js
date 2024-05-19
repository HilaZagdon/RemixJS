
import { json } from "@remix-run/node";
import mongoose from "mongoose";
import Client from "../../models/Client";

export async function handler() {
  const clients = await Client.find();
  return json({ clients });
}

export async function createHandler({ request }) {
  const data = await request.json();
  const newClient = new Client(data);
  await newClient.save();
  return json({ message: "Client created successfully", client: newClient });
}

export async function updateHandler({ params, request }) {
  const { id } = params;
  const data = await request.json();
  const updatedClient = await Client.findByIdAndUpdate(id, data, {
    new: true,
  });
  return json({ message: "Client updated successfully", client: updatedClient });
}

export async function deleteHandler({ params }) {
  const { id } = params;
  await Client.findByIdAndDelete(id);
  return json({ message: "Client deleted successfully" });
}
