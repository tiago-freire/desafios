import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

const ErrosProps = ({ message }: { message: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined}) => {
  return (
    <div>
      <p className="text-red-500">{message?.toString()}</p>
    </div>
  );
};

export default ErrosProps;
