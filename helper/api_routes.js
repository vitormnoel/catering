

export async function getAllData() {
  const filePath = path.join(process.cwd(), "data", "dummy_data.json");
  const jsonData = await fs.readFile(filePath);

  const data = JSON.parse(jsonData);

  return data;
}
