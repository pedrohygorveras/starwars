const VITE_API_URL = import.meta.env.VITE_API_URL;

export const getData = async () => {
  try {
    const response = await fetch(VITE_API_URL, { method: "GET" });

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    return {
      error: true,
    };
  } catch (error) {
    return error;
  }
};
