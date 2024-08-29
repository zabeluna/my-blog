type SectionHeaderProps = {
    image?: any;
    title: string;
    subtitle: string;
}

const SectionHeader = (props: SectionHeaderProps) => {
    return (
        <div className="flex-col gap-3 px-12 md:mb-16 order-last text-center">
            <h3 className="text-blue-300 leading-tight md:leading-none text-2xl font-header">
                {props.title}
            </h3>
                <h2 className="text-5xl leading-tight md:leading-none md:text-6xl font-header font-semibold uppercase">
                {props.subtitle}
            </h2>
        </div>
    )
}

export default SectionHeader