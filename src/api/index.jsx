import axios from 'axios';

export const getDestinationCoordinates = async (destination, distance) => {
  const url = `https://nominatim.openstreetmap.org/search?q=${destination}&format=json&limit=1`;

  try {
    const response = await axios.get(url);
    const { lat, lon } = response.data[0];

    // Calculate the bounding box
    const tr_latitude = lat + (distance / 111.2);
    const tr_longitude = lon + (distance / (111.2 * Math.cos(lat)));
    const bl_latitude = lat - (distance / 111.2);
    const bl_longitude = lon - (distance / (111.2 * Math.cos(lat)));

    return { tr_latitude, tr_longitude, bl_latitude, bl_longitude };
  } catch (error) {
    console.error(error);
  }
};