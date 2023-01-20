import Link from "next/link";

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: { users: data },
  };
}

function Users({ users }) {
  return (
    <div>
      <div>Users</div>
      {users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <div>
            <h3>{user.name}</h3>
            <p>{user.username}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Users;
