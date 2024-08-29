import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export type ImageProps = {
  src: string | StaticImport;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

type SectionHeaderProps = {
  image?: ImageProps;
  title: string;
  subtitle: string;
  className?: string;
};

const SectionHeader = ({
  image,
  title,
  subtitle,
  className,
}: SectionHeaderProps) => {
  return (
    <div className={cn(className)}>
      {image && (
        <div className="flex flex-col items-center justify-center md:flex-row">
          <Image {...image} />
        </div>
      )}

      <div className="flex-col gap-3 px-12 md:mb-16 order-last text-center">
        <h3 className="text-blue-300 leading-tight md:leading-none text-2xl font-header uppercase">
          {subtitle}
        </h3>
        <h2 className="text-5xl leading-tight md:leading-none md:text-6xl font-header font-semibold">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SectionHeader;

