import { useState } from 'react';
import { Calendar, Trash2 } from 'lucide-react';
import Header from '../Header';

interface SalesReportsProps {
  onNavigate: (view: string) => void;
}

interface Supply {
  id: string;
  name: string;
  quantityKg: number;   // kg
  pricePerKg: number;  // $ por kg
}

export default function SalesReports({ onNavigate }: SalesReportsProps) {
  const [tab, setTab] = useState<'ventas' | 'insumos' | 'ganancias'>('ventas');

  // ----------------- DATOS DE VENTAS (IGUAL QUE ANTES) -----------------
  const topProducts = [
    { name: 'Taco de Asada', quantity: 45, revenue: 675 },
    { name: 'Torta de Pastor', quantity: 12, revenue: 540 },
    { name: 'Taco de Pastor', quantity: 38, revenue: 570 },
    { name: 'Refresco', quantity: 28, revenue: 420 },
    { name: 'Taco de Pollo', quantity: 22, revenue: 286 },
  ];

  const dailySales = [
    { date: '10/Feb', orders: 28, total: 1245 },
    { date: '09/Feb', orders: 32, total: 1380 },
    { date: '08/Feb', orders: 25, total: 1120 },
    { date: '07/Feb', orders: 30, total: 1290 },
    { date: '06/Feb', orders: 27, total: 1180 },
  ];

  const totalSales = 6215;
  const totalOrders = 142;
  const avgPerOrder = 43.77;

  // ----------------- INSUMOS -----------------
  const [supplies, setSupplies] = useState<Supply[]>([
    { id: '1', name: 'Carne de res', quantityKg: 5, pricePerKg: 180 },
    { id: '2', name: 'Tortillas', quantityKg: 10, pricePerKg: 20 },
    { id: '3', name: 'Cebolla', quantityKg: 3, pricePerKg: 25 },
  ]);

  const [newName, setNewName] = useState('');
  const [newQtyKg, setNewQtyKg] = useState<number>(1);
  const [newPricePerKg, setNewPricePerKg] = useState<number>(0);

  const addSupply = () => {
    if (!newName || newQtyKg <= 0 || newPricePerKg <= 0) return;

    setSupplies([
      ...supplies,
      {
        id: Date.now().toString(),
        name: newName,
        quantityKg: newQtyKg,
        pricePerKg: newPricePerKg,
      },
    ]);

    setNewName('');
    setNewQtyKg(1);
    setNewPricePerKg(0);
  };

  const removeSupply = (id: string) => {
    setSupplies(supplies.filter((s) => s.id !== id));
  };

  const totalSuppliesCost = supplies.reduce(
    (acc, s) => acc + s.quantityKg * s.pricePerKg,
    0
  );

  // ----------------- GANANCIAS -----------------
  const otherExpenses = 500; // ejemplo
  const profit = totalSales - totalSuppliesCost - otherExpenses;

  const previousWeeksProfits = [
    { week: 'Semana pasada', amount: 1850 },
    { week: 'Hace 2 semanas', amount: 1620 },
    { week: 'Hace 3 semanas', amount: 1740 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        title="Reportes de Ventas"
        onBack={() => onNavigate('admin-dashboard')}
        userName="Josué Suárez"
        userRole="Administrador"
      />

      <div className="p-4 space-y-4">
        {/* TABS */}
        <div className="flex gap-2">
          <button
            onClick={() => setTab('ventas')}
            className={`px-4 py-2 rounded-lg border ${tab === 'ventas' ? 'bg-gray-900 text-white' : 'bg-white'
              }`}
          >
            Ventas
          </button>
          <button
            onClick={() => setTab('insumos')}
            className={`px-4 py-2 rounded-lg border ${tab === 'insumos' ? 'bg-gray-900 text-white' : 'bg-white'
              }`}
          >
            Insumos
          </button>
          <button
            onClick={() => setTab('ganancias')}
            className={`px-4 py-2 rounded-lg border ${tab === 'ganancias' ? 'bg-gray-900 text-white' : 'bg-white'
              }`}
          >
            Ganancias
          </button>
        </div>

        {/* ----------------- VENTAS ----------------- */}
        {tab === 'ventas' && (
          <>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rango de Fechas
              </label>
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                  <Calendar className="absolute right-3 top-2.5 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
                <div className="flex-1 relative">
                  <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                  <Calendar className="absolute right-3 top-2.5 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <p className="text-sm text-gray-600 mb-1">Total Ventas</p>
                <p className="text-2xl font-bold text-gray-900">${totalSales.toFixed(2)}</p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <p className="text-sm text-gray-600 mb-1">Total Órdenes</p>
                <p className="text-2xl font-bold text-gray-900">{totalOrders}</p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <p className="text-sm text-gray-600 mb-1">Promedio por Orden</p>
                <p className="text-2xl font-bold text-gray-900">${avgPerOrder.toFixed(2)}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Productos Más Vendidos</h3>
              <div className="space-y-2">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{product.name}</p>
                      <p className="text-sm text-gray-600">
                        {product.quantity} unidades vendidas
                      </p>
                    </div>
                    <p className="text-lg font-semibold text-gray-900">
                      ${product.revenue}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ventas por Día</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Fecha</th>
                      <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">Órdenes</th>
                      <th className="px-4 py-2 text-right text-sm font-medium text-gray-700">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {dailySales.map((day, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900">{day.date}</td>
                        <td className="px-4 py-3 text-sm text-gray-900 text-center">{day.orders}</td>
                        <td className="px-4 py-3 text-sm text-gray-900 text-right font-medium">
                          ${day.total}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* ----------------- INSUMOS ----------------- */}
        {tab === 'insumos' && (
          <>
            <div className="bg-white rounded-lg border border-gray-200 p-4 space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">Agregar Insumo</h3>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                <input
                  type="text"
                  placeholder="Nombre del insumo (ej: Carne de res)"
                  className="px-3 py-2 border border-gray-300 rounded-md"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />

                <div>
                  <p className="text-xs text-gray-600 mb-1">Cantidad (kg)</p>
                  <input
                    type="number"
                    min={0.1}
                    step={0.1}
                    placeholder="Cantidad (kg)"
                    className="px-3 py-2 border border-gray-300 rounded-md w-full"
                    value={newQtyKg}
                    onChange={(e) => setNewQtyKg(Number(e.target.value))}
                  />
                </div>

                <div>
                  <p className="text-xs text-gray-600 mb-1">Precio por kg ($/kg)</p>
                  <input
                    type="number"
                    min={1}
                    step={1}
                    placeholder="Precio ($/kg)"
                    className="px-3 py-2 border border-gray-300 rounded-md w-full"
                    value={newPricePerKg}
                    onChange={(e) => setNewPricePerKg(Number(e.target.value))}
                  />
                </div>

                <button
                  onClick={addSupply}
                  className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800"
                >
                  + Agregar
                </button>
              </div>

              <p className="text-xs text-gray-500">
                La cantidad se ingresa en kilogramos (kg) y el precio es por kilogramo ($/kg).
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Insumo</th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">Cantidad (kg)</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">Precio ($/kg)</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">Subtotal</th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {supplies.map((s) => (
                    <tr key={s.id}>
                      <td className="px-4 py-3">{s.name}</td>
                      <td className="px-4 py-3 text-center">{s.quantityKg} kg</td>
                      <td className="px-4 py-3 text-right">${s.pricePerKg}</td>
                      <td className="px-4 py-3 text-right font-medium">
                        ${(s.quantityKg * s.pricePerKg).toFixed(2)}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button
                          onClick={() => removeSupply(s.id)}
                          className="p-2 hover:bg-red-100 rounded text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="p-4 text-right font-semibold">
                Total Insumos: ${totalSuppliesCost.toFixed(2)}
              </div>
            </div>
          </>
        )}

        {/* ----------------- GANANCIAS ----------------- */}
        {tab === 'ganancias' && (
          <>
            <div className="mb-2">
              <p className="text-sm text-gray-600">Ganancias semanales</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <p className="text-sm text-gray-600 mb-1">Ingresos</p>
                <p className="text-2xl font-bold text-gray-900">${totalSales.toFixed(2)}</p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <p className="text-sm text-gray-600 mb-1">Gasto en Insumos</p>
                <p className="text-2xl font-bold text-red-600">
                  -${totalSuppliesCost.toFixed(2)}
                </p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <p className="text-sm text-gray-600 mb-1">Ganancia</p>
                <p className="text-2xl font-bold text-green-600">
                  ${profit.toFixed(2)}
                </p>
              </div>
            </div>

            {/* MEJORADO VISUALMENTE */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 mt-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Ganancias de semanas previas
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {previousWeeksProfits.map((w, i) => (
                  <div
                    key={i}
                    className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors"
                  >
                    <p className="text-xs text-gray-500 mb-1">{w.week}</p>
                    <p className="text-lg font-bold text-gray-900">
                      ${w.amount.toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>

  );
}
