export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const arrOfPaths = data.map((user) => {
    return {
      params: {
        id: user.id.toString(),
      },
    };
  });
  return {
    paths: arrOfPaths,
    fallback: false,
  };
};

function Details() {
  return <div>Details Page</div>;
}

export default Details;
