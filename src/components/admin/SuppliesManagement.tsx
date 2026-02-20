import { Plus, Check, X } from 'lucide-react';
import Header from '../Header';

interface SuppliesManagementProps {
  onNavigate: (view: string) => void;
}

export default function SuppliesManagement({ onNavigate }: SuppliesManagementProps) {
  const supplies = [
    { id: '1', name: 'Carne de res (kg)', status: 'needed', dateAdded: '10/Feb' },
    { id: '2', name: 'Tortillas', status: 'needed', dateAdded: '10/Feb' },
    { id: '3', name: 'Cebolla (kg)', status: 'needed', dateAdded: '09/Feb' },
    { id: '4', name: 'Cilantro', status: 'needed', dateAdded: '09/Feb' },
    { id: '5', name: 'Limones', status: 'needed', dateAdded: '08/Feb' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        title="Planificación de Compras"
        onBack={() => onNavigate('admin-dashboard')}
        userName="Josué Suárez"
        userRole="Administrador"
      />

      <div className="p-4 space-y-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Agregar Insumo Faltante
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Ej: Carne de pastor (kg)"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
            />
            <button className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Agregar
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Insumos Pendientes ({supplies.length})
            </h3>
          </div>

          <div className="divide-y divide-gray-200">
            {supplies.map((supply) => (
              <div
                key={supply.id}
                className="p-4 hover:bg-gray-50 flex items-center justify-between"
              >
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{supply.name}</p>
                  <p className="text-sm text-gray-600">
                    Agregado: {supply.dateAdded}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors">
                    <Check className="w-5 h-5" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors">
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {supplies.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <p className="text-gray-500">No hay insumos pendientes</p>
          </div>
        )}

        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-sm text-gray-600 text-center">
            Marca como comprado cuando hayas surtido el insumo
          </p>
        </div>
      </div>
    </div>
  );
}
