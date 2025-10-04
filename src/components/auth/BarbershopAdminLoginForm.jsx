"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Alert from "@/components/ui/alert";
import authService from "@/services/authService";

export default function BarbershopAdminLoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await authService.barbershopAdminLogin(
        formData.username,
        formData.password
      );
      router.push("/admin/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <Alert type="error" message={error} onClose={() => setError("")} />

      <Input
        label="Usuário"
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="admin"
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

      <Button type="submit" fullWidth loading={loading}>
        Entrar
      </Button>
    </form>
  );
}
