"use client";

import { useState, useEffect } from "react";
import { Bell, X, Check, CheckCheck, Trash2 } from "lucide-react";
import { useNotifications } from "@/lib/useNotifications";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

/**
 * NotificationBell Component
 * Displays a bell icon with unread notification count
 * Shows a dropdown with recent notifications when clicked
 */
export function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    notifications,
    unreadCount,
    loading,
    error,
    fetchNotifications,
    markAsRead,
    markAllAsRead,
    deleteNotification,
  } = useNotifications();

  useEffect(() => {
    if (isOpen) {
      fetchNotifications();
    }
  }, [isOpen, fetchNotifications]);

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  const getTypeColor = (type: string) => {
    switch (type?.toUpperCase()) {
      case "CRITICAL":
      case "ERROR":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "WARNING":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "INFO":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "SUCCESS":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
    }
  };

  return (
    <div className="relative">
      {/* Bell Icon Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-slate-300 hover:text-white transition-colors"
        aria-label="Notifications"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <Badge
            variant="destructive"
            className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
          >
            {unreadCount > 99 ? "99+" : unreadCount}
          </Badge>
        )}
      </button>

      {/* Dropdown Popover */}
      {isOpen && (
        <div className="absolute right-0 mt-2 z-50 w-80">
          <Card className="shadow-lg">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Notifications</CardTitle>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              {unreadCount > 0 && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    markAllAsRead();
                  }}
                  className="mt-2 w-full text-xs"
                >
                  <CheckCheck className="w-3 h-3 mr-1" />
                  Mark all as read
                </Button>
              )}
            </CardHeader>

            <CardContent className="p-0">
              {loading && (
                <div className="px-4 py-8 text-center text-sm text-neutral-500">
                  Loading notifications...
                </div>
              )}

              {error && (
                <div className="px-4 py-4 text-sm text-red-600 bg-red-50 dark:bg-red-900 dark:text-red-200">
                  Error: {error}
                </div>
              )}

              {!loading && !error && notifications.length === 0 && (
                <div className="px-4 py-8 text-center text-sm text-neutral-500">
                  No notifications yet
                </div>
              )}

              {!loading && !error && notifications.length > 0 && (
                <ScrollArea className="h-[400px]">
                  <div className="space-y-2 p-4">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-3 rounded-lg border transition-colors ${
                          notification.isRead
                            ? "bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800"
                            : "bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-800"
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-sm text-neutral-900 dark:text-neutral-100">
                                {notification.title}
                              </span>
                              <Badge
                                variant="secondary"
                                className={`text-xs flex-shrink-0 ${getTypeColor(
                                  notification.type
                                )}`}
                              >
                                {notification.type}
                              </Badge>
                            </div>
                            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 line-clamp-2">
                              {notification.message}
                            </p>
                            <span className="text-xs text-neutral-500 dark:text-neutral-500 mt-2 block">
                              {formatTime(notification.createdAt)}
                            </span>
                          </div>

                          <div className="flex gap-1 flex-shrink-0">
                            {!notification.isRead && (
                              <button
                                onClick={() => markAsRead(notification.id)}
                                className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
                                aria-label="Mark as read"
                                title="Mark as read"
                              >
                                <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                              </button>
                            )}
                            <button
                              onClick={() => deleteNotification(notification.id)}
                              className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
                              aria-label="Delete"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
