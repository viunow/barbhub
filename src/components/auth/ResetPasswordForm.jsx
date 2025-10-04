"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Alert from "@/components/ui/alert";
import authService from "@/services/authService";

export default function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [token, setToken] = useState("");
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const tokenParam = searchParams.get("token");
    if (!tokenParam) {
      setError("Token de recuperação não encontrado");
    } else {
      setToken(tokenParam);
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.newPassword !== formData.confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    if (formData.newPassword.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres");
      return;
    }

    setLoading(true);

    try {
      await authService.resetPassword(token, formData.newPassword);
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

  if (success) {
    return (
      <div className="w-full">
        <Alert
          type="success"
          message="Senha redefinida com sucesso! Redirecionando para login..."
        />
      </div>
    );
  }

  if (!token && error) {
    return (
      <div className="w-full">
        <Alert type="error" message={error} />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <Alert type="error" message={error} onClose={() => setError("")} />

      <Input
        label="Nova Senha"
        type="password"
        name="newPassword"
        value={formData.newPassword}
        onChange={handleChange}
        placeholder="••••••••"
        required
      />

      <Input
        label="Confirmar Nova Senha"
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="••••••••"
        required
      />

      <Button type="submit" fullWidth loading={loading}>
        Redefinir Senha
      </Button>
    </form>
  );
}
