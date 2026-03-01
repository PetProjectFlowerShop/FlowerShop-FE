export type IconName =
  | 'cancel'
  | 'arrow'
  | 'active-no'
  | 'active-yes'
  | 'add'
  | 'apple'
  | 'arrow-drop-down'
  | 'arrow-drop-up'
  | 'arrow-left'
  | 'arrow-right'
  | 'calendar'
  | 'card'
  | 'chevron-down'
  | 'chevron-up'
  | 'facebook'
  | 'file-upload'
  | 'google'
  | 'instagram'
  | 'minus'
  | 'money'
  | 'navigate-before'
  | 'navigate-next'
  | 'search'
  | 'star-half'
  | 'star-outline'
  | 'star'
  | 'telegram'
  | 'checkbox'
  | 'checkbox-outline'
  | 'radiobutton-outlined'
  | 'radiobutton'
  | 'person'
  | 'shopping-cart'
  | 'time-watch'
  | 'menu'
  | 'mail'
  | 'call'
  | 'location'
  | 'edit'
  | 'close'
  | 'visibility'
  | 'visibility-off'
  | 'vector'
  | 'yes';

type IconProps = {
  name: IconName;
} & React.SVGProps<SVGSVGElement>;

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg {...props}>
      <use href={`/icons.svg#${name}`} />
    </svg>
  );
}
