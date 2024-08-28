type Props = { children: any }
const RollingElements = ({ children }: Props) => {
  return (
    <div className="overflow-hidden h-64">
      <div className="rolling-element-vertical">
        {children}
        {/* Add more elements as needed */}
      </div>
    </div>
  );
};

export default RollingElements;