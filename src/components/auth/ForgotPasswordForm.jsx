"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Alert from "@/components/ui/alert";
import authService from "@/services/authService";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    try {
      await authService.requestPasswordReset(email);
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="w-full">
        <Alert
          type="success"
          message="Se o email existir, você receberá instruções para resetar a senha."
        />
        <div className="mt-6 text-center">
          <Link
            href="/auth/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Voltar para Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <Alert type="error" message={error} onClose={() => setError("")} />

      <p className="text-gray-600 mb-4 text-sm">
        Digite seu email e enviaremos um link para redefinir sua senha.
      </p>

      <Input
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="seu@email.com"
        required
      />

      <Button type="submit" fullWidth loading={loading}>
        Enviar Link de Recuperação
      </Button>

      <div className="mt-4 text-center">
        <Link
          href="/auth/login"
          className="text-sm text-blue-600 hover:underline"
        >
          Voltar para Login
        </Link>
      </div>
    </form>
  );
}
