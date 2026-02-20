import { ArrowLeft, User } from 'lucide-react';

interface HeaderProps {
  title: string;
  onBack?: () => void;
  userName?: string;
  userRole?: string;
}

export default function Header({ title, onBack, userName, userRole }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
        </div>
        {userName && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <User className="w-4 h-4" />
            <span>{userName}</span>
            {userRole && <span className="text-gray-400">({userRole})</span>}
          </div>
        )}
      </div>
    </header>
  );
}
