import Image from "next/image";


const Header: React.FC = () => {

  const headerImgUrl: string = "/url3pokes.png";

  return (
    <>
      <Image src={headerImgUrl} alt="header" width={200} height={70}/>
    </>
  );
};

export default Header;
