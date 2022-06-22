const users = [
    {
      email: "nedstark@got.com",
      password: "123456",
      username: "Nstark",
    },
    {
      email: "knight@got.com",
      password: "123456",
      username: "knight",
    },
    {
      email: "user@got.com",
      password: "123456",
      username: "user",
    },
  ];

  
export const login = ({ email, password }) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user === undefined) throw new Error();
    return user;
  };
  