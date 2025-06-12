import AuthForm from "@/app/auth/AuthForm";

export default function AuthPage() {
    return (
        <main
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <AuthForm />
        </main>
    );
}
