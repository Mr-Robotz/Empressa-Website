import Image from "next/image";
import HeaderImage from "@/public/assets/HeaderImage.png";
function Header() {
  return (
    <header className="lg:container sm:mx-auto md:mx-3 lg:mx-auto bg-gradient-to-br from-[#67457C] to-[#59A3F9] px-3 md:px-3 lg:px-0 py-10 rounded-3xl md:rounded-br-[100px] ">
      <div className="md:flex md:justify-center">
        <div className="text-center md:text-left md:w-[60%] ">
          <h1 className="text-5xl md:text-4xl  font-bold text-white lg:text-7xl">
            Empresa dedicada al transporte de carga pesada
          </h1>
          <p className="text-xl my-5 text-[#A5F887] font-medium md:pr-10 lg:pr-40">
            Somos una empresa familiar dedicada al rubro de transporte de carga
            pesa, carga concentrada y minerales
          </p>
          <div className="space-x-5">
            <button className="bg-[#59A3F9] rounded md:bg-[#59A3F9} py-3 px-6 shadow-md">
              Contactanos
            </button>
            <button className="bg-[#59A3F9] rounded md:bg-[#59A3F9} py-3 px-6 shadow-md">
              Cotizaciones
            </button>
          </div>
        </div>
        <div className="hidden md:block p-10">
          <Image src={HeaderImage} className="md:w-72"></Image>
        </div>
      </div>
    </header>
  );
}
export default Header;
