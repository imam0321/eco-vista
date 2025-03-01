import { getLocations } from "./location-util";

export async function GET() {
  const locationsData = getLocations();

  return Response.json(locationsData);
}
