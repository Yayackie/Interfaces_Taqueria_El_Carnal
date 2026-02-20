import { Plus, Edit, UserX, UserCheck } from 'lucide-react';
import Header from '../Header';

interface UserManagementProps {
  onNavigate: (view: string) => void;
}

export default function UserManagement({ onNavigate }: UserManagementProps) {
  const users = [
    { id: '1', name: 'Juan Pérez', role: 'Mesero', active: true },
    { id: '2', name: 'María López', role: 'Cocina', active: true },
    { id: '3', name: 'Carlos Ruiz', role: 'Mesero', active: true },
    { id: '4', name: 'Ana Torres', role: 'Mesero', active: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        title="Gestión de Usuarios"
        onBack={() => onNavigate('admin-dashboard')}
        userName="Josué Suárez"
        userRole="Administrador"
      />

      <div className="p-4">
        <div className="mb-4">
          <button className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
            <Plus className="w-5 h-5" />
            Agregar Usuario
          </button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Nombre</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Rol</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Estado</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">{user.name}</td>
                  <td className="px-4 py-3">{user.role}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${user.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {user.active ? 'Activo' : 'Inactivo'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded">
                        <Edit className="w-4 h-4" />
                      </button>

                      {user.active ? (
                        <button className="p-2 hover:bg-red-100 rounded text-red-600" title="Deshabilitar">
                          <UserX className="w-4 h-4" />
                        </button>
                      ) : (
                        <button className="p-2 hover:bg-green-100 rounded text-green-600" title="Habilitar">
                          <UserCheck className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
