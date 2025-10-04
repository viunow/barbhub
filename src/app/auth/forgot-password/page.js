import Card from "@/components/ui/card";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card
        title="Recuperar Senha"
        subtitle="Enviaremos um link para redefinir sua senha"
        className="w-full max-w-md"
      >
        <ForgotPasswordForm />
      </Card>
    </div>
  );
}
