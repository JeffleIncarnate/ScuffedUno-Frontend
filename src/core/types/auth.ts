export type Auth = UserAuth | ErrorAuth | null;

export type UserAuth = {
  displayName: string;
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  photo: string;
};

export type ErrorAuth = {
  type: string;
  details: {
    code: number;
    message: string;
  };
};
