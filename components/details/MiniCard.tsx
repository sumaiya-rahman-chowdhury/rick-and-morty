interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  className?: string;
  extraIcon?: React.ReactNode;
}

export default function InfoCard({
  icon,
  label,
  value,
  className = "",
  extraIcon,
}: InfoCardProps) {
  return (
    <div
      className={`flex justify-between items-end my-5 border rounded-md p-4 text-white shadow-md bg-[#7575d11a] 
        border-cyan-500 hover:border-green-400 transition-all duration-300 ${className}`}
    >
      <div>
        <div className="flex items-center gap-2 text-green-400 mb-1">
          {icon}
        </div>
        <span className="text-sm text-gray-300">{label}</span>
        <div className="text-lg  text-white">{value}</div>
      </div>
      {extraIcon && <div className="text-green-400 mt-2">{extraIcon}</div>}
    </div>
  );
}
