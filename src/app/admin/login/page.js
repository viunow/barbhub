import Card from "@/components/ui/card";
import BarbershopAdminLoginForm from "@/components/auth/BarbershopAdminLoginForm";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card
        title="Admin da Barbearia"
        subtitle="Acesso exclusivo para administradores"
        className="w-full max-w-md"
      >
        <BarbershopAdminLoginForm />
      </Card>
    </div>
  );
}
