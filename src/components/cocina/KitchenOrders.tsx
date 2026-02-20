import { Clock } from 'lucide-react';
import Header from '../Header';

interface KitchenOrdersProps {
  onNavigate: (view: string) => void;
  onExit: () => void;
}

export default function KitchenOrders({ onExit }: KitchenOrdersProps){
  const orders = [
    {
      id: '001',
      table: '3',
      items: [
        { name: 'Taco de Asada', quantity: 3, notes: 'Sin cebolla' },
        { name: 'Refresco', quantity: 2, notes: '' },
      ],
      time: '10:15',
    },
    {
      id: '002',
      table: '7',
      items: [
        { name: 'Taco de Pastor', quantity: 1, notes: 'Bien dorada' },
        { name: 'Agua', quantity: 1, notes: '' },
      ],
      time: '10:18',
    },
    {
      id: '003',
      table: '5',
      items: [
        { name: 'Taco de Longaniza', quantity: 4, notes: '' },
        { name: 'Orden de Queso', quantity: 1, notes: '' },
      ],
      time: '10:20',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        title="Monitor de Cocina"
        userName="María López"
        userRole="Cocina"
      />

      {/* BOTÓN SALIR */}
      <div className="p-4 flex justify-end">
        <button
          onClick={onExit}
          className="text-red-600 hover:text-red-700 font-medium"
        >
          Salir
        </button>
      </div>

      <div className="p-4">

        <div className="mb-4 bg-white border border-gray-200 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Pedidos pendientes:</span>
            <span className="text-2xl font-bold text-gray-900">{orders.length}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-lg border-2 border-gray-300 p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Mesa {order.table}</h3>
                  <p className="text-sm text-gray-600">Orden #{order.id}</p>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  {order.time}
                </div>
              </div>

              <div className="border-t-2 border-gray-200 pt-3 space-y-3">
                {order.items.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-gray-900">
                        {item.quantity}
                      </span>
                      <span className="text-lg font-medium text-gray-900">
                        {item.name}
                      </span>
                    </div>
                    {item.notes && (
                      <p className="text-sm text-gray-600 ml-8 italic">
                        Nota: {item.notes}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {orders.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <p className="text-gray-500">No hay pedidos pendientes</p>
          </div>
        )}
      </div>
    </div>
    
  );
}
