import Card from "@/components/ui/card";
import MasterAdminLoginForm from "@/components/auth/MasterAdminLoginForm";

export default function MasterLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <Card
        title="Master Admin"
        subtitle="Acesso global ao sistema"
        className="w-full max-w-md"
      >
        <MasterAdminLoginForm />
      </Card>
    </div>
  );
}
