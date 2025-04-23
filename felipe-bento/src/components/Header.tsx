import { HeaderProps } from "@/types/types";
import { Sun, Moon, LogoCubos } from "@/components/icons";
import Link from "next/link";

const Header = ({ currentTheme, toggleTheme }: HeaderProps) => {
  return (
    <header className="flex justify-between items-center w-full h-[80px] sticky top-0 bg-[var(--mauve-1)] dark:bg-[var(--mauve-dark-1)] border border-[var(--mauve-alpha-2)] dark:border-[var(--mauve-alpha-6) backdrop-blur-sm px-4 z-10">
      <Link href="/" passHref>
        <div className="flex justify-center items-center gap-4 cursor-pointer">
          <LogoCubos className="w-[160px] h-[36px] text-[var(--purple-dark-1)] dark:text-[var(--purple-1)]" />
          <span className="text-lg font-bold text-[var(--purple-dark-1)] dark:text-[var(--purple-1)]">
            Movies
          </span>
        </div>
      </Link>

      <button
        onClick={toggleTheme}
        className="flex items-center justify-center w-[64px] h-[48px] bg-[var(--purple-alpha-1)] dark:bg-[var(--purple-dark-alpha-1)] backdrop-blur-sm rounded-sm hover:bg-[var(--purple-10)] dark:hover:bg-[var(--purple-dark-10)] active:bg-[var(--purple-8)] dark:active:bg-[var(--purple-dark-8)] transition duration-300"
        aria-label="Alternar tema"
      >
        {currentTheme === "light" ? (
          <Sun className="w-6 h-6" />
        ) : (
          <Moon className="w-6 h-6" />
        )}
      </button>
    </header>
  );
};

export default Header;
