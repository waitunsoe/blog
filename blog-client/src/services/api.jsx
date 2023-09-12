const BASE_URL = "http://127.0.0.1:8000/api/v1";

export async function fetchData(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    throw new Error("API request failed: " + error.message);
  }
}

export async function fetchDataBySlug(endpoint) {
  return fetchData(`${endpoint}`);
}

export async function createData(endpoint, postData) {
  try {
    console.log("post data", JSON.stringify(postData));
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    
    // Log the response status and response text
    console.log("Response Status:", response.status);
    console.log("Response Text:", await response.text());
console.log(response)
    if (!response.ok) {
      throw new Error("Failed to create ");
    }

    return await response.json();
  } catch (error) {
    throw new Error("API request failed: " + error.message);
  }
}

export async function updateData(endpoint, updateData) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });

    if (!response.ok) {
      throw new Error("Failed to update ");
    }

    return await response.json();
  } catch (error) {
    throw new Error("API request failed: " + error.message);
  }
}

export async function deleteData(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete ");
    }

    // You may not need to return anything for a successful deletion
    return true;
  } catch (error) {
    throw new Error("API request failed: " + error.message);
  }
}
