import { Icon } from '@iconify/react';

export default function IconButton({
  icon,
  onClick,
  color = 'white',
}: IIconButton) {
  return (
    <div
      className={`w-full h-full ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <Icon icon={icon} className={`text-${color} w-full h-full`} />
    </div>
  );
}
