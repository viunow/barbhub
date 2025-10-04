import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Recuperar Senha</CardTitle>
          <CardDescription>Enviaremos um link para redefinir sua senha</CardDescription>
        </CardHeader>
        <CardContent>
          <ForgotPasswordForm />
        </CardContent>
      </Card>
    </div>
  );
}
