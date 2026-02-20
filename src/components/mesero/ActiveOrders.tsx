import { Receipt, CheckCircle } from 'lucide-react';
import Header from '../Header';

interface ActiveOrdersProps {
  onNavigate: (view: string) => void;
}

export default function ActiveOrders({ onNavigate }: ActiveOrdersProps) {
  const orders = [
    {
      id: '001',
      table: '3',
      items: [
        { name: 'Taco de Asada', quantity: 3, price: 15 },
        { name: 'Refresco', quantity: 2, price: 15 },
      ],
      total: 75,
      status: 'pending',
    },
    {
      id: '002',
      table: '7',
      items: [
        { name: 'Torta de Pastor', quantity: 1, price: 45 },
        { name: 'Agua', quantity: 1, price: 10 },
      ],
      total: 55,
      status: 'pending',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        title="Órdenes Activas"
        onBack={() => onNavigate('mesero-menu')}
        userName="Juan Pérez"
        userRole="Mesero"
      />

      <div className="p-4 space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Mesa {order.table}</h3>
                <p className="text-sm text-gray-600">Orden #{order.id}</p>
              </div>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                Pendiente
              </span>
            </div>

            <div className="border-t border-gray-200 pt-3 space-y-2">
              {order.items.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-gray-700">
                    {item.quantity}x {item.name}
                  </span>
                  <span className="text-gray-900 font-medium">
                    ${item.quantity * item.price}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 mt-3 pt-3">
              <div className="flex justify-between text-lg font-semibold mb-3">
                <span>Total:</span>
                <span>${order.total}</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Receipt className="w-4 h-4" />
                  Generar Ticket
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                  <CheckCircle className="w-4 h-4" />
                  Marcar Pagado
                </button>
              </div>
            </div>
          </div>
        ))}

        {orders.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No hay órdenes activas</p>
          </div>
        )}
      </div>
    </div>
  );
}
