const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Error fetching users");
  }

  return res.json();
};

export default getUsers;
