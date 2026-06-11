import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import "dotenv/config";

// -------------------------------
// CONFIG
// -------------------------------
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
const FILE_PATH = path.join(process.cwd(), "export.geojson");

// Store type normalization
const TYPE_MAP = {
  supermarket: "supermarket",
  greengrocer: "greengrocer",
  marketplace: "marketplace",
  asian: "ethnic_market",
  ethnic: "ethnic_market",
  butcher: "specialty",
  cheese: "specialty",
  wholesale: "wholesale",
};

// -------------------------------
// HELPER: Compute centroid for ANY geometry
// -------------------------------
function computeCentroid(geometry) {
  const { type, coordinates } = geometry;

  // POINT: [lng, lat]
  if (type === "Point") {
    return { lat: coordinates[1], lng: coordinates[0] };
  }

  // POLYGON: [ [ [lng, lat], ... ] ]
  if (type === "Polygon") {
    const ring = coordinates[0];
    let totalX = 0, totalY = 0;

    ring.forEach(([lng, lat]) => {
      totalX += lng;
      totalY += lat;
    });

    return {
      lat: totalY / ring.length,
      lng: totalX / ring.length,
    };
  }

  // MULTIPOLYGON: [ [ [ [lng, lat], ... ] ] ]
  if (type === "MultiPolygon") {
    const ring = coordinates[0][0];
    let totalX = 0, totalY = 0;

    ring.forEach(([lng, lat]) => {
      totalX += lng;
      totalY += lat;
    });

    return {
      lat: totalY / ring.length,
      lng: totalX / ring.length,
    };
  }

  console.warn("Unknown geometry type:", type);
  return { lat: null, lng: null };
}

// -------------------------------
// HELPER: Normalize store type
// -------------------------------
function normalizeType(props) {
  if (props.shop && TYPE_MAP[props.shop]) return TYPE_MAP[props.shop];
  if (props.amenity && TYPE_MAP[props.amenity]) return TYPE_MAP[props.amenity];
  if (props.origin && TYPE_MAP[props.origin]) return TYPE_MAP[props.origin];

  return "supermarket"; // fallback
}

// -------------------------------
// MAIN IMPORT FUNCTION
// -------------------------------
async function importStores() {
  console.log("Loading OSM file:", FILE_PATH);

  const raw = fs.readFileSync(FILE_PATH, "utf8");
  const geo = JSON.parse(raw);

  const features = geo.features;
  console.log(`Found ${features.length} features`);

  for (const feature of features) {
    const props = feature.properties;
    const geom = feature.geometry;

    if (!props.name) continue;

    // Compute centroid safely
    const centroid = computeCentroid(geom);

    // Build address
    const address = [
      props["addr:housenumber"],
      props["addr:street"]
    ].filter(Boolean).join(" ");

    // Normalize store type
    const type = normalizeType(props);

    // Build hours JSON
    const hours = props.opening_hours
      ? { opening_hours: props.opening_hours }
      : null;

    // Build payload
    const payload = {
      name: props.name,
      email: null,
      address,
      neighborhood: null,
      type,
      tags: props.brand || null,
      hours,
      lat: centroid.lat,
      lng: centroid.lng,
    };

    console.log("Inserting:", payload.name);

    // Insert into Supabase
    await fetch(`${SUPABASE_URL}/rest/v1/stores`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_SERVICE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify(payload),
    });
  }

  console.log("Import complete.");
}

importStores();
