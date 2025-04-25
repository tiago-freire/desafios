export interface ISmallCardInformation {
  title: string;
}

const SmallCardInformation = ({ title }: ISmallCardInformation) => {
  return (
    <>
      <span className="bg-[#8E4EC6]/20 text-white px-2 py-1 rounded font-Montserrat">
        {title}
      </span>
    </>
  );
};

export default SmallCardInformation;
