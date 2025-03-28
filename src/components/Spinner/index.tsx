import React from 'react';

interface SpinnerProps {
  show?: boolean;
  size?: 'sm' | 'md' | 'lg';
  contrast?: 'light' | 'dark';
}

export const Spinner: React.FC<SpinnerProps> = ({
  show = true,
  size = 'md',
  contrast = 'dark',
}) => {
  if (!show) return <></>;

  const sizeClasses = React.useMemo(() => {
    switch (size) {
      case 'sm':
        return 'h-4 w-4';
      case 'md':
        return 'h-8 w-8';
      case 'lg':
        return 'h-12 w-12';
      default:
        return 'h-8 w-8';
    }
  }, [size]);
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className={`animate-spin rounded-full border-t-2 border-b-2 ${contrast === 'light' ? 'border-white' : 'border-blue-700'} ${sizeClasses}`}
      ></div>
    </div>
  );
};
