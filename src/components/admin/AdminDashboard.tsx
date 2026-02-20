import { Menu, BarChart3, DollarSign, Users, LogOut } from 'lucide-react';
import Header from '../Header';

interface AdminDashboardProps {
  onNavigate: (view: string) => void;
  onExit: () => void;
}

export default function AdminDashboard({ onNavigate, onExit }: AdminDashboardProps) {
  const menuOptions = [
    {
      id: 'admin-menu',
      title: 'Gestión de Menú',
      description: 'Productos, precios y categorías',
      icon: Menu,
    },
    {
      id: 'admin-reports',
      title: 'Reportes de Ventas',
      description: 'Estadísticas y análisis',
      icon: BarChart3,
    },
    {
      id: 'admin-close-cash',
      title: 'Cierre de Caja',
      description: 'Corte diario y arqueo',
      icon: DollarSign,
    },
    {
      id: 'admin-users',
      title: 'Gestión de Usuarios',
      description: 'Personal y permisos',
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        title="Panel de Administración"
        userName="Josué Suárez"
        userRole="Administrador"
      />

      <div className="p-6">

        <div className="mb-6 flex justify-end">
          <button
            onClick={onExit}
            className="flex items-center gap-2 text-red-600 hover:text-red-700"
          >
            <LogOut className="w-4 h-4" />
            Salir
          </button>
        </div>

        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-sm text-gray-600 mb-1">Ventas Hoy</p>
            <p className="text-2xl font-bold text-gray-900">$1,245.00</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-sm text-gray-600 mb-1">Órdenes del Día</p>
            <p className="text-2xl font-bold text-gray-900">28</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {menuOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onNavigate(option.id)}
              className="bg-white border-2 border-gray-300 rounded-lg p-6 hover:border-gray-400 transition-colors text-left"
            >
              <option.icon className="w-12 h-12 text-gray-700 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {option.title}
              </h3>
              <p className="text-sm text-gray-600">{option.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
