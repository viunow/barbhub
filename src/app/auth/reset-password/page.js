import { Suspense } from "react";
import Card from "@/components/ui/card";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

function ResetPasswordContent() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      }
    >
      <ResetPasswordForm />
    </Suspense>
  );
}

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card
        title="Redefinir Senha"
        subtitle="Digite sua nova senha"
        className="w-full max-w-md"
      >
        <ResetPasswordContent />
      </Card>
    </div>
  );
}
