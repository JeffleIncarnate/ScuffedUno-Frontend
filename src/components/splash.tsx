import { useForm, SubmitHandler } from "react-hook-form";

interface FormInputs {
  code: string;
}

export const Splash = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>();

  const joinGame: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };

  const createGame = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("CREATE GAME!!");
  };

  return (
    <main className="flex h-lvh w-full flex-col items-center justify-center gap-28">
      <div className="space-y-4 text-center">
        <h1 className="text-6xl font-bold uppercase">
          Scuffed <span className="text-accent">Uno</span>
        </h1>
        <p>Hate the player, not the game</p>
        <p className="font-bold">Powered by 🗿</p>
      </div>

      <div className="flex gap-16">
        <form
          onSubmit={handleSubmit(joinGame)}
          className="flex flex-col items-center gap-1"
        >
          <label className="font-bold">Join Game</label>
          <div className="flex h-10 w-72 gap-2">
            <input
              type="text"
              className="border-accent h-full w-3/4 rounded-lg border-2 border-solid p-4"
              placeholder="Enter Game Code"
              {...register("code", {
                required: "A code is required",
                // minLength: {
                //   value: 1,
                //   message: "This code is too short",
                // },
                // maxLength: {
                //   value: 5,
                //   message: "This code is too long",
                // },
              })}
              aria-invalid={errors.code ? "true" : "false"}
            />
            <button
              type="submit"
              className="bg-accent h-full w-1/4 rounded-lg font-bold"
            >
              Join
            </button>
          </div>
          {errors.code && (
            <p role="alert" className="text-red-600">
              {errors.code.message}
            </p>
          )}
        </form>

        <form
          onSubmit={createGame}
          className="flex flex-col items-center gap-1"
        >
          <label className="font-bold">Create Private Game</label>
          <button type="submit" className="bg-accent h-10 w-72 rounded-lg p-2">
            🤫🧏‍♂️🐺
          </button>
        </form>
      </div>
    </main>
  );
};
