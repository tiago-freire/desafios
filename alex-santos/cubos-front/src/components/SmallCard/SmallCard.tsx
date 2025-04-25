export interface ISmallCard {
  title: string;
  information: string | number | undefined;
}

const SmallCard = ({ title, information }: ISmallCard) => {
  return (
    <>
      <div>
        <div className="bg-[#121113]/80 p-5  rounded-none border-none">
          <span className="text-[#B5B2BC] font-Montserrat font-bold">
            {title}
          </span>
          <p className="text-white font-bold">{information}</p>
        </div>
      </div>
    </>
  );
};

export default SmallCard;
