import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import BarbershopAdminLoginForm from "@/components/auth/BarbershopAdminLoginForm";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Admin da Barbearia</CardTitle>
          <CardDescription>Acesso exclusivo para administradores</CardDescription>
        </CardHeader>
        <CardContent>
          <BarbershopAdminLoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
