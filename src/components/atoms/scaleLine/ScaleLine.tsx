export const ScaleLine = ({ scale }: { scale: number }) => {
  return (
    <div className="relative h-4 w-full bg-primary-100 rounded">
      <div
        className="absolute top-0 left-0 h-full bg-primary-500 rounded"
        style={{ width: `${scale}%` }}
      />
    </div>
  );
};
