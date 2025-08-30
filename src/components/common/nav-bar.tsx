'use client';
import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';
// import { useData } from '../../context/DataContext';
import {
  Bell,
  User,
  LogOut,
  GraduationCap,
  MessageSquare,
  Settings,
  Book,
} from 'lucide-react';
import Link from 'next/link';
import Box from '@/components/ui/box';
// import { user } from '@/features';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/auth/useAuthStore';
import { Role, Roles } from '@/types/features/auth';
import { useLogin } from '@/hooks/auth/useLogin';

const Header: React.FC = () => {
  const user = useAuth();
  const { handleLogout } = useLogin();

  const getRoleColor = (role: Role) => {
    switch (role) {
      case Roles.SUPERVISOR:
        return 'bg-blue-100 text-blue-800';
      case Roles.STUDENT:
        return 'bg-emerald-100 text-emerald-800';
      case Roles.ADMIN:
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getNavItems = () => {
    if (!user) return [];

    const baseItems = [
      { path: '/dashboard', label: 'Dashboard', icon: GraduationCap },
      { path: '/messages', label: 'Messages', icon: MessageSquare },
      { path: '/projects', label: 'Projects', icon: Book },
    ];

    if (user?.role === Roles.ADMIN) {
      baseItems.push({ path: '/admin', label: 'Admin', icon: Settings });
    }

    return baseItems;
  };

  const pathname = usePathname();
  return (
    <Box as="header" className="bg-white shadow-sm border-b border-gray-200">
      <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Box className="flex justify-between items-center h-16">
          <Box className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <Box as="span" className="text-xl font-bold text-gray-900">
                MentorHub
              </Box>
            </Link>
          </Box>

          {user && (
            <Box as="nav" className="hidden md:flex space-x-8">
              {getNavItems().map(item => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors ${
                      pathname === item.path
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.label}
                  </Link>
                );
              })}
            </Box>
          )}

          {user ? (
            <Box className="flex items-center space-x-4">
              <Box className="relative">
                <Box
                  as="button"
                  className="p-2 text-gray-400 hover:text-gray-500 transition-colors"
                >
                  <Bell className="h-5 w-5" />
                </Box>

                <Box
                  as="span"
                  className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center"
                >
                  {5}
                </Box>
              </Box>

              <Box className="flex items-center space-x-3">
                <Box className="text-right">
                  <Box as="p" className="text-sm font-medium text-gray-900">
                    {`${user?.firstName ?? 'N'} ${user?.lastName ?? 'A'} `}
                  </Box>
                  <Box
                    as="span"
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(
                      user?.role
                    )}`}
                  >
                    {user?.role ?? 'N/A'}
                  </Box>
                </Box>
                <Box className="flex items-center space-x-2">
                  <Box className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                    <User className="h-4 w-4 text-gray-600" />
                  </Box>
                  <Box
                    as="button"
                    onClick={() => handleLogout()}
                    className="p-2 text-gray-400 hover:text-gray-500 transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                  </Box>
                </Box>
              </Box>
            </Box>
          ) : (
            <Box className="flex items-center space-x-4">
              <Link
                href="/login"
                className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium"
              >
                Sign in
              </Link>
              <Link
                href="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sign up
              </Link>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
