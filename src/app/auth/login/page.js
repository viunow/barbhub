import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import ClientLoginForm from "@/components/auth/ClientLoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Bem-vindo</CardTitle>
          <CardDescription>Faça login para agendar seu horário</CardDescription>
        </CardHeader>
        <CardContent>
          <ClientLoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
