"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Alert from "@/components/ui/alert";
import Button from "@/components/ui/button";
import authService from "@/services/authService";

export default function EmailVerification() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) {
      setError("Token de verificação não encontrado");
      setLoading(false);
      return;
    }

    verifyEmail(token);
  }, [searchParams]);

  const verifyEmail = async (token) => {
    try {
      await authService.verifyEmail(token);
      setSuccess(true);
      setTimeout(() => {
        router.push("/auth/login");
      }, 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center">
      {loading && (
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">Verificando seu email...</p>
        </div>
      )}

      {error && (
        <>
          <Alert type="error" message={error} />
          <Button onClick={() => router.push("/auth/login")} className="mt-4">
            Voltar para Login
          </Button>
        </>
      )}

      {success && (
        <div>
          <Alert
            type="success"
            message="Email verificado com sucesso! Redirecionando para login..."
          />
          <div className="mt-4">
            <svg
              className="w-16 h-16 text-green-500 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
