import { UseFormRegisterReturn } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export interface InputProps {
  label: string;
  type: string;
  register: UseFormRegisterReturn<string>;
}

const InputProps = ({ label, type, register }: InputProps) => {
  return (
    <div className="space-y-4">
      <Label className="text-[#EEEEF0]">{label}</Label>
      <Input
        type={type}
        className="rounded-[4px] py-6 text-[#EEEEF0] ui-input"
        placeholder={`Digite seu ${label.toLowerCase()}`} // Placeholder dinâmico
        {...register}
      />
    </div>
  );
};

export default InputProps;
