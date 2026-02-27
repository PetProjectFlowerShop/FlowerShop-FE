type IconProps = {
  name: string;
} & React.SVGProps<SVGSVGElement>;

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg {...props}>
      <use href={`/icons.svg#${name}`} />
    </svg>
  );
}
