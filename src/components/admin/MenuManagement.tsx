
import { Plus, Edit, Trash2 } from 'lucide-react';
import Header from '../Header';

interface MenuManagementProps {
  onNavigate: (view: string) => void;
}

export default function MenuManagement({ onNavigate }: MenuManagementProps) {
  const products = [
    { id: '1', name: 'Taco de Asada', category: 'Tacos', price: 15 },
    { id: '2', name: 'Taco de Pastor', category: 'Tacos', price: 15 },
    { id: '3', name: 'Taco de Pollo', category: 'Tacos', price: 13 },
    // { id: '4', name: 'Torta de Asada', category: 'Tortas', price: 45 },
    // { id: '5', name: 'Torta de Pastor', category: 'Tortas', price: 45 },

    { id: '6', name: 'Refresco', category: 'Bebidas', price: 15 },
    { id: '7', name: 'Agua', category: 'Bebidas', price: 10 },
    { id: '8', name: 'Orden de Queso', category: 'Extras', price: 20 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        title="Gestión de Menú"
        onBack={() => onNavigate('admin-dashboard')}
        userName="Josué Suárez"
        userRole="Administrador"
      />

      <div className="p-4">
        <div className="mb-4">
          <button className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
            <Plus className="w-5 h-5" />
            Agregar Producto
          </button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                    Producto
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                    Categoría
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                    Precio
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {product.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {product.category}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                      ${product.price}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded">
                          <Edit className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded">
                          <Trash2 className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
