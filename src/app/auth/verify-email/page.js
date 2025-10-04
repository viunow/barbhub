import { Suspense } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import EmailVerification from "@/components/auth/EmailVerification";

function EmailVerificationContent() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      }
    >
      <EmailVerification />
    </Suspense>
  );
}

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Verificação de Email</CardTitle>
        </CardHeader>
        <CardContent>
          <EmailVerificationContent />
        </CardContent>
      </Card>
    </div>
  );
}
