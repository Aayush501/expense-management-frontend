const getData = async() => {
    const data = await fetch('/data/Users.json');
    const jsonData = (await data.json()).at(0);
    return jsonData;
}

const fetchedData = await getData();
 
export default fetchedData;