export const PersonalInfo = () => {
  return (
    <>
      <div className="space-y-3 text-sm">
        {/* Email */}
        <div className="flex items-start gap-3">
          <span className="text-blue-400 text-lg shrink-0">✉️</span>
          <div>
            <p className="text-slate-400 text-xs uppercase tracking-wide">
              Email
            </p>
            <p className="text-slate-200 truncate text-xs">
              vk6484412@gmail.com
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-3">
          <span className="text-blue-400 text-lg shrink-0">📍</span>
          <div>
            <p className="text-slate-400 text-xs uppercase tracking-wide">
              Location
            </p>
            <p className="text-slate-200 text-xs">Patna, India</p>
          </div>
        </div>

        {/* Birthday */}
        <div className="flex items-start gap-3">
          <span className="text-blue-400 text-lg shrink-0">🎂</span>
          <div>
            <p className="text-slate-400 text-xs uppercase tracking-wide">
              Birthday
            </p>
            <p className="text-slate-200 text-xs">Dec 31, 1999</p>
          </div>
        </div>
      </div>
    </>
  );
};
