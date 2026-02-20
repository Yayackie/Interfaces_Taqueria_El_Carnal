import { useState } from 'react';
import { ViewType } from './types';
import RoleSelect from './components/RoleSelect';
import MeseroMenu from './components/mesero/MeseroMenu';
import TakeOrder from './components/mesero/TakeOrder';
import ActiveOrders from './components/mesero/ActiveOrders';
import KitchenOrders from './components/cocina/KitchenOrders';
import AdminDashboard from './components/admin/AdminDashboard';
import MenuManagement from './components/admin/MenuManagement';
import SalesReports from './components/admin/SalesReports';
import CloseCash from './components/admin/CloseCash';
import SuppliesManagement from './components/admin/SuppliesManagement';
import UserManagement from './components/admin/UserManagement';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('role-select');
  const [showExitModal, setShowExitModal] = useState(false);
  const [pendingRole, setPendingRole] = useState<string | null>(null);

  const handleNavigate = (view: string) => {
    // Solo interceptar si estamos en role-select
    if (currentView === 'role-select') {
      if (view === 'mesero-menu') {
        setPendingRole('mesero-menu');
        setCurrentView('login-mesero');
        return;
      }

      if (view === 'admin-dashboard') {
        setPendingRole('admin-dashboard');
        setCurrentView('login-admin');
        return;
      }
    }

    setCurrentView(view as ViewType);
  };

  const handleLogin = () => {
    if (pendingRole) {
      setCurrentView(pendingRole as ViewType);
      setPendingRole(null);
    }
  };

  const handleExitRequest = () => {
    setShowExitModal(true);
  };

  const confirmExit = () => {
    setCurrentView('role-select');
    setShowExitModal(false);
  };

  const renderLogin = (role: string) => (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-6 text-center">
          Ingresar como {role}
        </h2>

        <input
          type="text"
          placeholder="Usuario"
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="w-full border border-gray-300 rounded-md p-2 mb-6"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 mb-3"
        >
          Ingresar
        </button>

        <button
          onClick={() => setCurrentView('role-select')}
          className="w-full border border-gray-300 py-2 rounded-md hover:bg-gray-50"
        >
          Cancelar
        </button>
      </div>
    </div>
  );

  const renderView = () => {
    switch (currentView) {
      case 'role-select':
        return <RoleSelect onSelectRole={handleNavigate} />;

      case 'login-mesero':
        return renderLogin('Mesero');

      case 'login-admin':
        return renderLogin('Administrador');

      case 'mesero-menu':
        return (
          <MeseroMenu
            onNavigate={handleNavigate}
            onExit={handleExitRequest}
          />
        );

      case 'mesero-take-order':
        return <TakeOrder onNavigate={handleNavigate} />;

      case 'mesero-active-orders':
        return <ActiveOrders onNavigate={handleNavigate} />;

      case 'cocina-orders':
        return (
          <KitchenOrders
            onNavigate={handleNavigate}
            onExit={handleExitRequest}
          />
        );

      case 'admin-dashboard':
        return (
          <AdminDashboard
            onNavigate={handleNavigate}
            onExit={handleExitRequest}
          />
        );

      case 'admin-menu':
        return <MenuManagement onNavigate={handleNavigate} />;

      case 'admin-reports':
        return <SalesReports onNavigate={handleNavigate} />;

      case 'admin-close-cash':
        return <CloseCash onNavigate={handleNavigate} />;

      case 'admin-supplies':
        return <SuppliesManagement onNavigate={handleNavigate} />;

      case 'admin-users':
        return <UserManagement onNavigate={handleNavigate} />;

      default:
        return <RoleSelect onSelectRole={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen relative">
      {renderView()}

      {showExitModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-lg font-semibold mb-4 text-center">
              ¿Deseas salir?
            </h3>

            <div className="flex gap-4">
              <button
                onClick={confirmExit}
                className="flex-1 bg-red-600 text-white py-2 rounded-md hover:bg-red-700"
              >
                Sí, salir
              </button>

              <button
                onClick={() => setShowExitModal(false)}
                className="flex-1 border border-gray-300 py-2 rounded-md hover:bg-gray-50"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
