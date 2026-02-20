import { ShoppingCart, ClipboardList, LogOut } from 'lucide-react';
import Header from '../Header';

interface MeseroMenuProps {
  onNavigate: (view: string) => void;
  onExit: () => void;
}

export default function MeseroMenu({ onNavigate, onExit }: MeseroMenuProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Menú Principal" userName="Juan Pérez" userRole="Mesero" />

      <div className="p-6 max-w-2xl mx-auto">

        <div className="mb-6 flex justify-end">
          <button
            onClick={onExit}
            className="flex items-center gap-2 text-red-600 hover:text-red-700"
          >
            <LogOut className="w-4 h-4" />
            Salir
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate('mesero-take-order')}
            className="bg-white border-2 border-gray-300 rounded-lg p-8 hover:border-gray-400 transition-colors"
          >
            <div className="flex flex-col items-center gap-4">
              <ShoppingCart className="w-16 h-16 text-gray-700" />
              <h2 className="text-xl font-semibold text-gray-900">Tomar Pedido</h2>
              <p className="text-sm text-gray-600 text-center">
                Registrar nuevo pedido de mesa
              </p>
            </div>
          </button>

          <button
            onClick={() => onNavigate('mesero-active-orders')}
            className="bg-white border-2 border-gray-300 rounded-lg p-8 hover:border-gray-400 transition-colors"
          >
            <div className="flex flex-col items-center gap-4">
              <ClipboardList className="w-16 h-16 text-gray-700" />
              <h2 className="text-xl font-semibold text-gray-900">Órdenes Activas</h2>
              <p className="text-sm text-gray-600 text-center">
                Ver pedidos pendientes y generar tickets
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
