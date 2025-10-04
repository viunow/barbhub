import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import ClientRegisterForm from "@/components/auth/ClientRegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Criar Conta</CardTitle>
          <CardDescription>Cadastre-se para começar a agendar</CardDescription>
        </CardHeader>
        <CardContent>
          <ClientRegisterForm />
        </CardContent>
      </Card>
    </div>
  );
}
