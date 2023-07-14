// import { RouterProps } from "react-router-dom";
import { ICharcardProps } from "./charcard.interface";

function CharCard(props: ICharcardProps) {
  return (
    <a href={"#"}>
      <div className="w-16 h-24 sm:w-24 sm:h-36 xl:w-64 xl:h-96 bg-white flex flex-col-reverse justify-center items-center group rounded-lg">
        <img
          src={props.image}
          alt={props.name}
          className="min-w-full min-h-full object-cover bg-white group-hover:brightness-50 transition duration-150 rounded-lg pointer-events-none"
        />
        <div className="hidden lg:inline-block opacity-0 group-hover:opacity-100 transition duration-150 translate-y-10 group-hover:translate-y-0 md:text-base xl:text-4xl absolute text-white break-words w-[256px]">
          {props.name}
        </div>
      </div>
    </a>
  );
}

export default CharCard;
