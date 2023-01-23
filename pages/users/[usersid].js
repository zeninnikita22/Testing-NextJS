export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const arrOfPaths = data.map((user) => {
    return {
      params: { usersid: user.id.toString() },
    };
  });
  return {
    paths: arrOfPaths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.usersid;
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  const dataOfId = await response.json();

  return {
    props: { user: dataOfId },
  };
};

function Details({ user }) {
  return <div>{user.email}</div>;
}

export default Details;
