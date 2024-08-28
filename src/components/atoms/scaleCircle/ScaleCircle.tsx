export const ScaleCircles = ({ scale }: { scale: number }) => {
  const totalCircles = 5;
  const filledCircles = Math.min(Math.max(scale, 0), totalCircles);
  const emptyCircles = totalCircles - filledCircles;

  return (
    <div className="flex justify-between">
      {Array.from({ length: filledCircles }).map((_, index) => (
        <div
          key={`filled-${index}`}
          className="h-7 w-7 bg-primary-500 rounded-full"
        />
      ))}
      {Array.from({ length: emptyCircles }).map((_, index) => (
        <div
          key={`empty-${index}`}
          className="h-7 w-7 bg-primary-100 rounded-full"
        />
      ))}
    </div>
  );
};
