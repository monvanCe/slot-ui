import { Icon } from '@iconify/react';

export default function IconButton({
  icon,
  onPress,
  color = 'white',
  disabled = false,
}: IIconButton) {
  return (
    <div
      className={`w-full h-full ${
        onPress && !disabled ? 'cursor-pointer' : ''
      } ${disabled ? 'opacity-50' : ''}`}
      onClick={disabled ? undefined : onPress}
    >
      <Icon icon={icon} className={`text-${color} w-full h-full`} />
    </div>
  );
}
