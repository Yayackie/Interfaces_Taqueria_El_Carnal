import { Calculator } from 'lucide-react';
import Header from '../Header';

interface CloseCashProps {
  onNavigate: (view: string) => void;
}

export default function CloseCash({ onNavigate }: CloseCashProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        title="Cierre de Caja"
        onBack={() => onNavigate('admin-dashboard')}
        userName="Josué Suárez"
        userRole="Administrador"
      />

      <div className="p-4 max-w-2xl mx-auto space-y-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Resumen del Día
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Total de órdenes:</span>
              <span className="font-semibold text-gray-900">28</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Ventas registradas:</span>
              <span className="font-semibold text-gray-900">$1,245.00</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Promedio por orden:</span>
              <span className="font-semibold text-gray-900">$44.46</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Efectivo en Caja
          </h3>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ingrese el efectivo contado
          </label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-gray-500">$</span>
            <input
              type="number"
              placeholder="0.00"
              className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md text-lg"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Comparación
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Esperado (ventas):</span>
              <span className="font-semibold text-gray-900">$1,245.00</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Contado (efectivo):</span>
              <span className="font-semibold text-gray-900">$0.00</span>
            </div>
            <div className="flex justify-between py-2 border-t-2 border-gray-300 pt-3">
              <span className="text-lg font-semibold text-gray-900">
                Diferencia:
              </span>
              <span className="text-lg font-semibold text-gray-900">$0.00</span>
            </div>
          </div>
        </div>

        <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
          <Calculator className="w-5 h-5" />
          Realizar Cierre de Caja
        </button>

        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-sm text-gray-600 text-center">
            El cierre de caja generará un reporte y cerrará el día contable
          </p>
        </div>
      </div>
    </div>
  );
}
