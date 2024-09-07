import axios from "axios";

const fetchData = async () => {
    try {
        const response = await axios.get("https://api.allorigins.win/raw?url=https://cdn.drcode.ai/interview-materials/products.json");
        console.log(response.data); // Log the data for debugging
        return response.data; // Return the data
    } catch (error) {
        console.error('Error fetching data:', error); // Log error
        throw error; // Re-throw the error
    }
};

export { fetchData };
