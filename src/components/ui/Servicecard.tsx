import Image from "next/image";

type ServicecardProps = {
  imageSrc: string;
  title: string;
  description: string;
};

export function Servicecard({ imageSrc, title, description }: ServicecardProps) {
  return (
    <div className="border border-[#998259] bg-white p-6 rounded-lg w-full">
      <div className="lg:flex flex-row gap-8.5 items-center sm:flex flex-col">
        <Image src={imageSrc} alt="image" width={66} height={66} />
        <div className="flex flex-col gap-2.5">
          <h2 className="font-bold">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
