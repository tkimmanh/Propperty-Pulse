const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN;

async function fetchProperty() {
  try {
    const res = await fetch(`${API_DOMAIN}/properties`);
    if (!res.ok) {
      throw new Error("Failed to fetch properties");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
}

async function fetchPropertyById(id) {
  try {
    const res = await fetch(`${API_DOMAIN}/properties/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch property");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching property:", error);
    return null;
  }
}

export { fetchProperty, fetchPropertyById };
