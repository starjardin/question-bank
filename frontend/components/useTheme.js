import { useTheme } from "next-themes";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button
        className="bg-red-200 py-2 px-4 m-4 rounded-md"
        onClick={() => setTheme("light")}
      >
        Light
      </button>
      <button
        className="bg-red-200 py-2 px-4 m-4 rounded-md"
        onClick={() => setTheme("dark")}
      >
        Dark
      </button>
    </div>
  );
};


export default ThemeChanger
