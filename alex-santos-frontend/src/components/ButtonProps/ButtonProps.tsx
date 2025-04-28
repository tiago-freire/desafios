import { Button } from "../ui/button";

interface ButtonProps {
  children: React.ReactNode;
  color?: string;
}

const ButtonProps = ({ children, color }: ButtonProps) => {
  return (
    <>
      <Button
        type="submit"
        variant="ghost"
        className={`w-full  bg-[${color}] font-Montserrat text-white rounded-none cursor-pointer`}
      >
        {children}
      </Button>
    </>
  );
};

export default ButtonProps;
