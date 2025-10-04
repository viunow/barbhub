import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import MasterAdminLoginForm from "@/components/auth/MasterAdminLoginForm";

export default function MasterLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Master Admin</CardTitle>
          <CardDescription>Acesso global ao sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <MasterAdminLoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
