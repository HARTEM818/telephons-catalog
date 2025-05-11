export async function getTechInfo() {
  try {
    const apiKey = "https://api.techspecs.io/v5";
    const url = "https://api.techspecs.io/v5/products/search";

    const headers = {
      Authorization: `Bearer ${apiKey}`,
    };

    const data = await axios.get(url, { headers: headers });
    console.log(data);
  } catch (error) {
    console.error("упс.. щось пішло не так")
  }
}
