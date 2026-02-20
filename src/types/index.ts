export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
}

export interface OrderItem {
  product: Product;
  quantity: number;
  notes?: string;
}

export interface Order {
  id: string;
  tableNumber: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'paid';
  timestamp: Date;
}

export interface Supply {
  id: string;
  name: string;
  status: 'needed' | 'purchased';
  dateAdded: Date;
}

export interface User {
  id: string;
  name: string;
  role: 'mesero' | 'cocina' | 'admin';
  active: boolean;
}

export type ViewType =
  | 'role-select'
  | 'login-mesero'
  | 'login-admin'
  | 'mesero-menu'
  | 'mesero-take-order'
  | 'mesero-active-orders'
  | 'cocina-orders'
  | 'admin-dashboard'
  | 'admin-menu'
  | 'admin-reports'
  | 'admin-close-cash'
  | 'admin-supplies'
  | 'admin-users';
