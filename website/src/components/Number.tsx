type NumberTitleProps = {
  number: string;
};

export const NumberTitle = ({ number }: NumberTitleProps) => {
  return (
    <span className="inline-block">
      <div className="flex items-center justify-center rounded-4xl bg-blue-700 px-2.5 py-2 font-mono text-base text-white">
        {number}
      </div>
    </span>
  );
};
