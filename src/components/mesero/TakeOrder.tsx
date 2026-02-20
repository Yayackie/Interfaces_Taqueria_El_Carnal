import { Plus, Minus, Send, Trash2 } from 'lucide-react';
import { useState } from 'react';
import Header from '../Header';

interface TakeOrderProps {
  onNavigate: (view: string) => void;
}

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function TakeOrder({ onNavigate }: TakeOrderProps) {
  const [tableNumber, setTableNumber] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tacos');
  const [order, setOrder] = useState<OrderItem[]>([]);

  const categories = ['Tacos', 'Bebidas', 'Extras'];

  const products = {
    Tacos: [
      { id: '1', name: 'Taco de Asada', price: 15 },
      { id: '2', name: 'Taco de Pastor', price: 15 },
      { id: '3', name: 'Taco de Pollo', price: 13 },
    ],
    Bebidas: [
      { id: '6', name: 'Refresco', price: 15 },
      { id: '7', name: 'Agua', price: 10 },
    ],
    Extras: [
      { id: '8', name: 'Orden de Queso', price: 20 },
    ],
  };

  const addItem = (product: { id: string; name: string; price: number }) => {
    setOrder((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeItem = (productId: string) => {
    setOrder((prev) => {
      const existing = prev.find((item) => item.id === productId);
      if (!existing) return prev;

      if (existing.quantity === 1) {
        return prev.filter((item) => item.id !== productId);
      }

      return prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  const deleteItem = (productId: string) => {
    setOrder((prev) => prev.filter((item) => item.id !== productId));
  };

  const getQuantity = (productId: string) => {
    const item = order.find((i) => i.id === productId);
    return item ? item.quantity : 0;
  };

  const totalItems = order.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = order.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        title="Tomar Pedido"
        onBack={() => onNavigate('mesero-menu')}
        userName="Juan Pérez"
        userRole="Mesero"
      />

      <div className="p-4 space-y-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Número de Mesa
          </label>
          <input
            type="text"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
            placeholder="Ej: 5"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="bg-white rounded-lg border border-gray-200">
          <div className="border-b border-gray-200 overflow-x-auto">
            <div className="flex">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${selectedCategory === cat
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 space-y-2">
            {products[selectedCategory as keyof typeof products].map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{product.name}</p>
                  <p className="text-sm text-gray-600">${product.price}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => removeItem(product.id)}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-medium">
                    {getQuantity(product.id)}
                  </span>
                  <button
                    onClick={() => addItem(product)}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h3 className="font-medium text-gray-900 mb-2">Resumen del Pedido</h3>

          {order.length === 0 ? (
            <p className="text-sm text-gray-500">No hay productos en el pedido.</p>
          ) : (
            <div className="space-y-2 mb-4">
              {order.map((item) => (
                <div key={item.id} className="flex justify-between items-center text-sm">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <div className="flex items-center gap-2">
                    <span>${item.price * item.quantity}</span>
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <p className="text-sm text-gray-600">{totalItems} productos</p>
          <p className="text-lg font-semibold text-gray-900 mt-2">
            Total: ${totalPrice.toFixed(2)}
          </p>

          <button className="w-full mt-4 bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
            <Send className="w-5 h-5" />
            Enviar a Cocina
          </button>
        </div>
      </div>
    </div>
  );
}
