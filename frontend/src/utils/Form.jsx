const Form = ({ username, setUsername, password, setPassword, label, onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col items-center gap-5">
        <div className="text-3xl font-semibold">{label}</div>
        <div className="flex gap-3">
          <label htmlFor="username" className="text-lg">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className=" outline-none px-2 rounded"
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="password" className="text-lg">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" outline-none px-2 rounded"
          />
        </div>
        <button type="submit" className="border-2 border-black px-8 bg-gray-500 text-white py-1 rounded-md">{label}</button>
      </form>
    </>
  );
};

export default Form;
