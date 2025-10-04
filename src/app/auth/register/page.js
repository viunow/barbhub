import Card from "@/components/ui/card";
import ClientRegisterForm from "@/components/auth/ClientRegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card
        title="Criar Conta"
        subtitle="Cadastre-se para começar a agendar"
        className="w-full max-w-md"
      >
        <ClientRegisterForm />
      </Card>
    </div>
  );
}
