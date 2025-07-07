export const signout = async () => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/auth/actions/signout`,
      {
        credentials: "include",
      },
    );
    return await res.json();
  } catch (err) {
    return err;
  }
};
