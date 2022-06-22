const users = [
    {
      email: "antonio@antonio.com",
      password: "123456",
      username: "aRosales",
    },
    {
      email: "alvaro@alvaro.com",
      password: "123456",
      username: "kNS303",
    },
    {
      email: "santiago@santiago.com",
      password: "123456",
      username: "corocottax",
    },
  ];

  
export const login = ({ email, password }) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user === undefined) throw new Error();
    return user;
  };
  