import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import { AuthProvider, useAuth } from "@/lib/AuthContext";
import UserNotRegisteredError from "@/components/UserNotRegisteredError";
import ProtectedRoute from "@/components/ProtectedRoute";

import Login from "@/pages/Login";
import Register from "@/pages/Register";
import ForgotPassword from "@/pages/ForgotPassword";
import ResetPassword from "@/pages/ResetPassword";

import AppLayout from "@/components/layout/AppLayout";
import Home from "@/pages/Home";
import AIMentor from "@/pages/AIMentor";
import DoubtSolver from "@/pages/DoubtSolver";
import EntranceExams from "@/pages/EntranceExams";
import Scholarships from "@/pages/Scholarships";
import Quizzes from "@/pages/Quizzes";
import Dashboard from "@/pages/Dashboard";
import CareerMatch from "@/pages/CareerMatch";
import LearningPaths from "@/pages/LearningPaths";
import Opportunities from "@/pages/Opportunities";
import ProjectGenerator from "@/pages/ProjectGenerator";
import MockInterview from "@/pages/MockInterview";
import Challenge from "@/pages/Challenge";

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-sm text-muted-foreground">Loading Pathify AI...</p>
