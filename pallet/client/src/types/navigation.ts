export type NavigationItemType = 'link' | 'submenu';
export type NavigationItemCategory = 
  | 'frequently_used'
  | 'creator_tools' 
  | 'admin_tools' 
  | 'page_builders' 
  | 'personal_growth' 
  | 'marketplace' 
  | 'system'
  | 'brand_center'
  | 'website_setup'
  | 'uncategorized'
  // New categories for reorganized sidebar
  | 'quick_actions'
  | 'create_publish'
  | 'manage_monitor'
  | 'settings_advanced';

export type NavigationGroup = {
  id: string;
  title: string;
  icon: string;
  category: NavigationItemCategory;
};

export type NavigationItemBadge = {
  text: string;
  variant?: 'default' | 'new' | 'updated' | 'beta' | 'pro';
};

export interface BaseNavigationItem {
  id: string;
  title: string;
  icon: string;
  type: NavigationItemType;
  badge?: NavigationItemBadge;
  isNew?: boolean;
  description?: string;
  requiresStaff?: boolean;
  requiresSuperAdmin?: boolean; // Only show to super admins
  category: NavigationItemCategory;
  pinnedOrder?: number; // For Quick Select menu
}

export interface NavigationLink extends BaseNavigationItem {
  type: 'link';
  href: string;
}

export interface NavigationSubmenu extends BaseNavigationItem {
  type: 'submenu';
  items: NavigationLink[];
}

export type NavigationItem = NavigationLink | NavigationSubmenu;

export interface NavigationState {
  pinnedItems: string[]; // IDs of pinned items for Quick Select
  expandedGroups: string[]; // IDs of expanded groups in sidebar
  expandedSubmenus: string[]; // IDs of expanded submenus
  sidebarCollapsed: boolean; // For desktop sidebar state
  mobileSidebarCollapsed: boolean; // For mobile sidebar state
  quickSelectEnabled: boolean;
  focusedMode: boolean; // Whether the UI is in focused mode (hides smart context)
}

// Default navigation groups
export const DEFAULT_NAVIGATION_GROUPS: NavigationGroup[] = [
  {
    id: 'quick_actions',
    title: 'Quick Actions',
    icon: 'Zap',
    category: 'quick_actions',
  },
  {
    id: 'create_publish',
    title: 'Create & Publish',
    icon: 'PenTool',
    category: 'create_publish',
  },
  {
    id: 'manage_monitor',
    title: 'Manage & Monitor',
    icon: 'BarChart',
    category: 'manage_monitor',
  },
  {
    id: 'settings_advanced',
    title: 'Settings & Advanced',
    icon: 'Settings',
    category: 'settings_advanced',
  },
  // Keeping old categories for backward compatibility
  {
    id: 'frequently_used',
    title: 'Frequently Used',
    icon: 'Star',
    category: 'frequently_used',
  },
  {
    id: 'creator_tools',
    title: 'Content Creation',
    icon: 'Sparkles',
    category: 'creator_tools',
  },
  {
    id: 'admin_tools',
    title: 'Analytics & Insights',
    icon: 'BarChart3',
    category: 'admin_tools',
  },
  {
    id: 'page_builders',
    title: 'Page Builders',
    icon: 'SquarePen',
    category: 'page_builders',
  },
  {
    id: 'website_setup',
    title: 'Website Settings',
    icon: 'Globe',
    category: 'website_setup',
  },
  {
    id: 'brand_center',
    title: 'Brand Center',
    icon: 'Palette',
    category: 'brand_center',
  },
  {
    id: 'personal_growth',
    title: 'Growth & Networking',
    icon: 'TrendingUp',
    category: 'personal_growth',
  },
  {
    id: 'marketplace',
    title: 'Marketplace',
    icon: 'ShoppingCart',
    category: 'marketplace',
  },
  {
    id: 'system',
    title: 'System & Administration',
    icon: 'Settings',
    category: 'system',
  }
];