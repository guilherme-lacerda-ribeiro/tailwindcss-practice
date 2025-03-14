import "./CardSimple.css";

const CardSimple = () => {
  return (
    <div className="p-10 m-auto my-10
      text-qualquer font-inter
      bg-gradient-to-r from-pink-400 to-slate-400 w-[200px] h-[50px]
      flex flex-col justify-center items-start
      ">
      <p className="text-6xl font-black">Gabriela</p>
      <p className="text-4xl">Desenvolvedora Front-end</p>
    </div>
  );
};

export default CardSimple;
