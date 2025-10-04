"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Alert from "@/components/ui/alert";
import authService from "@/services/authService";

export default function ClientRegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    if (formData.password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres");
      return;
    }

    setLoading(true);

    try {
      await authService.clientRegister(
        formData.name,
        formData.email,
        formData.password,
        formData.phone
      );
      setSuccess(
        "Cadastro realizado com sucesso! Verifique seu email para ativar sua conta."
      );
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
    <form onSubmit={handleSubmit} className="w-full">
      <Alert type="error" message={error} onClose={() => setError("")} />
      <Alert type="success" message={success} onClose={() => setSuccess("")} />

      <Input
        label="Nome Completo"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="João Silva"
        required
      />

      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="seu@email.com"
        required
      />

      <Input
        label="Telefone"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="11999999999"
        required
      />

      <Input
        label="Senha"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="••••••••"
        required
      />

      <Input
        label="Confirmar Senha"
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="••••••••"
        required
      />

      <Button type="submit" fullWidth loading={loading}>
        Cadastrar
      </Button>

      <div className="mt-4 text-center">
        <span className="text-sm text-gray-600">Já tem uma conta? </span>
        <Link
          href="/auth/login"
          className="text-sm text-blue-600 hover:underline font-medium"
        >
          Faça login
        </Link>
      </div>
    </form>
  );
}
