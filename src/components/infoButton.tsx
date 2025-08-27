import { Icon } from '@iconify/react';

export default function InfoButton() {
  return (
    <div className="rounded-full bg-blue p-1 border-2 border-white cursor-pointer">
      <Icon
        icon="material-symbols:info-i-rounded"
        className="text-white w-full h-full"
      />
    </div>
  );
}
