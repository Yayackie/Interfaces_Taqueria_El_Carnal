import { ChefHat, User, Shield } from 'lucide-react';

interface RoleSelectProps {
  onSelectRole: (role: string) => void;
}

export default function RoleSelect({ onSelectRole }: RoleSelectProps) {
  const roles = [
    {
      id: 'mesero',
      title: 'Mesero',
      description: 'Tomar pedidos y gestionar mesas',
      icon: User,
      view: 'mesero-menu',
    },
    {
      id: 'cocina',
      title: 'Cocina',
      description: 'Monitor de pedidos en tiempo real',
      icon: ChefHat,
      view: 'cocina-orders',
    },
    {
      id: 'admin',
      title: 'Administrador',
      description: 'Gestión completa del sistema',
      icon: Shield,
      view: 'admin-dashboard',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Taquería El Carnal
          </h1>
          <p className="text-gray-600">Sistema POS Móvil - Taquería Digital</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => onSelectRole(role.view)}
              className="bg-white border-2 border-gray-300 rounded-lg p-8 hover:border-gray-900 transition-colors"
            >
              <div className="flex flex-col items-center gap-4">
                <role.icon className="w-20 h-20 text-gray-700" />
                <h2 className="text-xl font-semibold text-gray-900">
                  {role.title}
                </h2>
                <p className="text-sm text-gray-600 text-center">
                  {role.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Seleccione su rol para acceder al sistema</p>
        </div>
      </div>
    </div>
  );
}
