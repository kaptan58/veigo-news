import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
import { useState } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "admin@veigo.de" && password === "123456") {
      setLoggedIn(true);
    } else {
      setError("Hatalı e-posta veya şifre!");
    }
  };

  if (loggedIn) {
    const stats = [
      { title: "Toplam Firma", value: 15 },
      { title: "Kayıtlı Araçlar", value: 120 },
      { title: "Aktif Şoförler", value: 85 },
      { title: "Bugünkü Gelir", value: "3.280 €" },
      { title: "Aylık Kazanç", value: "92.400 €" },
      { title: "Bekleyen Talepler", value: 7 },
    ];

    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">📊 VEIGO Admin Panel</h1>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {stats.map((item, i) => (
            <div key={i} className="rounded-xl bg-gray-800 text-white p-5 shadow-md">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-2xl">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 bg-gray-100">
      <img src="/logo.png" alt="Logo" className="w-24 mb-6" />
      <h1 className="text-2xl font-bold mb-4">Admin Giriş</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-3 w-full max-w-sm">
        <input name="email" type="email" placeholder="E-posta" className="p-2 border rounded" />
        <input name="password" type="password" placeholder="Şifre" className="p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Giriş Yap</button>
        {error && <p className="text-red-600">{error}</p>}
      </form>
    </div>
  );
}

  useEffect(() => {
    router.replace("/login");
  }, []);

  return null;
}
