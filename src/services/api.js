async function tableData() {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const data = response.json();
  return data;
}

export default tableData;
